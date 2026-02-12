import { DOMAIN_NAME, MAIL_FROM_ADDRESS, MAIL_FROM_DOMAIN } from "@web/lib/config";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as rds from "aws-cdk-lib/aws-rds";
import * as ses from "aws-cdk-lib/aws-ses";
import * as sns from "aws-cdk-lib/aws-sns";
import * as subscriptions from "aws-cdk-lib/aws-sns-subscriptions";
import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";

/**
 * The name of the database
 */
const DATABASE_NAME = "michaelcummin-gs";

/**
 * Where to send SES notifications
 */
const SES_WEBHOOK_URL = `https://www.${DOMAIN_NAME}/api/webhooks/ses`;

export class BackendStack extends cdk.Stack {
	private notificationTopic: sns.Topic | undefined;
	private sesConfigurationSet: ses.ConfigurationSet | undefined;
	private oidcRole: iam.Role | undefined;
	private vpc: ec2.Vpc;
	private database: rds.DatabaseInstance;

	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);
		this.infrastructure();
		this.email();
		this.vercelOidc();
		this.outputs();
	}

	/**
	 * Infrastructure
	 * Contains:
	 *  - VPC
	 *  - Database
	 */
	private infrastructure() {
		this.vpc = new ec2.Vpc(this, "VPC", {
			maxAzs: 99,
			natGateways: 0,
			subnetConfiguration: [
				{
					name: "public",
					subnetType: ec2.SubnetType.PUBLIC
				}
			]
		});

		this.database = new rds.DatabaseInstance(this, "Database", {
			engine: rds.DatabaseInstanceEngine.postgres({
				version: rds.PostgresEngineVersion.VER_18
			}),
			instanceType: ec2.InstanceType.of(ec2.InstanceClass.T4G, ec2.InstanceSize.MICRO),
			vpc: this.vpc,
			vpcSubnets: {
				subnetType: ec2.SubnetType.PUBLIC
			},
			credentials: rds.Credentials.fromGeneratedSecret("postgres"),
			deletionProtection: true,
			databaseName: DATABASE_NAME,
			publiclyAccessible: true,
			parameterGroup: new rds.ParameterGroup(this, "ParameterGroup", {
				engine: rds.DatabaseInstanceEngine.postgres({
					version: rds.PostgresEngineVersion.VER_18
				}),
				parameters: {
					"rds.force_ssl": "0"
				}
			})
		});
		this.database.connections.allowFromAnyIpv4(ec2.Port.tcp(5432));
	}

	/**
	 * Email
	 * Contains:
	 *  - SES Identity
	 *  - SNS Topic to handle bounces and complaints
	 *  - Webhook Subscription
	 */
	private email() {
		this.notificationTopic = new sns.Topic(this, "SESNotificationsTopic", {
			displayName: "SES Notifications",
			topicName: "ses-notifications-topic"
		});
		this.notificationTopic.addSubscription(new subscriptions.UrlSubscription(SES_WEBHOOK_URL));
		this.sesConfigurationSet = new ses.ConfigurationSet(this, "SESNotificationsConfigSet", {
			configurationSetName: "ses-notifications-config-set"
		});
		new ses.CfnConfigurationSetEventDestination(this, "SESEventDestination", {
			configurationSetName: this.sesConfigurationSet.configurationSetName,
			eventDestination: {
				matchingEventTypes: ["BOUNCE", "COMPLAINT", "DELIVERY", "SEND"],
				enabled: true,
				snsDestination: {
					topicArn: this.notificationTopic.topicArn
				}
			}
		});
		new ses.EmailIdentity(this, "EmailIdentity", {
			configurationSet: this.sesConfigurationSet,
			identity: ses.Identity.domain(DOMAIN_NAME),
			mailFromDomain: MAIL_FROM_DOMAIN
		});
	}

	/**
	 * OIDC provider for Vercel
	 *
	 * Grants the following permissions:
	 * - Send no-reply emails
	 */
	private vercelOidc = () => {
		const oidcProvider = new iam.OpenIdConnectProvider(this, "VercelOidcProvider", {
			url: "https://oidc.vercel.com/michaelcummings",
			clientIds: ["https://vercel.com/michaelcummings"]
		});
		this.oidcRole = new iam.Role(this, "VercelOidcRole", {
			assumedBy: new iam.FederatedPrincipal(
				oidcProvider.openIdConnectProviderArn,
				{
					StringEquals: {
						"oidc.vercel.com/michaelcummings:aud": "https://vercel.com/michaelcummings"
					},
					StringLike: {
						"oidc.vercel.com/michaelcummings:sub": "owner:michaelcummings:project:michaelcummin-gs:environment:*"
					}
				},
				"sts:AssumeRoleWithWebIdentity"
			),
			roleName: "VercelOidcRole",
			inlinePolicies: {
				SendNoReplyEmailPolicy: new iam.PolicyDocument({
					statements: [
						new iam.PolicyStatement({
							actions: ["ses:SendEmail", "ses:SendRawEmail"],
							effect: iam.Effect.ALLOW,
							// resources: [this.emailIdentity?.emailIdentityArn!],
							resources: ["*"],
							conditions: {
								StringEquals: {
									"ses:FromAddress": MAIL_FROM_ADDRESS
								}
							}
						})
					]
				})
			}
		});
	};

	private outputs() {
		new cdk.CfnOutput(this, "OidcRoleArn", {
			value: this.oidcRole?.roleArn!
		});
		new cdk.CfnOutput(this, "SESNotificationTopicArn", {
			value: this.notificationTopic?.topicArn!
		});
	}
}

import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";

/**
 * The name of the database
 */
const DATABASE_NAME = "michaelcummin-gs";

export class BackendStack extends cdk.Stack {
	private vpc: ec2.Vpc;
	private database: rds.DatabaseInstance;

	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);
		this.infrastructure();
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
}

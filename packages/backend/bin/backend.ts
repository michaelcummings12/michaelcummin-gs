#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { BackendStack } from "@backend/lib/backend-stack";

const app = new cdk.App();
new BackendStack(app, "BackendStack", {
	env: { account: "", region: "us-east-2" }
});

import "dotenv/config";
import { defineConfig } from "prisma/config";
import { DATABASE_URL } from "./lib/config";

export default defineConfig({
	schema: "./prisma/schema.prisma",
	datasource: {
		url: DATABASE_URL
	}
});

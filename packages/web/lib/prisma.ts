import { PrismaPg } from "@prisma/adapter-pg";
import { DATABASE_URL } from "@web/lib/config";
import { PrismaClient } from "@web/prisma/generated/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const adapter = new PrismaPg({ connectionString: DATABASE_URL });

const prismaClient = new PrismaClient({ adapter, errorFormat: "pretty" });

const prisma = globalForPrisma.prisma || prismaClient;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };

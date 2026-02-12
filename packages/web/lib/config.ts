// No environment variables outside of this file

/**
 * Environment flags
 */
export const isDevelopment = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_VERCEL_ENV === "development";
export const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
export const isProduction = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

/**
 * AWS
 */
export const AWS_REGION = process.env.AWS_REGION ?? "us-east-2";
export const AWS_ROLE_ARN = process.env.AWS_ROLE_ARN!;

/**
 * Database
 */
export const DATABASE_URL = process.env.DATABASE_URL!;

/**
 * Domain names
 */
export const DOMAIN_NAME = "michaelcummin.gs";
export const MAIL_FROM_DOMAIN = `mail.${DOMAIN_NAME}`;
export const MAIL_FROM_ADDRESS = `no-reply@${DOMAIN_NAME}`;

/**
 * URLS for the application
 */
export const BASE_URL = isDevelopment ? "localhost:3000" : isPreview ? process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL : DOMAIN_NAME;
export const APP_URL = `${isDevelopment ? "http://" : isPreview ? "https://" : "https://www."}${BASE_URL}`;
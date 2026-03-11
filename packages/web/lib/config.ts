// No environment variables outside of this file

/**
 * Environment flags
 */
export const isDevelopment = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_VERCEL_ENV === "development";
export const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
export const isProduction = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

/**
 * Database
 */
export const DATABASE_URL = process.env.DATABASE_URL!;

/**
 * Domain name
 */
export const DOMAIN_NAME = "michaelcummin-gs";

/**
 * URLS for the application
 */
export const BASE_URL = isDevelopment ? "localhost:3000" : isPreview ? process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL : DOMAIN_NAME;
export const APP_URL = `${isDevelopment ? "http://" : isPreview ? "https://" : "https://www."}${BASE_URL}`;

/**
 * Google Analytics
 */
export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;

/**
 * OpenReplay
 */
export const OPENREPLAY_PROJECT_KEY = process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY!;

export const isDev = (): boolean => {
	if (process.env.VERCEL_ENV === "development" || process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
		return true;
	}
	return false;
};

export const isPreview = (): boolean => {
	if (process.env.VERCEL_ENV === "preview" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
		return true;
	}
	return false;
};

export const isProduction = (): boolean => {
	if (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
		return true;
	}
	return false;
};

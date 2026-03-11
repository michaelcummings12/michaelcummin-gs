export const isDev = (): boolean => {
	if (process.env.VERCEL_ENV === "development" || process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
		return true;
	}
	return false;
};

export const isDev = (): boolean => {
	if (process.env.NODE_ENV === "development" || process.env.ENVIRONMENT === "development" || process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
		return true;
	}
	return false;
};

export const isLocal = (): boolean => {
	if (process.env.ENVIRONMENT === "localhost" || process.env.NEXT_PUBLIC_ENVIRONMENT === "localhost") {
		return true;
	}
	return false;
};

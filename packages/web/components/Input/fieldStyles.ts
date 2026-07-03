// Shared visual styling for text field surfaces (Input + TextArea).
// Dark, native to the black canvas: translucent fill, hairline border, quiet brand-blue focus.

type FieldPosition = "top" | "bottom" | "middle" | "row" | undefined;

/** The field surface: fill, resting hairline, and focus ring behind the transparent input. */
export const fieldFill = (error: boolean) =>
	error
		? "bg-red-500/10 ring-1 ring-red-500/50 peer-focus:ring-2 peer-focus:ring-red-500"
		: "bg-white/8 ring-1 ring-white/15 peer-focus:bg-white/10 peer-focus:ring-2 peer-focus:ring-[#0071e3] peer-focus:shadow-[0_0_0_4px_rgba(0,113,227,0.20)]";

/** Corner radius, supporting grouped fields via the optional position. */
export const fieldRadius = (position?: FieldPosition) =>
	position === "top" ? "rounded-t-2xl" : position === "bottom" ? "rounded-b-2xl" : position === "middle" ? "rounded-none" : "rounded-2xl";

/** Floating label color across rest / empty / focus states. */
export const fieldLabelColor = (error: boolean) =>
	error ? "text-red-400 peer-placeholder-shown:text-red-400" : "text-white/50 peer-placeholder-shown:text-white/40 peer-focus:text-white/80";

/** Floating label position: small & pinned once filled or focused, full-size when empty. */
export const fieldLabelPosition = (error: boolean) =>
	error
		? "scale-75 top-1 left-4 font-medium"
		: "scale-75 top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:scale-75 left-4 peer-focus:font-medium";

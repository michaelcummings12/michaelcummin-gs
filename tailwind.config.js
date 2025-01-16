import tailwindScrollbar from "tailwind-scrollbar";
import tailwindcssSafeArea from "tailwindcss-safe-area";

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./views/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			serif: ["Overpass"],
			sans: ["Overpass"]
		},
		extend: {
			colors: {
				error: "#e00000"
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.35, 0, 0.65, 1)"
			},
			transitionDuration: {
				DEFAULT: "0.15s"
			},
			boxShadow: {
				default: "0px 0px 3px rgba(0, 10, 35, 0.35)",
				gcn: "0px 0px 6px 2px rgba(2, 126, 249, 1)",
				gcnInset: "inset 0px 0px 6px 2px rgba(2, 126, 249, 1)",
				inset: "inset 0px 0px 12px 4px rgb(0 0 0 / 0.1)"
			},
			height: {
				"screen-1/2": "calc(100vh / 2)"
			},
			keyframes: {
				bounce: {
					"0%, 100%": { transform: "translateY(-50%)" },
					"50%": { transform: "translateY(50%)" }
				}
			}
		}
	},
	variants: { fill: ["hover", "focus"] },
	plugins: [
		tailwindcssSafeArea,
		tailwindScrollbar,
		function ({ addUtilities, theme }) {
			const newUtilities = {};
			newUtilities[`.background-gcn`] = { background: "linear-gradient(90deg, rgba(2, 126, 249, 1) 0%, rgba(3, 160, 252, 1) 33%, rgba(2, 166, 251, 1) 66%, rgba(3, 220, 251, 1) 100%)" };
			newUtilities[`.background-experimental`] = { backgroundImage: "linear-gradient(120deg, rgb(255, 130, 91), rgb(232, 92, 186), rgb(184, 76, 220))" };
			newUtilities[`.background-blue-gradient`] = { backgroundImage: "linear-gradient(150deg, rgba(37,249,245,1), rgba(8,70,218,1))" };
			newUtilities[`.background-purple-gradient`] = { backgroundImage: "linear-gradient(150deg, #ea38ff, #702bfc)" };
			newUtilities[`.bg-inherit`] = { background: "inherit" };
			const colors = theme("colors");
			Object.keys(colors).forEach((color) => {
				const colorData = colors[color];
				if (typeof colorData === "string") {
					newUtilities[`.focus-outline-${color}`] = {
						boxShadow: `0 0 0 2px ${colorData}`
					};
				} else {
					Object.keys(colorData).forEach((colorVariation) => {
						newUtilities[`.focus-${color}-${colorVariation}`] = {
							boxShadow: `0 0 0 2px ${colorData[colorVariation]}`
						};
					});
				}
			});
			addUtilities(newUtilities, { variants: ["focus", "hover"] });
		}
	]
};

export default config;

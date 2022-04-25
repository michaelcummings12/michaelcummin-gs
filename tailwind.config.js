module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			serif: ["Expressway"],
			sans: ["Expressway"]
		},
		colors: {
			primary: {
				500: "#096DD9"
			},
			white: { 300: "#e2e2e2", 500: "#ffffff" },
			error: "#e00000",
			gray: {
				300: "#EAEAEA",
				500: "#AAAAAA",
				700: "#818085"
			},
			overlay: "rgba(0, 0, 0, 0.6)",
			black: "#000000",
			projects: {
				be: "#000000",
				gcn: "#010921",
				ink: "#f4df4f",
				sh: "#46beab"
			},
			transparent: "transparent"
		},
		extend: {
			borderRadius: {
				DEFAULT: "12px",
				full: "100%",
				sm: "4px",
				large: "2rem",
				lg: "48px",
				0: "0px"
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.35, 0, 0.65, 1)"
			},
			transitionDuration: {
				DEFAULT: "0.15s"
			},
			boxShadow: {
				"default": "0px 0px 3px rgba(0, 10, 35, 0.35)",
				"image": "0px 8px 12px 2px rgba(0, 10, 35, 0.2)",
				"modal": "0px 0px 12px 0px rgba(0, 10, 35, 0.35)",
				"error": "0px 0px 12px 0px rgba(181, 5, 5, 1)",
				"popup": "0px 2px 6px 2px rgba(170, 170, 170, 0.2)",
				"gcn": "0px 0px 6px 2px rgba(2, 126, 249, 1)",
				"gcnInset": "inset 0px 0px 6px 2px rgba(2, 126, 249, 1)",
				"be": "0px 0px 6px 2px rgba(150, 150, 150, 1)",
				"sh": "0px 0px 12px 0px rgba(200, 200, 200, 1)",
				"inset": "inset 0px 0px 12px 4px rgb(0 0 0 / 0.1)",
				"mobile-modal": "0px -4px 12px 4px rgba(127, 127, 127, 0.2)"
			},
			gridTemplateRows: {
				15: "repeat(15, minmax(0, 1fr))"
			},
			maxHeight: {
				"screen-1/2": "calc(100vh / 2)"
			},
			maxWidth: {
				"screen-1/2": "calc(100vw / 2)"
			},
			spacing: {
				full: "100%"
			},
			minHeight: { "screen-1/2": "calc(100vh / 2)" }
		}
	},
	variants: { fill: ["hover", "focus"] },
	plugins: [
		require("tailwind-scrollbar-hide"),
		require("tailwindcss-safe-area"),
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
					newUtilities[`.input-outline-${color}`] = {
						boxShadow: `0 0 0 2px ${colorData}`
					};
				} else {
					Object.keys(colorData).forEach((colorVariation) => {
						newUtilities[`.outline-${color}-${colorVariation}`] = {
							boxShadow: `0 0 0 2px ${colorData[colorVariation]}`
						};
					});
				}
			});

			addUtilities(newUtilities, { variants: ["focus", "hover"] });
		}
	]
};

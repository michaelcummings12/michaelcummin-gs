import { FlatCompat } from "@eslint/eslintrc";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname
});

const config = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: ["**/node_modules", "**/.next/**/*", "**/_next/**/*", "**/dist/**/*", ".github/**/*"]
	},
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/no-empty-object-type": [
				"error",
				{
					allowInterfaces: "with-single-extends",
					allowObjectTypes: "always"
				}
			]
		}
	},
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			react,
			reactHooks
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				...globals.browser
			}
		}
	}
];

export default config;

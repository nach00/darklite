import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./mdx-components.tsx",
	],
	theme: {
		extend: {
			colors: {
				base: {
					0: "var(--base-0)",
					1: "var(--base-1)", //        "app-bg", //               1  - App background
					2: "var(--base-2)", //        "subtle-bg", //            2  - Subtle background
					3: "var(--base-3)", //        "ui", //                   3  - UI element background
					4: "var(--base-4)", //        "ui-hover", //             4  - Hovered UI element background
					5: "var(--base-5)", //        "ui-active", //            5  - Active / Selected UI element background
					6: "var(--base-6)", //        "border-subtle", //        6  - Subtle borders and separators
					7: "var(--base-7)", //        "border", //               7  - UI element border and focus rings
					8: "var(--base-8)", //        "border-hover", //         8  - Hovered UI element border
					9: "var(--base-9)", //        "solid", //                9  - Solid backgrounds
					10: "var(--base-10)", //      "solid-hover", //          10 - Hovered solid backgrounds
					11: "var(--base-11)", //      "foreground-secondary", // 11 - Low-contrast text
					12: "var(--base-12)", //      "foreground-primary", //   12 - High-contrast text
				},
				"app-bg": "var(--base-1)",
				"subtle-bg": "var(--base-2)",
				ui: "var(--base-3)",
				"ui-hover": "var(--base-4)",
				"ui-active": "var(--base-5)",
				"border-subtle": "var(--base-6)",
				border: "var(--base-7)",
				"border-hover": "var(--base-8)",
				solid: "var(--base-9)",
				"solid-hover": "var(--base-10)",
				"foreground-secondary": "var(--base-11)",
				"foreground-primary": "var(--base-12)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},

				input: "var(--input)",
				ring: "var(--ring)",
				chart: {
					"1": "var(--chart-1)",
					"2": "var(--chart-2)",
					"3": "var(--chart-3)",
					"4": "var(--chart-4)",
					"5": "var(--chart-5)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;

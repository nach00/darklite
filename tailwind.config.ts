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
					0: "hsl(var(--base-0))",
					1: "hsl(var(--base-1))", //        "app-bg", //               1  - App background
					2: "hsl(var(--base-2))", //        "subtle-bg", //            2  - Subtle background
					3: "hsl(var(--base-3))", //        "ui", //                   3  - UI element background
					4: "hsl(var(--base-4))", //        "ui-hover", //             4  - Hovered UI element background
					5: "hsl(var(--base-5))", //        "ui-active", //            5  - Active / Selected UI element background
					6: "hsl(var(--base-6))", //        "border-subtle", //        6  - Subtle borders and separators
					7: "hsl(var(--base-7))", //        "border", //               7  - UI element border and focus rings
					8: "hsl(var(--base-8))", //        "border-hover", //         8  - Hovered UI element border
					9: "hsl(var(--base-9))", //        "solid", //                9  - Solid backgrounds
					10: "hsl(var(--base-10))", //        "solid-hover", //          10 - Hovered solid backgrounds
					11: "hsl(var(--base-11))", //        "foreground-secondary", // 11 - Low-contrast text
					12: "hsl(var(--base-12))", //        "foreground-primary", //   12 - High-contrast text
				},
				"app-bg": "hsl(var(--base-1))",
				"subtle-bg": "hsl(var(--base-2))",
				ui: "hsl(var(--base-3))",
				"ui-hover": "hsl(var(--base-4))",
				"ui-active": "hsl(var(--base-5))",
				"border-subtle": "hsl(var(--base-6))",
				border: "hsl(var(--base-7))",
				"border-hover": "hsl(var(--base-8))",
				solid: "hsl(var(--base-9))",
				"solid-hover": "hsl(var(--base-10))",
				"foreground-secondary": "hsl(var(--base-11))",
				"foreground-primary": "hsl(var(--base-12))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},

				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
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

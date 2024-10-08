// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import { SiteFooter } from "@/components/site-footer";
import type React from "react";

export const metadata: Metadata = {
	title: "darklite",
	description: "Spotlight clone using shadcn/ui",
};

interface RootLayoutProps {
	children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex justify-center bg-base-0">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
				>
					<Theme appearance="inherit">
						<div className="flex flex-col w-[360px] lg:w-[1216px] h-full lg:border-x lg:border-base-3 lg:px-24 px-4">
							<SiteHeader />
							<div className="pt-9 pb-24">{children}</div>
							<SiteFooter />
						</div>
					</Theme>
				</ThemeProvider>
			</body>
		</html>
	);
}

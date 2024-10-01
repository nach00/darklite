import React from "react";

import { Muted } from "@/components/ui/typography";
import { navItems } from "@/types/nav";
import Link from "next/link";

export function SiteFooter() {
	return (
		<footer className="flex lg:flex-row flex-col gap-10 text-center w-full lg:justify-between mt-10 pt-10 pb-16 border-t border-base-3">
			<nav className="flex justify-between lg:gap-8">
				{navItems.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className="text-sm font-medium leading-none"
					>
						{item.label}
					</Link>
				))}
			</nav>
			<Muted>© 2040 Natcha Pradappet. No rights reserved.</Muted>
		</footer>
	);
}

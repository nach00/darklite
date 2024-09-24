import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { navItems } from "@/types/nav";
import Link from "next/link";
import React from "react";

export default function MainNav() {
	return (
		<nav className="">
			<Tabs defaultValue="account" className="">
				<TabsList>
					{navItems.map((item) => (
						<TabsTrigger key={item.href} value={item.label}>
							<Link href={item.href}>{item.label}</Link>
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</nav>
	);
}

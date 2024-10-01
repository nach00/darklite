import MainNav from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export function SiteHeader() {
	return (
		<header className="flex w-full justify-between pt-6 pb-24">
			<Avatar className="w-10 h-10 sticky hidden lg:flex">
				{/* TODO: link avatar to home, activate home tab in navbar*/}

				{/*<Link href="/">*/}
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
				{/*</Link>*/}
			</Avatar>

			<MainNav className="" />
			<ModeToggle />
		</header>
	);
}

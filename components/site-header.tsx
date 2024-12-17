// /components/site-header.tsx

import MainNav from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SiteHeader() {
	return (
		<header className="flex w-full justify-between pt-6 pb-24">
			{/*<Avatar className="w-10 h-10 sticky hidden lg:flex">*/}
			{/* TODO: link avatar to home, activate home tab in navbar*/}

			{/*<AvatarImage src="https://github.com/shadcn.png" />*/}
			{/*<AvatarFallback>CN</AvatarFallback>*/}
			{/*</Avatar>*/}
			<div className="w-10 h-10 sticky hidden lg:flex">
				{/* This empty div maintains the layout */}
			</div>
			<MainNav className="" />
			<ModeToggle />
		</header>
	);
}

// app/page.tsx

// "use client";

import BlogPosts from "@/app/home/blog-posts";
import Newsletter from "@/app/home/newsletter";
import Work from "@/app/home/work";
import AnimatedHeader from "@/components/animated-header";
import Heading from "@/components/heading";
import ImageGallery from "@/components/image-gallery";
import MainNav from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
export default function Index() {
	// const avatarRef = useRef(null);
	// const avatar = avatarRef.current;

	return (
		<>
			{/*-------------------------------
							START HEADER
							-------------------------------*/}
			{/*<AnimatedHeader />*/}
			{/*<header className="flex w-full justify-between pb-16">*/}
			{/*	<div className="w-10 h-10 hidden lg:flex" />*/}
			{/*	<MainNav />*/}
			{/*	<ModeToggle />*/}
			{/*</header>*/}
			{/*<Avatar ref={avatarRef} className="h-16 w-16 mb-6">*/}
			{/*	<AvatarImage src="https://github.com/shadcn.png" />*/}
			{/*	<AvatarFallback>CN</AvatarFallback>*/}
			{/*</Avatar>*/}
			{/*-------------------------------
							END HEADER
							-------------------------------*/}
			<Heading
				title="Design engineer, founder, and amateur astronaut."
				socialIcons
			>
				I’m Natcha, a UX/UI designer and front-end developer based in Dallas,
				TX. I’m the co-founder and CEO of Planet Nacho, where we develop
				technologies that empower regular people to explore space on their own
				terms.
			</Heading>

			<ImageGallery />

			<div className="flex w-full pt-28 flex-col lg:flex-row">
				<div className="flex w-full">
					<BlogPosts />
				</div>

				<div className="flex flex-col w-full lg:pl-36 gap-11 pt-16 lg:pt-0">
					<Newsletter />

					<Work />
				</div>
			</div>
		</>
	);
}

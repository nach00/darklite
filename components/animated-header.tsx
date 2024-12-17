"use client";
import AnimatedAvatar from "@/components/animated-avatar";
import MainNav from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedNavbar = () => {
	const navbarRef = useRef(null);
	const avatarRef = useRef(null);
	const placeholderRef = useRef(null);

	useGSAP(() => {
		const navbar = navbarRef.current;
		const placeholder = placeholderRef.current;
		const avatar = avatarRef.current;

		if (!navbar || !avatar || !placeholder) return;

		gsap.set(avatar, { transformOrigin: "left center" });
		gsap.to(avatar, {
			scrollTrigger: {
				trigger: avatar,
				start: () => `top ${placeholder.getBoundingClientRect().bottom}px`,
				end: () => `${placeholder.getBoundingClientRect().top}px`,
				// end: "top top",
				scrub: true,
				toggleActions: "play none none reverse",
				markers: true,
			},
			scale: 10 / 16,
		});
	});
	return (
		<>
			<header
				ref={navbarRef}
				className="dark fixed left-0 top-0 right-0 flex justify-between transition-all bg duration-300 ease-in-out z-50 pt-6 border w-[1216px] mx-auto px-24"
			>
				<div
					ref={placeholderRef}
					id="avatar-position-placeholder"
					className="w-10 h-10 sticky hidden border lg:flex"
				/>
				<MainNav />

				<ModeToggle />
			</header>
			<Avatar ref={avatarRef} className="h-16 w-16 mt-32">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</>
	);
};

export default AnimatedNavbar;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
export default function AnimatedAvatar() {
	const avatarRef = useRef(null);
	const avatar = avatarRef.current;
	gsap.to(avatar, {
		scrollTrigger: {
			trigger: "avatar",
		},
	});
	return (
		<>
			<Avatar ref={avatarRef} className="fixed h-16 w-16 top-32">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</>
	);
}

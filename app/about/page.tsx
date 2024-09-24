import ContactLinks from "@/components/contact-links";
import Heading from "@/components/heading";
import { H1, P } from "@/components/ui/typography";
import React from "react";
export default function AboutPage() {
	return (
		<div className="flex flex-row">
			<div className="flex flex-col w-1/2">
				<Heading title="I’m Natcha. I live in Dallas, Texas, where I design the future.">
					<div>
						I’m Natcha, a UX/UI designer and front-end developer based in
						Dallas, TX. I’m the co-founder and CEO of Planet Nacho, where we
						develop technologies that empower regular people to explore space on
						their own terms.
					</div>
					<div>
						The only thing I loved more than computers as a kid was space. When
						I was 8, I climbed the 40-foot oak tree at the back of our yard
						while wearing my older sister’s motorcycle helmet, counted down from
						three, and jumped — hoping the tree was tall enough that with just a
						bit of momentum I’d be able to get to orbit.
					</div>
					<div>
						I spent the next few summers indoors working on a rocket design,
						while I recovered from the multiple surgeries it took to fix my
						badly broken legs. It took nine iterations, but when I was 15 I sent
						my dad’s Blackberry into orbit and was able to transmit a photo back
						down to our family computer from space.
					</div>
					<div>
						Today, I’m the founder of Planetaria, where we’re working on
						civilian space suits and manned shuttle kits you can assemble at
						home so that the next generation of kids really can make it to orbit
						— from the comfort of their own backyards.
					</div>
				</Heading>
			</div>

			<div className="pl-20 w-1/2 flex flex-col">
				<img
					src="/static/media/profile.jpg"
					alt="AI generated"
					className="rounded-2xl"
				/>

				<ContactLinks />
			</div>
		</div>
	);
}

// app/page.tsx

import BlogPosts from "@/app/home/blog-posts";
import Newsletter from "@/app/home/newsletter";
import Work from "@/app/home/work";
import Heading from "@/components/heading";
import ImageGallery from "@/components/image-gallery";
import SocialIcons from "@/components/social-icons";
import { H1, P } from "@/components/ui/typography";
import React from "react";

export default function Index() {
	return (
		<>
			<Heading title="Design engineer, founder, and amateur astronaut.">
				I’m Natcha, a UX/UI designer and front-end developer based in Dallas,
				TX. I’m the co-founder and CEO of Planet Nacho, where we develop
				technologies that empower regular people to explore space on their own
				terms.
				<SocialIcons className="flex gap-4 pt-4" />
			</Heading>

			<ImageGallery />

			<div className="flex w-full pt-28">
				<div className="flex w-full">
					<BlogPosts />
				</div>

				<div className="flex flex-col w-full pl-36 gap-11">
					<Newsletter />

					<Work />
				</div>
			</div>
		</>
	);
}

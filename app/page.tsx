// app/page.tsx

import BlogPosts from "@/app/home/blog-posts";
import Newsletter from "@/app/home/newsletter";
import Work from "@/app/home/work";
import Heading from "@/components/heading";
import ImageGallery from "@/components/image-gallery";
import SocialIcons from "@/components/social-icons";
import React from "react";

export default function Index() {
	return (
		<>
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

			<div className="flex w-full pt-28 flex-col xl:flex-row">
				<div className="flex w-full">
					<BlogPosts />
				</div>

				<div className="flex flex-col w-full xl:pl-36 gap-11 pt-16 xl:pt-0">
					<Newsletter />

					<Work />
				</div>
			</div>
		</>
	);
}

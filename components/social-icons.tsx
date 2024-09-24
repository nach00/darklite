// components/social-icons.tsx

import { Button } from "@/components/ui/button";

import { socialLinks } from "@/types/socialLinks";
import Link from "next/link";
import { string } from "prop-types";
import React from "react";

interface SocialcIconProps {
	className?: string;
}
export default function SocialIcons({ className }: SocialcIconProps) {
	return (
		<div className={`${className}`}>
			{socialLinks.map(({ platform, icon, url }) => (
				<Button key={platform} variant="ghost" size="icon">
					<Link
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={platform}
					>
						{/*TODO: enable hover effects*/}
						<img
							src={`https://cdn.simpleicons.org/${icon.slug}/_/eee`}
							alt={platform}
							className="h-5 w-5"
						/>
					</Link>
				</Button>
			))}
		</div>
	);
}

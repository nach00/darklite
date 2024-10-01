// components/social-links.tsx

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/types/socialLinks";
import Link from "next/link";
import React from "react";
import { siGmail } from "simple-icons";

interface ContactLinksProps {
	className?: string;
}

export default function ContactLinks({ className }: ContactLinksProps) {
	return (
		<>
			<div className={`gap-6 flex flex-col py-9 ${className}`}>
				{socialLinks.map(({ platform, icon, url }) => (
					<Link
						key={platform}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={platform}
						className="flex flex-row items-center gap-4"
					>
						<img
							src={`https://cdn.simpleicons.org/${icon.slug}/_/eee`}
							alt={platform}
							className="h-5 w-5 "
						/>
						Follow me on {platform}
					</Link>
				))}
			</div>
			<Link
				href="mailto:npradappet@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Send email"
				className={`flex flex-row items-center gap-4 border-t border-base-3 pt-9 ${className}`}
			>
				<img
					src={`https://cdn.simpleicons.org/${siGmail.slug}/_/eee`}
					alt="Gmail"
					className="h-5 w-5 "
				/>
				npradappet@gmail.com
			</Link>
		</>
	);
}

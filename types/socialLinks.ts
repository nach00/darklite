// types/socialLinks.ts

import type { SimpleIcon } from "simple-icons";
import { siGithub, siInstagram, siLinkedin, siX } from "simple-icons";

export type SocialLinksProps = {
	platform: string;
	icon: SimpleIcon;
	url: url;
};

export const socialLinks: SocialLinksProps[] = [
	{
		platform: "Github",
		icon: siGithub,
		url: "https://github.com/nach00",
	},
	{
		platform: "LinkedIn",
		icon: siLinkedin,
		url: "https://www.linkedin.com/in/natcha-pradappet/",
	},
	{
		platform: "Instagram",
		icon: siInstagram,
		url: "https://www.instagram.com/nach00",
	},
	{
		platform: "X",
		icon: siX,
		url: "https://x.com/nach0s",
	},
];

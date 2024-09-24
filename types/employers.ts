// types/employers.ts

import type { SimpleIcon } from "simple-icons";
import { siGithub, siInstagram, siLinkedin, siX } from "simple-icons";

export type EmployerProps = {
	company: string;
	icon: SimpleIcon;
	url: string;
	position: string;
	duration: string;
	description: string;
};

export const employers: EmployerProps[] = [
	{
		company: "Planet Nacho",
		icon: siGithub,
		url: "https://planetnacho.com",
		position: "CEO",
		duration: "TBD",
		description:
			"Est minim commodo sint ad magna amet pariatur. Elit minim voluptate adipisicing elit fugiat laboris Lorem.",
	},
	{
		company: "Insite",
		icon: siLinkedin,
		url: "https://insite.net",
		position: "UX Specialist",
		duration: "TBD",
		description:
			"Est minim commodo sint ad magna amet pariatur. Elit minim voluptate adipisicing elit fugiat laboris Lorem.",
	},
	{
		company: "Photon",
		icon: siInstagram,
		url: "https://photon.com",
		position: "UX/UI Designer",
		duration: "TBD",
		description:
			"Est minim commodo sint ad magna amet pariatur. Elit minim voluptate adipisicing elit fugiat laboris Lorem.",
	},
	{
		company: "Zimperium",
		icon: siX,
		url: "https://zimperium.com",
		position: "UX/UI Designer",
		duration: "TBD",
		description:
			"Est minim commodo sint ad magna amet pariatur. Elit minim voluptate adipisicing elit fugiat laboris Lorem.",
	},
];

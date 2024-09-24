export type NavItemProps = {
	href?: url;
	label: string;
	// disabled?: boolean
	// external?: boolean
};

export const navItems: NavItemProps[] = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/projects", label: "Projects" },
	{ href: "/speakings", label: "Speakings" },
	// { href: "/contact", label: "Contact" },
	{ href: "/uses", label: "Uses" },
];

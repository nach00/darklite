export type NavItemProps = {
	href: string;
	label: string;
};

export const navItems: NavItemProps[] = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/projects", label: "Projects" },
	{ href: "/speakings", label: "Speakings" },
	{ href: "/uses", label: "Uses" },
];

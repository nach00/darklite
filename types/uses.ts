// types/uses.ts

export type UsesProps = {
	name: string;
	description: string;
};

export const hardware: UsesProps[] = [
	{
		name: '16" MacBook Pro, M2 Max, 64GB RAM (2023)',
		description:
			"The latest Apple silicon has taken performance to another level. Compiling our entire codebase now takes half the time it did on my previous machine. The battery life is nothing short of miraculous.",
	},
	{
		name: "Dell UltraSharp 40 Curved WUHD Monitor",
		description:
			"This massive 40-inch curved display gives me all the screen real estate I need for complex development tasks. The 5K2K resolution ensures everything is crisp and clear.",
	},
	{
		name: "Kinesis Advantage2 Keyboard",
		description:
			"An ergonomic marvel. It took some time to adjust, but now I can't imagine typing on anything else. My wrists thank me every day.",
	},
	{
		name: "Logitech MX Master 3 Mouse",
		description:
			"The ergonomics and customizability of this mouse are unmatched. The horizontal scroll wheel is a game-changer for navigating wide codebases.",
	},
	{
		name: "Herman Miller Embody Chair",
		description:
			"Expensive? Yes. Worth it? Absolutely. It's like sitting on a cloud that's been engineered to perfection. My back has never felt better.",
	},
];

export const development: UsesProps[] = [
	{
		name: "Visual Studio Code",
		description:
			"The Swiss Army knife of code editors. With its extensive plugin ecosystem, I can customize it to fit any project's needs perfectly.",
	},
	{
		name: "Docker",
		description:
			"Containerization has revolutionized my development workflow. Being able to spin up consistent environments in seconds is invaluable.",
	},
	{
		name: "Postman",
		description:
			"Indispensable for API development and testing. The ability to save and share collections with the team streamlines our workflow immensely.",
	},
	{
		name: "GitKraken",
		description:
			"A GUI git client that makes complex branching strategies visual and intuitive. The drag-and-drop interface for rebasing is a particular favorite.",
	},
];

export const design: UsesProps[] = [
	{
		name: "Figma",
		description:
			"More than just a design tool, it's become our central hub for product ideation and collaboration. The real-time collaboration features are game-changing.",
	},
	{
		name: "Sketch",
		description:
			"While we've mostly moved to Figma, I still find Sketch invaluable for certain types of UI design work. Its vector editing tools are top-notch.",
	},
];

export const productivity: UsesProps[] = [
	{
		name: "Alfred",
		description:
			"This productivity booster is always just a keystroke away. Custom workflows have saved me countless hours over the years.",
	},
	{
		name: "Notion",
		description:
			"Our team's central knowledge base and project management tool. Its flexibility allows it to adapt to our ever-changing needs.",
	},
	{
		name: "RescueTime",
		description:
			"Keeps me accountable by tracking how I spend my time on the computer. The weekly reports have helped me optimize my productivity tremendously.",
	},
	{
		name: "1Password",
		description:
			"Password management is crucial in today's digital landscape. 1Password makes it easy to use strong, unique passwords for every service without the headache of remembering them all.",
	},
];

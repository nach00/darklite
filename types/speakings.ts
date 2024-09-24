// types/speakings.ts

export type SpeakingsProps = {
	title: string;
	name: string;
	url: string;
	urlLabel: string;
	description: string;
};

export const conferences: SpeakingsProps[] = [
	{
		title: "TechCon 2024",
		name: "Quantum Computing: Unraveling the Future",
		description:
			"Explore the cutting-edge advancements in quantum computing and its potential to revolutionize data processing and cryptography.",
		url: "https://techcon2024.com/sessions/quantum-computing",
		urlLabel: "Watch presentation",
	},
	{
		title: "AI Summit 2023",
		name: "Ethics in Artificial Intelligence: Navigating the Gray Areas",
		description:
			"Delve into the ethical considerations surrounding AI development and implementation, discussing real-world case studies and future implications.",
		url: "https://aisummit2023.org/talks/ethics-in-ai",
		urlLabel: "View slides",
	},
	{
		title: "DevOps World 2024",
		name: "Containerization at Scale: Lessons from the Trenches",
		description:
			"Learn from our experiences scaling containerized applications across multiple cloud providers, including challenges faced and solutions implemented.",
		url: "https://devopsworld.com/sessions/containerization-at-scale",
		urlLabel: "Access recording",
	},
	{
		title: "Cybersecurity Forum 2023",
		name: "Zero Trust Architecture: Implementing Continuous Verification",
		description:
			"Discover how to design and implement a robust zero trust security model in your organization, with practical tips and best practices.",
		url: "https://cybersecforum.com/talks/zero-trust-architecture",
		urlLabel: "Download whitepaper",
	},
];

export const podcasts: SpeakingsProps[] = [
	{
		title: "The Tech Visionaries",
		name: "The Rise of Edge Computing: Bringing Processing Closer to Data",
		description:
			"Join us as we discuss the growing importance of edge computing in reducing latency and improving real-time data processing capabilities.",
		url: "https://techvisionaries.fm/episodes/edge-computing-rise",
		urlLabel: "Listen now",
	},
	{
		title: "Code & Coffee",
		name: "Functional Programming: Embracing Immutability and Pure Functions",
		description:
			"Explore the principles of functional programming and how they can lead to more predictable and maintainable code in modern software development.",
		url: "https://codeandcoffee.podcast.com/functional-programming",
		urlLabel: "Play episode",
	},
	{
		title: "Data Driven",
		name: "Machine Learning in Healthcare: Predictive Analytics for Patient Care",
		description:
			"Discover how machine learning algorithms are being applied in healthcare to improve patient outcomes and streamline clinical decision-making processes.",
		url: "https://datadriven.fm/episodes/ml-in-healthcare",
		urlLabel: "Stream episode",
	},
	{
		title: "The Agile Mindset",
		name: "Scaling Agile: From Teams to Enterprises",
		description:
			"Learn about the challenges and strategies involved in scaling agile methodologies from individual teams to entire organizations.",
		url: "https://agilemindset.podcast.com/scaling-agile",
		urlLabel: "Download audio",
	},
];

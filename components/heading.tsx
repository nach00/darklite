import { H1, P } from "@/components/ui/typography";
import type React from "react";

interface HeadingProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export default function Heading({ children, title, className }: HeadingProps) {
	return (
		<>
			<div className={`flex flex-col pb-16 ${className}`}>
				<H1 className="max-w-[20ch]">{title}</H1>
				<P className="text-secondary-foreground flex flex-col gap-6 max-w-[60ch]">
					{children}
				</P>
			</div>
		</>
	);
}

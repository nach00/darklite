import LabelLink from "@/components/label-link";
import { H1, H4, Muted, P } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface TextStackProps {
	title: string;
	url?: string;
	urlLabel?: string;
	description: string;
	children?: React.ReactNode;
	iconAfter?: boolean;
}

export default function TextStack({
	children,
	url,
	description,
	urlLabel,
	title,
	iconAfter = true,
}: TextStackProps) {
	return (
		<>
			<H4 className="pb-2">{title}</H4>
			<Muted className="pb-4 leading-relaxed max-w-[60ch]">{description}</Muted>
			{children && { children }}
			{url && urlLabel && (
				<LabelLink url={url} urlLabel={urlLabel} iconAfter={iconAfter} />
			)}
		</>
	);
}

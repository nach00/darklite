import { ChevronRight, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface LabelLinkProps {
	url: string;
	urlLabel: string;
	iconAfter?: boolean;
}

export default function LabelLink({
	url,
	urlLabel,
	iconAfter = true,
}: LabelLinkProps) {
	return (
		<>
			<Link href={url} className="flex align-middle gap-2 text-sm">
				{iconAfter === false && <ExternalLink size="20px" />}

				{urlLabel}

				{iconAfter === true && <ChevronRight size="20px" />}
			</Link>
		</>
	);
}

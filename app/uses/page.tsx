// app/page/uses/page.tsx

import CategoryContentList from "@/components/category-content-list";
import Heading from "@/components/heading";
import { A, H1, Large, P, Quote, Small } from "@/components/ui/typography";
import {
	type UsesProps,
	design,
	development,
	hardware,
	productivity,
} from "@/types/uses";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function UsesPage() {
	const sections: { section: string; data: UsesProps[] }[] = [
		{ section: "Hardware", data: hardware },
		{ section: "Development", data: development },
		{ section: "Design", data: design },
		{ section: "Productivity", data: productivity },
	];
	return (
		<>
			<Heading title="Software I use, gadgets I love, and other things I suggest.">
				I get asked a lot about the things I use to build software, stay
				productive, or buy to fool myself into thinking I’m being productive
				when I’m really just procrastinating. Here’s a big list of all of my
				favorite stuff.
			</Heading>

			<CategoryContentList sections={sections} />
		</>
	);
}

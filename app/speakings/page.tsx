// app/page/speakings/page.tsx

import CategoryContentList from "@/components/category-content-list";
import Heading from "@/components/heading";
import { H1, Large, P, Quote, Small } from "@/components/ui/typography";
import { type SpeakingsProps, conferences, podcasts } from "@/types/speakings";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function SpeakingPage() {
	const sections: { section: string; data: SpeakingsProps[] }[] = [
		{ section: "Conferences", data: conferences },
		{ section: "Podcasts", data: podcasts },
	];
	return (
		<>
			<Heading
				title="I’ve spoken at events all around the world and been interviewed for
					many podcasts."
			>
				One of my favorite ways to share my ideas is live on stage, where
				there’s so much more communication bandwidth than there is in writing,
				and I love podcast interviews because they give me the opportunity to
				answer questions instead of just present my opinions.
			</Heading>

			<CategoryContentList sections={sections} />
		</>
	);
}

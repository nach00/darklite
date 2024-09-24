import LabelLink from "@/components/label-link";
import TextStack from "@/components/text-stack";
import {
	Eyebrow,
	H4,
	Large,
	P,
	Quote,
	Small,
} from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type SectionItem = {
	name: string;
	description: string;
	title?: string;
	url?: string;
	urlLabel?: string;
};

type SectionProps = {
	section: string;
	data: ContentItem[];
};

type CategoryContentListProps = {
	sections: Section[];
};

export default function CategoryContentList({
	sections,
}: CategoryContentListProps) {
	return (
		<div className="flex flex-col gap-24">
			{sections.map(({ section, data }: SectionProps) => (
				<div key={section} className="border-l border-base-3 pl-12 flex">
					<H4 className="min-w-[120px]">{section}</H4>
					<div className="flex flex-col gap-24 max-w-[640px] pl-12">
						{data.map(
							({ name, url, urlLabel, title, description }: SectionItem) => (
								<div key={name} className="flex flex-col">
									{title && <Eyebrow className="">{title}</Eyebrow>}
									<TextStack title={name} description={description} />
									{url && urlLabel && (
										<LabelLink url={url} urlLabel={urlLabel} iconAfter={true} />
									)}
								</div>
							),
						)}
					</div>
				</div>
			))}
		</div>
	);
}

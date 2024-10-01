import LabelLink from "@/components/label-link";
import TextStack from "@/components/text-stack";
import { Eyebrow, H4 } from "@/components/ui/typography";
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
	data: SectionItem[];
};

type CategoryContentListProps = {
	sections: SectionProps[];
};

export default function CategoryContentList({
	sections,
}: CategoryContentListProps) {
	return (
		<div className="flex flex-col gap-24">
			{sections.map(({ section, data }: SectionProps) => (
				<div
					key={section}
					className="lg:border-l lg:border-base-3 lg:pl-12 flex flex-col lg:flex-row"
				>
					<H4 className="min-w-[120px] pb-8">{section}</H4>
					<div className="flex flex-col gap-16 lg:gap-24 max-w-[640px] lg:pl-12">
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

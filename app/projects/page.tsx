import Heading from "@/components/heading";
import TextStack from "@/components/text-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { H1, Large, P, Small } from "@/components/ui/typography";
import { employers } from "@/types/employers";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function ProjectsPage() {
	return (
		<>
			<Heading title="Things I’ve made trying to put my dent in the universe.">
				I’ve worked on tons of little projects over the years but these are the
				ones that I’m most proud of. Many of them are open-source, so if you see
				something that piques your interest, check out the code and contribute
				if you have ideas for how it can be improved.
			</Heading>
			<div className="flex flex-col gap-16 xl:grid xl:grid-cols-3 xl:gap-24">
				{employers.map(
					({ company, icon, url, position, duration, description }) => (
						<div key={company} className="flex flex-col gap-4 pb-4">
							<div className="p-2 bg-base-3 w-fit rounded-full border-base-4">
								<Avatar className="w-10 h-10">
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</div>
							<TextStack
								title={company}
								description={description}
								url={url}
								urlLabel={url}
								iconAfter={false}
							/>
						</div>
					),
				)}
			</div>
		</>
	);
}

import { getBlogs } from "@/app/blog/fetchers";
import Heading from "@/components/heading";
import TextStack from "@/components/text-stack";
import { Eyebrow, H1, H4, Muted, P } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Blog() {
	const blogs = await getBlogs();

	return (
		<>
			<Heading title="Writing on software design, company building, and the aerospace industry.">
				All of my long-form thoughts on programming, leadership, product design,
				and more, collected in chronological order.
			</Heading>
			<div className="flex flex-col gap-9 pb-16 w-full min-w-full">
				<div className="flex flex-col gap-6 w-full" />

				<main className="flex flex-col gap-16 w-full xl:border-l xl:pl-9 xl:border-base-3 max-w-[768px]">
					{blogs.map((blog) => (
						<article
							key={blog.slug}
							className="flex flex-col xl:flex-row xl:gap-24 w-full"
						>
							<Muted className="w-[240px] hidden xl:flex text-base-9">
								{blog.frontmatter.date}
							</Muted>

							<Eyebrow className="flex xl:hidden">
								{blog.frontmatter.date}
							</Eyebrow>

							<div className="flex flex-col max-w-[768px] w-full xl:pl-8">
								<TextStack
									title={blog.frontmatter.title}
									description={blog.frontmatter.description}
									url={`/blog/${blog.slug}`}
									urlLabel="Read more"
								/>
							</div>
						</article>
					))}
				</main>
			</div>
		</>
	);
}

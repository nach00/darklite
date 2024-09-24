import { getBlogs } from "@/app/blog/fetchers";
import Heading from "@/components/heading";
import TextStack from "@/components/text-stack";
import { H1, H4, Muted, P } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Blog() {
	const blogs = await getBlogs();

	return (
		<>
			<Heading
				title="Writing on software design, company building, and the aerospace
					industry."
			>
				All of my long-form thoughts on programming, leadership, product design,
				and more, collected in chronological order.
			</Heading>
			<div className="flex flex-col gap-9 pb-16 w-full min-w-full">
				<div className="flex flex-col gap-6 w-full" />

				<main className="flex flex-col gap-16 w-full border-l pl-9 border-base-3 py-6 max-w-[768px]">
					{blogs.map((blog) => (
						<article key={blog.slug} className="flex flex-row gap-24w-full">
							<Muted className="w-[240px]">{blog.frontmatter.date}</Muted>
							<div className="flex flex-col max-w-[768px] w-full pl-8">
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

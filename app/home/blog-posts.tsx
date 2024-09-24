import { getBlogs } from "@/app/blog/fetchers";
import TextStack from "@/components/text-stack";
import { Eyebrow, H4, Muted, P, Small } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
// TODO: add link styling

export default async function BlogPosts() {
	const blogs = await getBlogs();

	return (
		<main className="flex flex-col gap-16">
			{blogs.slice(0, 3).map((blog) => (
				<article key={blog.slug} className="flex flex-col gap-2">
					<Eyebrow>{blog.frontmatter.date}</Eyebrow>

					<TextStack
						title={blog.frontmatter.title}
						description={blog.frontmatter.description}
						url={`/blog/${blog.slug}`}
						urlLabel="Read more"
					/>
				</article>
			))}
		</main>
	);
}

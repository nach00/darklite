import { Eyebrow, H1, P } from "@/components/ui/typography";
import { getAllBlogSlug, getBlogBySlug } from "../fetchers";

export async function generateStaticParams() {
	return getAllBlogSlug();
}

export default async function BlogPage({
	params,
}: {
	params: { slug: string; date: string };
}) {
	const blog = await getBlogBySlug(params.slug);
	return (
		<main className="prose prose-neutral dark:prose-invert">
			<Eyebrow>{blog.frontmatter.date}</Eyebrow>
			<H1>{blog.frontmatter.title}</H1>
			<P>{blog.frontmatter.description}</P>
			<article>{blog.content}</article>
		</main>
	);
}

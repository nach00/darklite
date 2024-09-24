import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		// Allows customizing built-in components, e.g. to add styling.
		h1: ({ children }) => (
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl">
				{children}
			</h1>
		),

		h2: ({ children }) => (
			<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				{children}
			</h2>
		),

		h3: ({ children }) => (
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
				{children}
			</h3>
		),

		h4: ({ children }) => (
			<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
				{children}
			</h4>
		),
		img: (props) => (
			<Image
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
				{...(props as ImageProps)}
			/>
		),
		p: ({ children }) => (
			<p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
				{children}
			</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="mt-6 border-l-2 pl-4 text-solid text-sm">
				{children}
			</blockquote>
		),
		large: ({ children }) => (
			<div className="text-lg font-semibold">{children}</div>
		),
		small: ({ children }) => (
			<p className="text-sm font-medium leading-none">{children}</p>
		),
		muted: ({ children }) => (
			<p className="text-sm text-muted-foreground">{children}</p>
		),
		lead: ({ children }) => (
			<p className="text-xl text-muted-foreground">{children}</p>
		),
	};
}

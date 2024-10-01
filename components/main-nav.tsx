import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { Muted, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { navItems } from "@/types/nav";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MainNavProps {
	className?: string;
}

export default function MainNav({ className }: MainNavProps) {
	return (
		<nav className={`${className}`}>
			<Tabs defaultValue="account" className="hidden xl:flex">
				<TabsList>
					{navItems.map((item) => (
						<TabsTrigger key={item.href} value={item.label}>
							<Link href={item.href}>{item.label}</Link>
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>

			<AlertDialog>
				<AlertDialogTrigger
					className={cn(
						buttonVariants({ variant: "secondary", size: "icon" }),
						"xl:hidden",
					)}
				>
					<Menu className="h-4 w-4" />
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader className="flex flex-row justify-between items-center">
						<AlertDialogTitle className="">
							<Muted>Navigation</Muted>
						</AlertDialogTitle>
						<AlertDialogCancel>
							<X className="h-4 w-4" />
						</AlertDialogCancel>
					</AlertDialogHeader>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="[&:not(:last-child)]:border-b [&:not(:last-child)]:pb-4 border-base-3"
						>
							<Small>{item.label}</Small>
						</Link>
					))}
				</AlertDialogContent>
			</AlertDialog>
		</nav>
	);
}

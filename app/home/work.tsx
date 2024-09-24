import { Briefcase } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { H4, Large, Muted, P, Small } from "@/components/ui/typography";
import { employers } from "@/types/employers";
import Link from "next/link";
export default async function Newsletter() {
	return (
		<div className="flex flex-col gap-2 p-6 border border-base-3 rounded-2xl">
			<div className="flex gap-4 pb-4">
				<Briefcase size="24px" />
				<H4>Work</H4>
			</div>
			{employers.map(({ company, icon, url, position, duration }) => (
				<div key={company} className="flex gap-4 pb-4">
					<div className="bg-base-2 p-2 rounded-full border-base-3 border">
						<Avatar className="w-8 h-8">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
					<div className="flex gap-2 justify-between w-full">
						<div className="flex flex-col gap-1">
							<Link href={url}>
								<Small>{company}</Small>
							</Link>
							<Muted>{position}</Muted>
						</div>
						<Muted>{duration}</Muted>
					</div>
				</div>
			))}
			<Button variant="outline">Download Resume</Button>
		</div>
	);
}

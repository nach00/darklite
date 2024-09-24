import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { H4, Large, Muted } from "@/components/ui/typography";
import { Mail } from "lucide-react";

export default async function Newsletter() {
	return (
		<div className="flex flex-col gap-2 p-6 border border-base-3 rounded-2xl">
			<div className="flex flex-col gap-2 pb-4">
				<div className="flex gap-4 pb-2 align-text-bottom">
					<Mail size="24px" />
					<H4>Stay up to date</H4>
				</div>
				<Muted>
					Get notified when I publish something new, and unsubscribe at any
					time.
				</Muted>
			</div>
			<div className="flex gap-2">
				<Input type="email" placeholder="Email" />
				<Button variant="outline">Join</Button>
			</div>
		</div>
	);
}

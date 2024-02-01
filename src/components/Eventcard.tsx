import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type CardProps = {
	title: string;
	description: string;
	image: string;
	href: string;
};

export default function EventCards() {
	return (
		<div className="flex flex-col md:flex-row w-full space-y-3 md:space-y-0 md:space-x-3 mt-10">
			<EventCard
				title="Hackathons"
				description="Explore the fun of Hackathons with Byld"
				image="https://iiit-delhi.github.io/byld-website/assets/images/hacknights.jpg"
				href="/hackathons"
			/>
			<EventCard
				title="Hack Nights"
				description="Come indulge in nights filled with code with Byld"
				image="https://iiit-delhi.github.io/byld-website/assets/images/hacknights.jpg"
				href="/hacknights"
			/>
			<EventCard
				title="Tech Talks"
				description="Learn and connect with workshops with Byld"
				image="https://iiit-delhi.github.io/byld-website/assets/images/hacknights.jpg"
				href="techtalks"
			/>
		</div>
	);
}

export function EventCard({ title, description, image, href }: CardProps) {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className=" flex items-center space-x-4 rounded-md border p-2">
					<img src={image} alt="" className="rounded-md" />
				</div>
			</CardContent>
			<CardFooter>
				<Button
					asChild
					className="bg-black hover:bg-gray-200 hover:outline-black text-white"
					variant="outline"
				>
					<a href={href} className="hover:underline underline-offset-2">
						Check Out {title} <ArrowRight className="ml-2 h-4 w-4" />
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}

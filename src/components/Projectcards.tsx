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
	contributors: string;
	tech: string;
	href: string;
};

export default function ProjectCards() {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-10">
			<ProjectCard
				title="Placement/Job Portal"
				contributors="Romil Bhardwaj, Naman Gupta"
				tech="Django"
				href="/hackathons"
			/>
			<ProjectCard
				title="Placement/Job Portal"
				contributors="Romil Bhardwaj, Naman Gupta"
				tech="Django"
				href="/hackathons"
			/>
			<ProjectCard
				title="Placement/Job Portal"
				contributors="Romil Bhardwaj, Naman Gupta"
				tech="Django"
				href="/hackathons"
			/>
		</div>
	);
}

function ProjectCard({ title, contributors, tech, href }: CardProps) {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription className="leading-relaxed">
					Contributors: {contributors}
					<br />
					Tech Stack: {tech}
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button
					asChild
					className="bg-black hover:bg-gray-200 hover:outline-black text-white"
					variant="outline"
				>
					<a href={href} className="hover:underline underline-offset-2">
						Visit <ArrowRight className="ml-2 h-4 w-4" />
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}

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
	description?: string;
	image: string;
	href: string;
  date: string;
};
export function EventCard({ title, description, image, href, date }: CardProps) {
	return (
		<Card className="w-[400px] hover:scale-[1.05] transition-all duration-500 flex flex-col justify-center items-center">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className=" flex items-center space-x-4 rounded-md border p-2">
					<img src={image} alt="" className="rounded-md" />
				</div>
			</CardContent>
			<CardFooter className="flex w-full justify-between">
        <div className="font-spaceGrotesk">{date}</div>
				<Button
					asChild
					className="bg-black hover:bg-[#207570] hover:text-white transition-all duration-500 hover:outline-black text-white"
					variant="outline"
				>
					<a href={href} className="hover:underline underline-offset-2">
						Check it out <ArrowRight className="ml-2 h-4 w-4" />
					</a>
				</Button>

			</CardFooter>
		</Card>
	);
}
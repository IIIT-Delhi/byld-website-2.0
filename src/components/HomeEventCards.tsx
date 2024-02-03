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
import { stuff } from "@/content/home/eve.tsx";

type CardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const moreStuff = Object.values(stuff);

export default function EventCards() {
  return (
    <div className="flex overflow-x-scroll flex-row w-full space-x-3 mt-10">
      {moreStuff.map((item) => (
        <EventCard key={item.title} {...item} />
      ))}
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
          className="bg-black hover:bg-white hover:border-3 border-black text-white"
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

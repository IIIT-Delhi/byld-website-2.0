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
export function EventCard({ title, image, href, date }: CardProps) {
  return (
    <Card className="font-spaceGrotesk">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-2">
          <img src={image} alt="" className="rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-between">
        <Button
          asChild
          className="bg-black hover:bg-white hover:border-3 border-black text-white"
          variant="outline"
        >
          <a href={href} className="hover:underline underline-offset-2">
            Register Now <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

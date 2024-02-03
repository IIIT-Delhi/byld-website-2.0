import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import stuff from "@/content/home/projects.json";

type CardProps = {
  title: string;
  contributors: string;
  tech: string;
  href?: string;
};

const moreStuff = Object.values(stuff);

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-10">
      {moreStuff.map((item) => (
        <ProjectCard key={item.title} {...item} />
      ))}
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
        {href && (
          <Button
            asChild
            className="bg-black hover:bg-white hover:border-3 border-black text-white"
            variant="outline"
          >
            <a href={href} className="hover:underline underline-offset-2">
              Visit <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "aceternity",
    title: "Aceternity",
    description:
      "A design and development studio that focuses on building quality apps.",
    image: "/assets/dashboard-screenshot.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    id: "algochurn",
    title: "Algochurn",
    description:
      "Practice for technical interviews with hands-on coding challenges.",
    image: "/assets/dashboard-screenshot.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    id: "moonbeam",
    title: "Moonbeam",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    image: "/assets/dashboard-screenshot.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
  {
    id: "tailwind-master-kit",
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    image: "/assets/dashboard-screenshot.png",
    tags: ["Nextjs", "Tailwindcss"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">
        What I&apos;ve been working on
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-[500px]">
              <CardContent className="relative h-[300px] w-full p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-top object-cover rounded-t-lg"
                  fill
                />
              </CardContent>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-sm text-gray-500">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

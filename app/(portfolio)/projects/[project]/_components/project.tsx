import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = {
  aceternity: {
    title: "Aceternity",
    description:
      "A design and development studio that focuses on building quality apps.",
    fullDescription:
      "Aceternity is a cutting-edge design and development studio dedicated to crafting high-quality applications. Our team of skilled professionals combines creativity with technical expertise to deliver innovative solutions that meet and exceed client expectations. From concept to deployment, we ensure each project receives meticulous attention to detail, resulting in polished, user-friendly, and performant applications.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Nextjs", "Tailwindcss", "React", "Node.js"],
  },
  // Add other projects here...
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <Card className="mb-8">
        <CardContent className="p-0">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-t-lg"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <p className="text-gray-500 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p>{project.fullDescription}</p>
        </CardHeader>
      </Card>
    </div>
  );
}

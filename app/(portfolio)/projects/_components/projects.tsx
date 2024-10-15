import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "mvpkit",
    title: "MVPkit",
    description:
      "MVPkit is a SaaS kit developed to ship MVPs faster. A multi-tenant application serving both B2C and B2B, built with Next.js and Supabase for rapid deployment.",
    image: "/assets/mvpkit.png", // Replace with the actual image path
    tags: [
      "Next.js",
      "TailwindCSS",
      "Monorepo",
      "Supabase",
      "Multi-tenant",
      "SaaS",
    ],
  },
  {
    id: "prodesk",
    title: "ProDesk",
    description:
      "A project management tool designed for design agencies, offering real-time task tracking and seamless team collaboration.",
    image: "/assets/prodesk.jpeg", // Replace with the actual image path
    tags: ["Next.js", "TailwindCSS", "ReduxToolkit", "AWS", "Supabase"],
  },
  {
    id: "codebility",
    title: "Codebility",
    description:
      "Web app optimization for a staffing agency, built with Next.js and Supabase for tracking and managing developer teams.",
    image: "/assets/codebility.png", // Replace with the actual image path
    tags: ["Next.js", "TailwindCSS", "Monorepo", "Supabase"],
  },
  {
    id: "wild-oasis",
    title: "The Wild Oasis",
    description:
      "A booking system with real-time updates, optimized for managing cabin rentals and customer interactions.",
    image: "/assets/wild-oasis.jpg", // Replace with the actual image path
    tags: ["Next.js", "TailwindCSS", "Supabase"],
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

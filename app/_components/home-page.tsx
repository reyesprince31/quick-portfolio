"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Timeline, TimelineItem } from "@/components/timeline";

import { useState } from "react";
import { BoxReveal } from "@/components/box-reveal";
import Image from "next/image";
import { BlurFade } from "@/components/blur-fade";
import { BorderBeam } from "@/components/border-beam";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";

const techStacks = [
  { name: "Next.js", icon: "⚛️" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "TypeScript", icon: "🔷" },
  { name: "AWS", icon: "☁️" },
  { name: "Supabase", icon: "🔥" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "UI/UX Design", icon: "🖌️" },
];

const softSkills = [
  "Agile & Scrum Methodologies",
  "Project Management",
  "Team Leadership",
  "Mentoring & Training",
  "Problem Solving",
  "Communication",
];

const projects = [
  {
    name: "Product Information Management (PIM)",
    description:
      "A web application featuring a dynamic complex table with on-the-fly row and column addition.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/assets/dashboard-screenshot.png",
  },
  {
    name: "GitHub Automation Suite",
    description:
      "Developed a GitHub probot, chatbot, and assistant using OpenAI and Langchain.",
    tech: ["Node.js", "OpenAI API", "Langchain", "GitHub API"],
    image: "/assets/dashboard-screenshot.png",
  },
  {
    name: "FinTech SaaS Platform",
    description:
      "A multi-tenant SaaS application for FinTech and eCommerce using Next.js and Supabase.",
    tech: ["Next.js", "Supabase", "AWS", "Tailwind CSS"],
    image: "/assets/dashboard-screenshot.png",
  },
  {
    name: "E-commerce Platform",
    description:
      "Built an E-commerce platform using Next.js and Supabase for wholesale and reseller expansion.",
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
    image: "/assets/dashboard-screenshot.png",
  },
  {
    name: "Learning Management System",
    description:
      "Developed an LMS for a Trading company using Thinkific to deliver online courses.",
    tech: ["Thinkific", "Custom CSS", "JavaScript"],
    image: "/assets/dashboard-screenshot.png",
  },
];

export default function FuturisticPortfolio() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative min-h-screen bg-black text-orange-500 p-4 overflow-hidden flex flex-col">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex justify-evenly">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center">
            <div className="relative inline-block rounded-full p-1">
              <Avatar className="w-40 h-40 border-4 border-orange-500">
                <AvatarImage
                  src="/assets/prince-reyes.png"
                  alt="Prince Reyes"
                />
                <AvatarFallback>PR</AvatarFallback>
              </Avatar>
              <BorderBeam />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12">
            <h1 className="text-5xl font-bold mt-4 mb-2 text-orange-500">
              Prince Reyes
            </h1>
            <p className="text-2xl text-orange-300 mb-4">Software Engineer</p>
            <div className="flex space-x-4 mt-4">
              <Button
                variant="outline"
                size="icon"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Mail className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
            </div>
          </motion.div>

          <div className="my-auto">
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hello World 👋
              </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                Nice to meet you
              </span>
            </BlurFade>
          </div>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-transparent border-b border-orange-500">
            {["about", "skills", "experience", "projects", "contact"].map(
              (tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="text-orange-500 data-[state=active]:text-orange-300 data-[state=active]:border-b-2 data-[state=active]:border-orange-300">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              )
            )}
          </TabsList>
          <div className="mt-8">
            <TabsContent value="about">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Card className="bg-transparent border border-orange-500">
                  <CardHeader>
                    <CardTitle className="text-orange-500">About Me</CardTitle>
                  </CardHeader>
                  <CardContent className="text-orange-300">
                    <p className="mb-4">
                      I&apos;m a passionate Fullstack Developer and Product
                      Manager with a diverse background in software engineering,
                      entrepreneurship, and project management. With over 5
                      years of experience in building web applications and
                      managing tech projects, I bring a unique blend of
                      technical expertise and business acumen to every endeavor.
                    </p>
                    <p className="mb-4">
                      My journey in tech began with running a successful
                      cybercafe, where I honed my skills in network management
                      and IT support. This entrepreneurial experience taught me
                      the importance of customer-centric solutions and efficient
                      operations.
                    </p>
                    <p className="mb-4">
                      As a Software Engineer, I&apos;ve worked on a wide range
                      of projects, from e-commerce platforms to learning
                      management systems. I specialize in building scalable,
                      user-friendly applications using cutting-edge technologies
                      like Next.js, React, and AWS.
                    </p>
                    <p>
                      Currently, I&apos;m expanding my horizons as a Product
                      Manager apprentice, where I&apos;m applying my technical
                      knowledge to bridge the gap between development teams and
                      stakeholders, ensuring that products not only function
                      flawlessly but also meet real-world user needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="skills">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Card className="bg-transparent border border-orange-500">
                  <CardHeader>
                    <CardTitle className="text-orange-500">
                      Tech Stack & Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <h3 className="text-lg font-semibold mb-2 text-orange-300">
                          Technologies
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {techStacks.map((tech, index) => (
                            <motion.div
                              key={tech.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="bg-orange-900/20 p-4 rounded-lg flex flex-col items-center justify-center border border-orange-500">
                              <span className="text-3xl mb-2">{tech.icon}</span>
                              <Badge
                                variant="outline"
                                className="text-xs border-orange-500 text-orange-300">
                                {tech.name}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-orange-300">
                          Soft Skills
                        </h3>
                        {softSkills.map((skill) => (
                          <BoxReveal
                            key={skill}
                            boxColor="#FF4500"
                            duration={0.5}>
                            <p className="mb-2 text-orange-300">{skill}</p>
                          </BoxReveal>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="experience">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Card className="bg-transparent border border-orange-500 max-h-[60vh] overflow-clip overflow-y-auto">
                  <CardHeader>
                    <CardTitle className="text-orange-500">
                      Professional Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Timeline>
                      <TimelineItem>
                        <h3 className="font-bold text-orange-300">
                          Product Manager - Apprenticeship
                        </h3>
                        <p className="text-sm text-orange-200">
                          Codebility | Mar 2024 - Present
                        </p>
                        <ul className="list-disc list-inside mt-2 text-orange-300">
                          <li>Contributing to product planning and ideation</li>
                          <li>
                            Mentoring interns and participating in hackathons
                          </li>
                        </ul>
                      </TimelineItem>
                      <TimelineItem>
                        <h3 className="font-bold text-orange-300">
                          Contract Software Engineer
                        </h3>
                        <p className="text-sm text-orange-200">
                          BoxedFlows | Mar 2024 - Present
                        </p>
                        <ul className="list-disc list-inside mt-2 text-orange-300">
                          <li>
                            Developing SaaS applications for FinTech and
                            eCommerce
                          </li>
                          <li>
                            Integrating cutting-edge design and technology
                          </li>
                        </ul>
                      </TimelineItem>
                      <TimelineItem>
                        <h3 className="font-bold text-orange-300">
                          Freelance Software Engineer
                        </h3>
                        <p className="text-sm text-orange-200">
                          Aug 2022 - Mar 2024
                        </p>
                        <ul className="list-disc list-inside mt-2 text-orange-300">
                          <li>Developed web apps for various clients</li>
                          <li>
                            Built E-commerce platforms and Learning Management
                            Systems
                          </li>
                        </ul>
                      </TimelineItem>
                      <TimelineItem>
                        <h3 className="font-bold text-orange-300">
                          Cyber Cafe Owner
                        </h3>
                        <p className="text-sm text-orange-200">
                          Krayzer Gaming Grounds | Oct 2013 - 2020
                        </p>
                        <ul className="list-disc list-inside mt-2 text-orange-300">
                          <li>Managed network and IT support</li>
                          <li>
                            Provided multimedia services and web development
                          </li>
                        </ul>
                      </TimelineItem>
                    </Timeline>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="projects">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Card className="bg-transparent border border-orange-500">
                  <CardHeader>
                    <CardTitle className="text-orange-500">
                      Featured Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                        onClick={prevProject}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                        onClick={nextProject}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <motion.div
                        key={currentProject}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center">
                        <div className="relative w-full h-80 mb-4">
                          <Image
                            src={projects[currentProject].image}
                            alt={projects[currentProject].name}
                            className="object-cover object-top rounded-lg"
                            fill
                          />
                          <div className="absolute inset-0 border-2 border-orange-500 rounded-lg"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-orange-300">
                          {projects[currentProject].name}
                        </h3>
                        <p className="text-center mb-4 text-orange-200">
                          {projects[currentProject].description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {projects[currentProject].tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-orange-900/20 text-orange-300 border-orange-500">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="contact">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Card className="bg-transparent border border-orange-500">
                  <CardHeader>
                    <CardTitle className="text-orange-500">
                      Get in Touch
                    </CardTitle>
                    <CardDescription className="text-orange-300">
                      I&apos;m always open to new opportunities and
                      collaborations. Feel free to reach out to me using the
                      form below.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-orange-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          className="bg-transparent border-orange-500 text-orange-300 placeholder-orange-300/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-orange-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-transparent border-orange-500 text-orange-300 placeholder-orange-300/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-orange-300">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="I'm interested in collaborating on..."
                          className="bg-transparent border-orange-500 text-orange-300 placeholder-orange-300/50"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-orange-500 text-black hover:bg-orange-600">
                        <Mail className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

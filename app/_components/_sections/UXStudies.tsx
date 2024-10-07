"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react';

const studies = [
  {
    title: "The Importance of MVP in Market Validation",
    description: "Learn how MVPs can help you validate your ideas quickly and cost-effectively.",
    link: "#",
    size: "lg",
  },
  {
    title: "User-Centric Design in MVP Development",
    description: "Discover how focusing on user needs leads to more successful MVPs.",
    link: "#",
    size: "sm",
  },
  {
    title: "Rapid Iteration: The Key to MVP Success",
    description: "Explore the benefits of fast, iterative development in the MVP process.",
    link: "#",
    size: "sm",
  },
  {
    title: "Balancing Features and Time-to-Market",
    description: "Strategies for prioritizing features in your MVP without delaying launch.",
    link: "#",
    size: "md",
  },
  {
    title: "Measuring MVP Success: Key Metrics",
    description: "Identify and track the right metrics to gauge your MVP's performance.",
    link: "#",
    size: "md",
  },
];

const UXStudies = () => {
  return (
    <section id="ux-studies" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          UX Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${
                study.size === 'lg' ? 'md:col-span-2 md:row-span-2' :
                study.size === 'md' ? 'md:col-span-2' : ''
              }`}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{study.description}</CardDescription>
                </CardContent>
                <CardContent className="pt-0">
                  <a href={study.link} className="inline-flex items-center text-primary hover:underline">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXStudies;
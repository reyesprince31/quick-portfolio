"use client";

import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, Code, Database, Zap } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Rapid MVP Development",
    description:
      "Build and launch your MVP in record time using Next.js and Supabase.",
    icon: <Rocket className="h-12 w-12 mb-4 text-primary" />,
  },
  {
    title: "Full-Stack JavaScript",
    description:
      "Leverage the power of JavaScript across the entire stack for faster development.",
    icon: <Code className="h-12 w-12 mb-4 text-primary" />,
  },
  {
    title: "Scalable Backend",
    description:
      "Utilize Supabase for a powerful, scalable backend without the hassle.",
    icon: <Database className="h-12 w-12 mb-4 text-primary" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Ensure your MVP is lightning-fast and ready for user testing.",
    icon: <Zap className="h-12 w-12 mb-4 text-primary" />,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12">
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">{service.icon}</CardTitle>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

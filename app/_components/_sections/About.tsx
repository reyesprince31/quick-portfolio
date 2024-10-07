"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section ref={ref} id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-8">
              Hi, I&apos;m Prince Reyes, a passionate Software engineer
              specializing in Next.js and Supabase. With years of experience in
              rapid prototyping and agile development, I help startups and
              businesses bring their ideas to life quickly and efficiently.
            </p>
            <p className="text-lg mb-8">
              My expertise lies in creating scalable, user-friendly applications
              that are ready for market validation.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  <Calendar className="mr-2 h-4 w-4" /> Book Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/path-to-your-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="relative lg:w-1/2">
            <Image
              src={"/assets/prince-reyes.png"}
              alt="Prince Reyes"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20">
      <div className="container mx-auto px-4 space-y-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6">
            Ship Your MVP Faster with Next.js and Supabase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl mb-8">
            Validate your ideas quickly and efficiently with our expert MVP
            development services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <a href="#contact">
                <Calendar className="mr-2 h-4 w-4" /> Book Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
          style={{ height: "600px" }} // Adjust this height as needed
        >
          <Image
            src="/assets/dashboard-screenshot.png" // Replace with your actual image path
            alt="Dashboard Screenshot"
            fill
            className="rounded-lg shadow-2xl object-contain"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Powerful Dashboard</h3>
            <p className="text-lg">
              Efficiently manage your MVP with our intuitive dashboard
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

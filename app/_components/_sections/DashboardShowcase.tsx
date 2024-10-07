"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DashboardShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
    </section>
  );
};

export default DashboardShowcase;

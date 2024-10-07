"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-background shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MVP Dev</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#ux-studies" className="hover:text-primary">UX Studies</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#testimonials" className="hover:text-primary">Testimonials</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="px-2 pt-2 pb-4 bg-background"
        >
          <a href="#about" className="block px-2 py-1 text-primary-foreground rounded hover:bg-primary">About</a>
          <a href="#services" className="block px-2 py-1 text-primary-foreground rounded hover:bg-primary mt-1">Services</a>
          <a href="#ux-studies" className="block px-2 py-1 text-primary-foreground rounded hover:bg-primary mt-1">UX Studies</a>
          <a href="#projects" className="block px-2 py-1 text-primary-foreground rounded hover:bg-primary mt-1">Projects</a>
          <a href="#testimonials" className="block px-2 py-1 text-primary-foreground rounded hover:bg-primary mt-1">Testimonials</a>
          <a href="#contact" className="block px-2 py-1 text-primary-foreground rounded hover:bg-primary mt-1">Contact</a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
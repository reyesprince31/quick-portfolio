"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { mockUserData } from "@/lib/mock-data";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// const SocialIcon = (icon: string) => {
//   const size = "w-4 h-4";

//   switch (icon) {
//     case "LinkedIn":
//       return <LinkedInLogoIcon className={size} />;
//     case "GitHub":
//       return <GitHubLogoIcon className={size} />;
//     case "Portfolio":
//       return <GlobeIcon className={size} />;
//     default:
//       return null;
//   }
// };

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDownloadResume = () => {
    window.open(mockUserData.resume.url, "_blank");
  };

  return (
    <div className="lg:hidden flex items-center justify-between p-4">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring"
        aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Link
        href={`${mockUserData.personalInfo.socials[0].url}`}
        className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {mockUserData.personalInfo.name}
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative w-10 h-10">
            <Image
              src="/assets/prince-reyes.png"
              alt="Prince Reyes"
              className="rounded-full object-cover"
              fill
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {mockUserData.personalInfo.socials.map((social) => (
            <DropdownMenuItem key={social.name}>
              <Link href={social.url}>{social.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-50 w-[40%] bg-white dark:bg-gray-800 shadow-lg">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring"
                aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-lg font-medium"
                  onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-lg font-medium"
                  onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-lg font-medium"
                  onClick={toggleMenu}>
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg font-medium"
                  onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-8 px-4">
              <Button
                className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300"
                onClick={handleDownloadResume}>
                Download Resume
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;

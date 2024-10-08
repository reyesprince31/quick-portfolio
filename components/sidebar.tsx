import Link from "next/link";
import Image from "next/image";
import { Home, User, Briefcase, FileText, Mail } from "lucide-react";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const socials = [
  {
    name: "Email",
    href: "mailto:reyes.prince31@gmail.com",
    icon: <EnvelopeClosedIcon className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/reyesprince/",
    icon: <LinkedInLogoIcon className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/reyesprince31",
    icon: <GitHubLogoIcon className="w-5 h-5" />,
  },
];
export default function Sidebar() {
  return (
    <div className="flex box-content h-screen flex-col relative">
      <SidebarContent>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="relative w-16 h-16">
              <Image
                src="/assets/prince-reyes.png"
                alt="Prince Reyes"
                className="rounded-full object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h2 className="font-semibold text-gray-800">Prince Reyes</h2>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-gray-600">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarContent className={`mt-5 h-[calc(100%-160px)] overflow-y-auto`}>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
                <User className="w-5 h-5" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
                <Briefcase className="w-5 h-5" />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
                <FileText className="w-5 h-5" />
                <span>Experience</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </SidebarContent>
      <SidebarContent>
        <div className="p-4">
          <Button className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
            Download Resume
          </Button>
        </div>
      </SidebarContent>
    </div>
  );
}

function SidebarContent({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      className={cn("flex w-full flex-col space-y-1.5 px-4 py-1", className)}>
      {children}
    </div>
  );
}

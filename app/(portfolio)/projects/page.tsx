import { Metadata } from "next";

import ProjectsPage from "./_components/projects";

export const metadata: Metadata = {
  title: "Projects - Prince Reyes",
};

export default function Home() {
  return <ProjectsPage />;
}

import { Metadata } from "next";

import ProjectPage from "./_components/project";

export const metadata: Metadata = {
  title: "Projects - Prince Reyes",
};

export default function Home() {
  return <ProjectPage params={{ id: "1" }} />;
}

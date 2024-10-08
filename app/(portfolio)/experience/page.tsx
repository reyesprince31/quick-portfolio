import { Metadata } from "next";

import ExperiencePage from "./_components/experience";

export const metadata: Metadata = {
  title: "Experience - Prince Reyes",
};

export default function Home() {
  return <ExperiencePage />;
}

import { Metadata } from "next";

import AboutPage from "./_components/about";

export const metadata: Metadata = {
  title: "About - Prince Reyes",
};

export default function Home() {
  return <AboutPage />;
}

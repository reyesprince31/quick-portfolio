import { Metadata } from "next";

import Homepage from "./_components/home-page";

export const metadata: Metadata = {
  title: "Prince Reyes",
};

export default function Home() {
  return <Homepage />;
}

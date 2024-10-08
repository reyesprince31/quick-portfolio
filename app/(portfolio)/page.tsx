import { Metadata } from "next";
import Dashboard from "./_components/dashboard";

export const metadata: Metadata = {
  title: "Prince Reyes",
};

export default function Home() {
  return <Dashboard />;
}

import { Metadata } from "next";

import ContactPage from "./_components/contact";

export const metadata: Metadata = {
  title: "Contact - Prince Reyes",
};

export default function Home() {
  return <ContactPage />;
}

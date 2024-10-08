import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Reyes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <PageWithSidebar>{children}</PageWithSidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}

function PageWithSidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex dark:bg-background max-h-screen"}>
      <div className={"hidden lg:flex"}>
        <Sidebar />
      </div>

      <div
        className={
          "flex flex-1 flex-col overflow-clip overflow-y-auto bg-background lg:m-1.5 lg:ml-0 lg:rounded-lg lg:border"
        }>
        {children}
      </div>
    </div>
  );
}

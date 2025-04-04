import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angelina Aziz | Engineer & Indie Hacker",
  description: "Senior Platform Engineer and co-founder of auralyze.ai. Building scalable solutions and creating meaningful experiences.",
  keywords: ["software engineer", "platform engineer", "indie hacker", "web development", "AI", "machine learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${firaCode.className}`}>
      <body className="bg-black text-white antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

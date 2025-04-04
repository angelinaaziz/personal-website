import type { Metadata } from "next";
import { Inter, Fira Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Angelina Aziz | Software Engineer",
  description: "Senior Platform Engineer based in London. Building modern, scalable systems and pursuing a masters in Systems Engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="bg-[#0a0a0a] text-white">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

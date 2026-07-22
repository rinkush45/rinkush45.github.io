import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Rinku Sharma | Systems Architect Portfolio",
  description:
    "Principal DevOps Engineer, Cloud Architect & AI Developer specializing in high-availability infrastructure, automated security pipelines, and LLMOps. Kubernetes, Terraform, AWS, GCP.",
  keywords: [
    "DevOps Engineer",
    "Cloud Architect",
    "AI Developer",
    "Kubernetes",
    "Terraform",
    "AWS",
    "GCP",
    "MLOps",
    "LLMOps",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${manrope.variable}`}>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

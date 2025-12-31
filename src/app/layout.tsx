import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";
import DynamicCanvasBackgroundComponent from "./components/canvasBackground/dynamicCanvasBackground";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Julian | Backend & Full Stack Developer",
    template: "%s | Julian"
  },
  description: "Seasoned Backend Developer with 8 years of experience in Java, JavaScript, Python, and PHP. Specializing in scalable solutions and clean architecture.",
  keywords: ["Backend Developer", "Full Stack Developer", "Java", "Python", "JavaScript", "TypeScript", "Clean Architecture", "Julian Portfolio"],
  authors: [{ name: "Julian" }],
  creator: "Julian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julianjjo.github.io/", // Adjust if different
    title: "Julian | Backend & Full Stack Developer",
    description: "Seasoned Backend Developer specializing in creating robust, scalable solutions.",
    siteName: "Julian Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian | Backend & Full Stack Developer",
    description: "Seasoned Backend Developer specializing in creating robust, scalable solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <DynamicCanvasBackgroundComponent />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./original.css";
import MobileBottomNav from "@/components/MobileBottomNav";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vineb Digital | Custom UX UI Design and Web Development Agency",
  description: "Vineb Digital is a high-end UI/UX design and web development agency specializing in web, mobile apps, SaaS, WordPress, Webflow, and Shopify.",
  openGraph: {
    title: "Vineb Digital | Custom UX UI Design and Web Development",
    description: "Vineb Digital is a high-end UI/UX design and web development agency specializing in web, mobile apps, SaaS, WordPress, Webflow, and Shopify.",
    type: "website",
    url: "https://vineb.digital",
    siteName: "Vineb Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vineb Digital | Custom UX UI Design",
    description: "High-end UI/UX design and web development agency.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)] preloader-complete`}
      >
        <Header />
        <SmoothScroll>
          <main className="main-wrappers relative content-visible" id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <MobileBottomNav />
      </body>
    </html>
  );
}

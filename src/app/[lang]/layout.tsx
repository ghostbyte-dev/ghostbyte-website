import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { i18n, Locale } from "@/i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghostbyte - Software Development Studio",
  description:
    "We build software that matters - Mobile apps, web applications, and custom software solutions",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{lang: Locale}>
}>) {
  const lang = (await params).lang
  return (
    <html
      className="text-white bg-[#030014] scroll-smooth"
      lang={lang}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { i18n, Locale } from "@/i18n-config";
import { getDictionary } from "@/src/dictionaries";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghostbyte - Software Development Studio",
  description:
    "We build software that matters - Mobile apps, web applications, and custom software solutions",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
 
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale)
  
  return (
    <html
      className="text-white bg-[#030014] scroll-smooth"
      lang={locale}
      suppressHydrationWarning
    >
      <body className={inter.className}>
      <NextIntlClientProvider>
        {<Navbar/>}
        {children}

        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

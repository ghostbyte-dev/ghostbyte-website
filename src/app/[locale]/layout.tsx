export const dynamic = "force-static";

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghostbyte - Software Development Studio",
  description:
    "We build software that matters - Mobile apps, web applications, and custom software solutions",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  console.log(locale);
  console.log(messages);

  return (
    <html
      className="text-white bg-[#030014] scroll-smooth selection:bg-blue-900 selection:text-white"
      lang={locale}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {<Navbar />}
          {children}

          <Footer lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

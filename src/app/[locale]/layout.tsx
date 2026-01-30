export const dynamic = "force-static";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
import { notFound } from "next/navigation";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import PlausibleProvider from "next-plausible";
import type { Organization, WithContext } from "schema-dts";
import ConsoleGhost from "@/src/components/ConsoleGhost";
import { routing } from "@/src/i18n/routing";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ghostbyte",
  logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Ghostbyte_Logo.png",
  url: "https://ghostbyte.dev",
  description: "Ghostbyte is a software development studio in Austria",
  email: "hey@ghostbyte.dev",
  sameAs: [
    "https://github.com/ghostbyte-dev",
    "https://www.instagram.com/ghostbyte.dev",
    "https://www.linkedin.com/company/ghostbyte",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Daniel Hiebeler",
    },
    {
      "@type": "Person",
      name: "Emanuel Hiebeler",
    },
  ],
  employee: [
    {
      "@type": "Person",
      name: "Daniel Hiebeler",
    },
    {
      "@type": "Person",
      name: "Emanuel Hiebeler",
    },
  ],
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AT",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ namespace: "Meta", locale: locale });

  return {
    title: t("title"),
    description: t("description"),
    icons: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
    ],
    alternates: {
      canonical: `https://ghostbyte.dev${locale === "de" ? "/de" : ""}`,
    },
  };
}

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

  return (
    <html
      className="scroll-smooth selection:bg-neutral-800 selection:text-light"
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <Script
          strategy="afterInteractive"
          data-domain="ghostbyte.dev"
          src="/js/script.hash.outbound-links.js"
        />
      </head>

      <body className={inter.className}>
        <ConsoleGhost />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <>
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {<Navbar />}
          {children}

          <Footer lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

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
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import type { Organization, WithContext } from "schema-dts";

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
      className="text-white bg-[#030014] scroll-smooth selection:bg-blue-900 selection:text-white"
      lang={locale}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
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

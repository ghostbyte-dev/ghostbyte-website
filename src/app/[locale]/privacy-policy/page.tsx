import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/src/components/Hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ namespace: "Meta", locale: locale });

  return {
    title: t("titlePrivacy"),
    description: t("descriptionPrivacy"),
    icons: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
    ],
    alternates: {
      canonical: `https://ghostbyte.dev${
        locale === "de" ? "/de/datenschutz" : "/privacy-policy"
      }`,
    },
  };
}

export default async function Privacy(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const t = await getTranslations({ namespace: "Privacy", locale: lang });

  return (
    <div>
      <Hero
        title={t("title")}
        description="Your privacy matters. Here's how we deal with your information."
      />
      <section className="container pb-40">
        <h2 className="font-bold text-2xl mt-3">1. General Information</h2>
        <p>
          We take the protection of your personal data seriously. This website
          is designed to use as little personal data as possible.
        </p>
        <p>
          Personal data is only processed if it is technically necessary or if
          you voluntarily provide it (e.g. via the contact form).
        </p>

        <h2 className="font-bold text-2xl mt-3">2. Hosting</h2>
        <p>
          This website is hosted by Netlify, Inc. When you access this website,
          Netlify may automatically process technical data (such as IP address,
          browser type, and access time) in server log files.
        </p>

        <h2 className="font-bold text-2xl mt-3">3. No Tracking / Analytics</h2>
        <p>
          We do not use cookies for tracking, analytics tools, or advertising
          services. No user profiling or behavioral tracking takes place.
        </p>

        <h2 className="font-bold text-2xl mt-3">4. Contact Form</h2>
        <p>
          If you contact us via the contact form, the data you provide (such as
          name, email address, and message content) will be processed solely for
          the purpose of handling your inquiry.
        </p>

        <h2 className="font-bold text-2xl mt-3">5. Email Communication</h2>
        <p>
          If you contact us via email (directly or through the contact form),
          your message will be stored for processing the inquiry. Please note
          that email communication may be transmitted via external email service
          providers depending on your email infrastructure.
        </p>

        <h2 className="font-bold text-2xl mt-3">
          6. Changes to This Privacy Policy
        </h2>
        <p>
          We reserve the right to update this privacy policy to reflect legal
          requirements or changes in our services.
        </p>
      </section>
    </div>
  );
}

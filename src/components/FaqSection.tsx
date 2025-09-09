// FaqSectionServer.tsx
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import FaqAccordion from "./FaqAccordion";

export default async function FaqSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Faq", locale: lang });

  const faqs = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
  ];

  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container px-5 mx-auto md:px-6 relative">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-300 tracking-tighter sm:text-4xl md:text-5xl">
                {t("title")}
              </h2>
            </div>
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

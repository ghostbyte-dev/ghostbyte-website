import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
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
    <>
      <div className="">
        <section className="max-w-4xl w-4/5 mx-auto flex flex-col items-center my-[30vh]">
          <h1 className="text-5xl font-bold pb-7">{t("title")}</h1>
        </section>
      </div>
    </>
  );
}

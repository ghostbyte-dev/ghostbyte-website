import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

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

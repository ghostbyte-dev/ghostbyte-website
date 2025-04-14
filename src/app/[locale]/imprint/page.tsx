import { useTranslations } from "next-intl";

export default function Imprint() {
  const t = useTranslations("Imprint");

  return (
    <>
      <div className="">
        <section className="max-w-4xl w-4/5 mx-auto flex flex-col items-center my-[30vh]">
          <h1 className="text-5xl font-bold pb-7">{t("title")}</h1>
          <div>
            <h2 className="font-bold text-2xl">Ghostbyte GesbR</h2>
            <p>Sonnenstraße 11a</p>
            <p>6890, Lustenau</p>
            <p>{t("austria")}</p>

            <h2 className="font-bold text-2xl mt-3">{t("shareholder")}</h2>
            <p>Daniel Hiebeler (50%)</p>
            <p>Emanuel Hiebeler (50%)</p>
            <h2 className="font-bold text-2xl mt-3">
              {t("contact_information")}
            </h2>
            <p>Email: hey@ghostbyte.dev</p>

            <h2 className="font-bold text-2xl mt-3">
              {t("disclaimer_headline")}
            </h2>
            <p>{t("disclaimer_content")}</p>

            <h2 className="font-bold text-2xl mt-3">
              {t("liability_headline")}
            </h2>
            <p>{t("liability_content")}</p>
          </div>
        </section>
      </div>
    </>
  );
}

"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../i18n/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const targetLocale = currentLocale === "de" ? "en" : "de";
  const label = currentLocale === "de" ? "English page" : "Deutsche Seite";

  const handleLocaleChange = () => {
    router.replace(pathname, { locale: targetLocale, scroll: false });
  };

  return (
    <button type="button" onClick={handleLocaleChange} className="link-text">
      {label}
    </button>
  );
};

export default LocaleSwitcher;

"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../i18n/navigation";
import Flag from "react-world-flags";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <div className="flex space-x-4 items-center">
      <button onClick={() => handleLocaleChange("de")} className={`${locale == "de" ? "brightness-100": "brightness-50"}`}>
        <Flag code="DE" style={{ height: 24 }} />
      </button>
      <button onClick={() => handleLocaleChange("en")} className={`${locale == "en" ? "brightness-100": "brightness-50"}`}>
        <Flag code="GB" style={{ height: 24 }} />
      </button>
    </div>
  );
};

export default LocaleSwitcher;

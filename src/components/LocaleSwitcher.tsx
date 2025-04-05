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
      <button onClick={() => handleLocaleChange("de")}>
        <Flag code="DE" style={{ height: 24 }} className="rounded-xs" />
      </button>
      <button onClick={() => handleLocaleChange("en")}>
        <Flag code="GB" style={{ height: 24 }} className="rounded-xs" />
      </button>
    </div>
  );
};

export default LocaleSwitcher;

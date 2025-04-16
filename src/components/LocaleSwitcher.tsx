"use client";

import { useRouter, usePathname } from "../i18n/navigation";
import Flag from "react-world-flags";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // `pathname` is localized, e.g., /en/about or /de/kontakt
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <div className="flex space-x-4 items-center">
      <button type="button" onClick={() => handleLocaleChange("de")}>
        <Flag code="DE" style={{ height: 24 }} className="rounded-xs" />
      </button>
      <button type="button" onClick={() => handleLocaleChange("en")}>
        <Flag code="GB" style={{ height: 24 }} className="rounded-xs" />
      </button>
    </div>
  );
};

export default LocaleSwitcher;

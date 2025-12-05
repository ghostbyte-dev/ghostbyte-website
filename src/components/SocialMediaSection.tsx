import { getTranslations } from "next-intl/server";
import Project from "./Project";
import type { Locale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type AccountItem = {
  link: string;
  icon: string;
};

const accounts: AccountItem[] = [
  {
    link: "https://mastodon.social/@ghostbyte",
    icon: "mastodon.svg",
  },
  {
    link: "https://instagram.com/ghostbyte.dev",
    icon: "instagram.png",
  },
  {
    link: "https://linkedin.com/ghostbyte.dev",
    icon: "linkedin.png",
  },
  {
    link: "https://github.com/ghostbyte-dev",
    icon: "github.svg",
  },
  {
    link: "https://socialfolio.me/ghostbyte",
    icon: "socialfolio.svg",
  },
];

export default async function SocialMediaSection({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Projects", locale: lang });
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container mx-auto px-5 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-6xl">
              Our Accounts
            </h2>
            <p className="max-w-[600px] text-neutral-800 font-light text-lg">
              {t("description")}
            </p>
          </div>

          <p className="font-semibold text-lg">Ghostbyte is on:</p>

          <div className="flex gap-3">
            {accounts.map((account) => {
              return (
                <Link
                  href={account.link}
                  key={account.link}
                  target="_blank"
                  rel="noopener norefferer"
                  className="h-16 w-16 rounded-full shadow-lg shadow-neutral-300 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-neutral-200"
                >
                  <Image
                    src={`/socialmedia/${account.icon}`}
                    alt=""
                    width={28}
                    height={28}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

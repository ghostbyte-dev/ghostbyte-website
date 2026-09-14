import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import MoreProjects from "@/src/components/projects/MoreProjects";
import ProjectHero from "@/src/components/projects/ProjectHero";

export const metadata: Metadata = {
  title: "Pixelix | Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work/pixelix",
  },
};

export default async function VeritatePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div>
      <ProjectHero
        title="Pixelix"
        stats={[
          {
            label: "Link",
            value: "app.pixelix.social",
            href: "https://app.pixelix.social",
          },
          {
            label: "Started",
            value: "2024",
          },
          {
            label: "Project Type",
            value: "App",
          },
          {
            label: "Downloads",
            value: "3,600+",
          },
        ]}
      />

      <div className="container mb-20 project-page">
        <Image
          src="/img/projects/pixelix/hero.png"
          alt="Veritate Hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          priority
        />

        <h2>Overview</h2>
        <p>
          With Pixelix we are developing a functional, feature-rich and
          beautiful mobile client for the fediverse Software{" "}
          <a href="https://pixelfed.org/" className="underline">
            Pixelfed
          </a>
          .
        </p>

        <p>
          Pixelix is available for free on Google Play Store, Apple App Store,
          F-Droid and GitHub Releases.
        </p>

        <div className="flex flex-wrap gap-3 my-5">
          <Link
            href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/playstorebadge.svg"
              alt="Google Play Store badge"
              width={135}
              height={40}
              className="w-auto h-12 rounded-lg"
            />
          </Link>

          <Link
            href="https://apps.apple.com/app/pixelix-a-pixelfed-client/id6743839819"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/appstorebadge.svg"
              alt="App Store badge"
              width={120}
              height={40}
              className="w-auto h-12 rounded-lg"
            />
          </Link>

          <Link
            href="https://f-droid.org/packages/com.daniebeler.pfpixelix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/fdroidbadge.svg"
              alt="F-Droid badge"
              width={120}
              height={40}
              className="w-auto h-12 rounded-lg"
            />
          </Link>
        </div>

        <h2>Open Source</h2>
        <p>
          Pixelix is licensed under the GNU General Public License v3.0
          (GPL-3.0) and the source code is available on{" "}
          <a
            href="https://github.com/ghostbyte-dev/pixelix"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
          .
        </p>

        <h2>History</h2>

        <h3>First Steps</h3>

        <p>
          We started developing Pixelix in December 2023. The idea originated
          because of the bad state the original Pixelfed app were in back then.
          So we decided to develop our own solution. Another reason to start
          this project was that we already developed small native Android apps
          using Android Studio in the past and wanted to try something larger
          for the first time.
        </p>

        <Image
          src="/img/projects/pixelix/first_post.png"
          alt="Old logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-w-2xl h-auto rounded-lg"
        />

        <p>
          Version 1.0 was released three month later on March 15. 2024 in Google
          Play Store with a price tag of 2€. Back then the App had a different
          logo. At the beginning we didn't have a clear plan in which Pixelix
          would go. Especially regarding design. Our first idea was to give the
          app a playful design with many fun graphics like the logo itself.
          Turns out the logo was not so well received by the users out of
          multiple reasons. One being that the logo looks more like a game logo
          and not for a social media app. And another one being that it was AI
          generated.
        </p>

        <Image
          src="/img/projects/pixelix/old_logo.png"
          alt="Old logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-32 h-auto rounded-lg"
        />

        <p>
          In the first few weeks the app had really few users. It felt like our
          Mastodon posts were posted into the void without real interactions or
          too much interest in the app. In order to get get more users onboarded
          and receive more potential feedback, in April 2024 we made the app
          available for free on Play Store for a few days.
        </p>

        <p>
          End of May 2024 Pixelix finally got rid of it's controversal first
          logo and moved to the current one. We designed the logo ourself. The
          pixelated letter "P" fits well with the name Pixelix. The new version
          was also well recieved by the community. Since we wanted to keep the
          old logo in some way, we added the custom logo feature to the app,
          which includes multiple logo variants.
        </p>

        <Image
          src="/img/projects/pixelix/icon_selection.png"
          alt="Github release section of Pixelix version 3.0.0"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-w-xl h-auto rounded-lg"
        />

        <p>
          While the first app version was pretty barebone. Only a few months
          after its first release, Pixelix already had features like support for
          multiple accounts, Pixelfed collections, fediverse software detection
          and more.
        </p>

        <h3>Free and Open Source Software</h3>

        <p>
          Pixelix was not open source from the beginning. But after we
          recognised real interest from the community for Pixelix to be open
          source, we finally made the GitHub repository public in June 2024.
          After some research we decided that the GPL-3.0 is a good fit for
          Pixelix and aligns with our values, so that's the license the app is
          released under.
        </p>

        <p>
          While we opened the source code, we initially didn't publish an APK
          for free. This changed a few month later, when we released the APK of
          version 3.0.0 as GitHub release too (additional to the Play Store
          release).
        </p>

        <Image
          src="/img/projects/pixelix/christmas_release.png"
          alt="Github release section of Pixelix version 3.0.0"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-w-3xl h-auto rounded-lg"
        />

        <h3>GitHub Release Stats</h3>

        <p>
          While Google provides then number of downloads and other interesting
          stats about the Play Store release, this is not possible on GitHub. So
          we kind of lost track of how many people really installed and use our
          app. To solve this we developed a small website that extracts the
          download numbers from a GitHub API and displays it together with some
          other stats. This project is called{" "}
          <a
            href="https://github-release-stats.ghostbyte.dev/ghostbyte-dev/pixelix"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub Release Stats
          </a>{" "}
          and it can be used to also track GitHub releases other than Pixelix.
        </p>

        <h3>Promoting the app</h3>

        <p>
          Since Pixelfed is a Fediverse service, we wrote about the project and
          promoted it on Mastodon. In the beginning from our private Mastodon
          accounts. At end of january 2025 we created a dedicated Mastodon
          account for Pixelix in order to separate the posts about Pixelix and
          our private posts.
        </p>

        <p>On January 14. 2025 the app was also available on F-Droid.</p>

        <h3>Migration to iOS</h3>

        <p>
          Pixelix was developed exclusively for Android, and we never had any
          plans to develop an iOS version. But that should change end of January
          2025 when{" "}
          <a
            href="https://mastodon.social/@terrakok@androiddev.social"
            rel="noopener noreferrer"
            target="_blank"
          >
            Konstantin
          </a>
          , a developer at JetBrains contacted us and showed us the technology
          Compose Multiplatform. Compose Multiplatform is a way to develop apps
          for multiple platforms from one single codebase. Konstantin offered us
          that he would migrate our whole project to Compose Multiplatform if we
          are interested. Of course we couldn't decline that offer, both out of
          curiosity and simply because of the opportunity to make Pixelix also
          available for Apple devices. The migration worked really well, and
          only some weeks later the app was working on iOS too. In order to
          publish an app on Apple App Store, an Apple Device is required. So we
          invested almost all the money we earned from selling Pixelix on Google
          Play Store in a MacBook Air. And in April 2025, Pixelix was finally
          available on Apple App Store too.
        </p>

        <h3>Vernissage</h3>
        <p>
          In Spring 2026 we decided to add support for another platform called{" "}
          <a
            href="https://joinvernissage.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vernissage
          </a>
          . Vernissage is also a Fediverse photo sharing platform like Pixelfed,
          but more specialized towards photographers. So we refactored Pixelix
          to support multiple platforms in a clean way. And with Pixelix update
          5.0.0 in July 2026 we added support for Vernissage.
        </p>

        <h3>Pixelix is free</h3>
        <p>
          After two and a half years of developing Pixelix and having it as a
          paid app, we've decided to make Pixelix free for everyone.
        </p>
      </div>

      <MoreProjects lang={lang} projectsToShow={["Veritate", "Socialfolio"]} />
    </div>
  );
}

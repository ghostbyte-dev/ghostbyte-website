import type { Metadata } from "next";
import { Hero } from "@/src/components/Hero";

export const metadata: Metadata = {
  title: "Work | Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/work",
  },
};

export default function WorkOverviewPage() {
  return (
    <div>
      <Hero title="Our work" description="fef" />

      <div className="container"></div>
    </div>
  );
}

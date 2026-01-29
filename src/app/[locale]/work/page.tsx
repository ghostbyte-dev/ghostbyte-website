import type { Metadata } from "next";
import { Hero } from "@/src/components/Hero";
import { getAllPosts } from "@/src/utils/blogApi";

export const metadata: Metadata = {
  title: "Blog | Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/blog",
  },
};

export default function WorkOverviewPage() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div>
      <Hero title="Our work" description="fef" />

      <div className="container mx-auto"></div>
    </div>
  );
}

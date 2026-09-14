import type { Metadata } from "next";
import { MoreStories } from "@/src/components/blog/more-stories";
import { Hero } from "@/src/components/Hero";
import { getAllPosts } from "@/src/utils/blogApi";

export const metadata: Metadata = {
  title: "Blog | Ghostbyte",
  alternates: {
    canonical: "https://ghostbyte.dev/blog",
  },
};

export default function BlogOverviewPage() {
  const allPosts = getAllPosts();

  return (
    <div>
      <Hero
        title="Our Blog"
        description="At Ghostbyte, we love building thoughtful software and sharing what
            we learn along the way. Here you'll find deep dives into web and app
            development and behind-the-scenes looks at our projects."
      />

      <div className="container">
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </div>
    </div>
  );
}

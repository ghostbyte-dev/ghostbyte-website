import type { Metadata } from "next";
import { HeroPost } from "@/src/components/blog/hero-post";
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

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div>
      <Hero
        title="Our Blog"
        description="At Ghostbyte, we love building thoughtful software and sharing what
            we learn along the way. Here you'll find deep dives into web and app
            development and behind-the-scenes looks at our projects."
      />

      <div className="container">
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
    </div>
  );
}

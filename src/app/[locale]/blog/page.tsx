import { HeroPost } from "@/src/components/blog/hero-post";
import { MoreStories } from "@/src/components/blog/more-stories";
import { getAllPosts } from "@/src/utils/blogApi";
import type { Metadata } from "next";

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
    <main className="pt-32">
      <div className="container mx-auto px-5">
        <h1 className="font-bold text-center text-3xl lg:text-5xl my-16">
          Welcome to the Ghostbyte Blog
        </h1>
        <p className="my-10 text-center text-xl">
          At Ghostbyte, we love building thoughtful software and sharing what we
          learn along the way. Here you’ll find deep dives into web and app
          development, behind-the-scenes looks at our projects, and practical
          tips that you can apply to your own work.
        </p>

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
    </main>
  );
}

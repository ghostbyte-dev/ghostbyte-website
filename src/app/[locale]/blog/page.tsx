import { HeroPost } from "@/src/components/blog/hero-post";
import { MoreStories } from "@/src/components/blog/more-stories";
import { getAllPosts } from "@/src/utils/blogApi";
import { Metadata } from "next";

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

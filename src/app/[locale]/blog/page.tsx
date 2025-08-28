import { HeroPost } from "@/src/components/blog/hero-post";
import { getAllPosts } from "@/src/utils/blogApi";

export default function BlogOverviewPage() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className="container mx-auto px-5 mt-32">
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {/*         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
         */}{" "}
      </div>
    </main>
  );
}

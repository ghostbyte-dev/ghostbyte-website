import type { Post } from "@/src/types/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      {/* <h2 className="mb-8 text-5xl md:text-6xl font-extrabold text-neutral-800">
        More Stories
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

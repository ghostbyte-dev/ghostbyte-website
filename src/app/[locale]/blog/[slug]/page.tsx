import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostHeader } from "@/src/components/blog/post-header";
import { getAllPosts, getPostBySlug } from "@/src/utils/blogApi";
import markdownToHtml from "@/src/utils/markdownToHtml";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <div className="container pt-32 md:pt-48">
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />

          <div className="max-w-2xl mx-auto">
            <div
              className="markdown"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | A Ghostbyte Story`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
    alternates: {
      canonical: `https://ghostbyte.dev/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

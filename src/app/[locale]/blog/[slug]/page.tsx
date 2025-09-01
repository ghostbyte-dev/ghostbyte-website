import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/src/utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "@/src/utils/blogApi";
import { PostHeader } from "@/src/components/blog/post-header";
import Link from "next/link";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <div className="container mx-auto px-5 pt-32">
        <p className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
          <Link href="/blog" className="hover:underline">
            Back
          </Link>
        </p>
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

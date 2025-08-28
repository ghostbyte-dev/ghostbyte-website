import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/src/utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "@/src/utils/blogApi";
import markdownStyles from "@/src/components/blog/markdown-styles.module.css";
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
      {/*       <Alert preview={post.preview} />
       */}{" "}
      <div className="container mx-auto px-5 pt-32">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </h2>
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
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

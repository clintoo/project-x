import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts, navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Note | kc-clintone" };
  return {
    title: `${post.title} | kc-clintone`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center mx-auto sm:px-10 px-5">
      <div className="max-w-3xl w-full pb-20">
        <FloatingNav navItems={navItems} />
        <article className="pt-40">
          <Link href="/blog" className="text-purple text-sm hover:underline">
            ← All notes
          </Link>
          <p className="text-white-200 text-sm mt-8">
            {post.date} · {post.readTime}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{post.title}</h1>
          <div className="flex gap-2 mt-4 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-purple border border-purple/30 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-10 space-y-6 text-white-200 leading-relaxed text-lg">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

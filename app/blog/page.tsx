import Link from "next/link";

import { blogPosts, navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { cardStyle } from "@/lib/card-style";

export const metadata = {
  title: "Notes | kc-clintone",
  description: "Writing on products, AI features, and mentoring.",
};

export default function BlogIndexPage() {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full pb-20">
        <FloatingNav navItems={navItems} />
        <section className="pt-40">
          <p className="text-center text-purple text-sm uppercase tracking-widest">
            Blog
          </p>
          <h1 className="heading mt-4">
            Notes from the <span className="text-purple">workbench</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-3xl border border-white/[0.2] p-8 hover:border-purple/50 transition-colors"
                style={cardStyle}
              >
                <p className="text-xs text-white-200">
                  {post.date} · {post.readTime}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-purple border border-purple/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
                <p className="text-white-200 mt-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

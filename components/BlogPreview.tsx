import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { blogPosts } from "@/data";
import { cardStyle } from "@/lib/card-style";
import MagicButton from "./MagicButton";

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20">
      <h1 className="heading">
        Notes from the <span className="text-purple">workbench</span>
      </h1>
      <p className="text-white-200 text-center mt-6 max-w-2xl mx-auto">
        Short writing on shipping products, AI features, and how I mentor.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl border border-white/[0.2] p-6 flex flex-col hover:border-purple/50 transition-colors group"
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
            <h2 className="text-xl font-bold mt-3 group-hover:text-purple transition-colors">
              {post.title}
            </h2>
            <p className="text-white-200 text-sm mt-3 flex-1">{post.excerpt}</p>
            <span className="text-purple text-sm mt-6">Read note →</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/blog">
          <MagicButton
            title="View all notes"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;

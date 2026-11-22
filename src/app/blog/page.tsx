import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-24">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">Insights.</h1>
        <p className="text-xl md:text-3xl text-gray-500 max-w-3xl">
          Thoughts, strategies, and resources on design, technology, and building better digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {[
          { title: "The Future of Web Design in 2026", category: "Design", slug: "future-of-web-design" },
          { title: "Why Next.js is the Ultimate Framework", category: "Development", slug: "nextjs-ultimate-framework" },
          { title: "Mastering GSAP Scroll Animations", category: "Tutorial", slug: "mastering-gsap" },
          { title: "How to Optimize Your E-commerce Site", category: "Business", slug: "ecommerce-optimization" },
        ].map((post, i) => (
          <Link href={`/blog/${post.slug}`} key={i} className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-6 bg-gray-100 aspect-[16/10] relative">
              <img 
                src="/images/image-2747.webp" 
                alt="Blog thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-sm font-medium z-10">
                {post.category}
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 group-hover:text-[var(--brand-accent)] transition-colors line-clamp-2">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 font-medium">
              Read Article <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="px-6 md:px-12 max-w-4xl mx-auto mb-16">
        <div className="mb-8 flex items-center gap-4 text-sm font-medium">
          <span className="text-[var(--brand-accent)] border border-[var(--brand-accent)] px-3 py-1 rounded-full">Development</span>
          <span className="text-gray-500">July 17, 2026</span>
          <span className="text-gray-500">5 min read</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 capitalize">
          {slug.split('-').join(' ')}
        </h1>
      </div>

      <div className="w-full h-[50vh] md:h-[70vh] mb-16 relative">
        <img 
          src="/images/image-2747.webp" 
          alt="Blog cover" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="px-6 md:px-12 max-w-3xl mx-auto prose prose-lg prose-invert text-gray-700">
        <p className="text-2xl leading-relaxed mb-8 font-medium text-black">
          This is a dynamic blog post template. In a real-world scenario, you would fetch this content from a CMS like WordPress, Sanity, or Strapi.
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-3xl font-bold mb-6 mt-12 text-black">The Core Concept</h2>
        <p className="mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote className="border-l-4 border-[var(--brand-accent)] pl-6 italic text-2xl my-12 text-black">
          "Design is not just what it looks like and feels like. Design is how it works."
        </blockquote>
        <p className="mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
  );
}

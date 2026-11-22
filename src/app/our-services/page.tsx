export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-24">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">Our Services.</h1>
        <p className="text-xl md:text-3xl text-gray-500 max-w-3xl">
          We provide end-to-end digital solutions designed to elevate your brand and drive measurable growth.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {[
          { title: "Digital Strategy & Branding", tools: ["Figma", "Miro", "Brand Guidelines"] },
          { title: "UI/UX Design", tools: ["Figma", "Prototyping", "Wireframing"] },
          { title: "Web & Mobile Development", tools: ["Next.js", "React Native", "Tailwind CSS"] },
          { title: "E-Commerce Solutions", tools: ["Shopify", "WooCommerce", "Custom"] },
          { title: "SEO & Performance", tools: ["Technical SEO", "Speed Optimization", "Analytics"] }
        ].map((service, i) => (
          <div key={i} className="group border-t border-gray-200 pt-8 pb-12 cursor-pointer hover:pl-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight group-hover:text-[var(--brand-accent)] transition-colors">
                {service.title}
              </h2>
              <div className="flex gap-4">
                {service.tools.map((tool, j) => (
                  <span key={j} className="px-4 py-2 rounded-full border border-gray-200 text-sm">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

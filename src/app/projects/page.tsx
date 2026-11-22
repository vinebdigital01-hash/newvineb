export default function Projects() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-24">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">Our Work.</h1>
        <p className="text-xl md:text-3xl text-gray-500 max-w-3xl">
          A selection of our finest digital experiences crafted for forward-thinking brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {[1, 2, 3, 4].map((item, i) => (
          <div key={i} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
            <div className="overflow-hidden rounded-3xl mb-6 bg-gray-100 aspect-[4/5] relative">
              <img 
                src="/images/image-2747.webp" 
                alt="Project thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Project Name {item}</h3>
            <p className="text-gray-500">Web Design, Development</p>
          </div>
        ))}
      </div>
    </div>
  );
}

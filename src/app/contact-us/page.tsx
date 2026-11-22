export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">Hello.</h1>
          <p className="text-xl text-gray-500 mb-12">
            Have a project in mind? Let&apos;s talk about it.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <a href="mailto:hello@vinebdigital.com" className="text-xl hover:text-[var(--brand-accent)] transition-colors">hello@vinebdigital.com</a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-xl text-gray-700">Ghaziabad, India</p>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-12">
            <div className="relative">
              <input type="text" id="name" className="peer w-full border-b-2 border-gray-300 py-4 focus:outline-none focus:border-black bg-transparent placeholder-transparent" placeholder="Name" />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">What's your name?</label>
            </div>
            <div className="relative">
              <input type="email" id="email" className="peer w-full border-b-2 border-gray-300 py-4 focus:outline-none focus:border-black bg-transparent placeholder-transparent" placeholder="Email" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">What's your email?</label>
            </div>
            <div className="relative">
              <textarea id="message" rows={4} className="peer w-full border-b-2 border-gray-300 py-4 focus:outline-none focus:border-black bg-transparent placeholder-transparent resize-none" placeholder="Message" />
              <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Tell us about your project</label>
            </div>
            
            <button type="submit" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--brand-accent)] hover:text-black transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

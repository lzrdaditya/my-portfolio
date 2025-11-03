export default function ContactSection() {
  return (
    <section
      id="contact"
      className="fade-in max-w-3xl mx-auto text-center px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-silver mb-8">
        Feel free to reach out for collaboration, opportunities, or just to say hello!
      </p>

      <form className="grid gap-4 text-left max-w-lg mx-auto">
        <div>
          <label className="block mb-2 text-sm text-gray-400" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full rounded-md p-3 bg-[#1e1e1e] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full rounded-md p-3 bg-[#1e1e1e] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your message..."
            className="w-full rounded-md p-3 bg-[#1e1e1e] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-accent text-white py-3 rounded-md hover:bg-blue-500 transition"
          onClick={(e) => e.preventDefault()}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

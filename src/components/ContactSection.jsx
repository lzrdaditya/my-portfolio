export default function ContactSection() {
  return (
    <section
      id="contact" 
      className="fade-in max-w-3xl mx-auto text-center px-4 py-16"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-silver mb-8">
        Feel free to reach out for collaboration, opportunities, or just to say hello!
      </p>

      <div className="flex justify-center items-center gap-8 mt-8">
        <a
          href="mailto:adityalzrd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#4fc3f7] transition-colors group"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="text-sm">Email</span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/mohammad-aditya-lazuardi-164304214/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0077B5] transition-colors group"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span className="text-sm">LinkedIn</span>
          </div>
        </a>

        <a
          href="https://www.instagram.com/lzraditya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#E1306C] transition-colors group"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
            <span className="text-sm">Instagram</span>
          </div>
        </a>
      </div>
    </section>
  );
}

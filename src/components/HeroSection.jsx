
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade out effect: fully visible at top, fades out as you scroll past 80vh
  const fadeOutStart = 0;
  const fadeOutEnd = window.innerHeight * 0.8;
  const opacity = 1 - Math.min(1, (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart));

  return (
    <section
      id="about"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ margin: 0, padding: 0, top: 0 }}
    >
      {/* Parallax Background with fade out */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/bg-abstract.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity,
          transition: "opacity 0.3s",
          zIndex: 0,
        }}
      />
      {/* Overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(17,17,17,0.7) 0%, rgba(17,17,17,0.95) 100%)",
          zIndex: 1,
        }}
      />
      {/* Main content - perfectly centered */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full object-cover mb-6 border-2 border-gray-700"
        />
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Mohammad Aditya Lazuardi
        </h1>
        <p className="text-silver max-w-2xl mx-auto mb-6">
          Industrial Engineering graduate passionate about Reliability,
          Operations Excellence, and Digital Manufacturing. Skilled in Lean,
          Data Analytics, and Predictive Maintenance.
        </p>
        <a
          href="/Resume.pdf"
          className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

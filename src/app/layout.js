import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParallaxBackground from "../components/ParallaxBackground";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Mohammad Aditya Lazuardi | Portfolio",
  description: "Industrial Engineer | Reliability | Operations | Data Analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111111] text-gray-100">
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar className="relative z-50" />
          <main className="flex-grow relative">
            {children}
          </main>
          <Footer className="relative z-50" />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <nav className="bg-transparent backdrop-blur-md text-gray-100 py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 border-b border-gray-800">
      <h1 className="text-lg font-bold tracking-wide">Aditya Lazuardi</h1>
      <button
        className="md:hidden text-gray-300"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <ul
        className={`md:flex gap-8 text-sm ${
          open ? "block mt-4" : "hidden md:flex"
        }`}
      >
        {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-accent transition"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

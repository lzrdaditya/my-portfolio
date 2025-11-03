export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-gray-800 text-gray-500 mt-10">
      <p>
        © {new Date().getFullYear()} Mohammad Aditya Lazuardi •{" "}
        <a
          href="https://www.linkedin.com/in/mohammad-aditya-lazuardi-758095218/"
          target="_blank"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

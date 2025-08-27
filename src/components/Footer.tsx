export default function Footer() {
  return (
    <footer className="w-full px-12 py-6 text-md text-zinc-400">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end">
        <p>© {new Date().getFullYear()} okbut.io. All rights reserved.</p>
        {/* TODO implement chloecodez.com */}
        <a
          href="https://chloecodez.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-200 transition"
        >
          created by <strong>chloecodez.com</strong>
        </a>
      </div>
    </footer>
  );
}

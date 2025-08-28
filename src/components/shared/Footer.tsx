import Logo from "./Logo";

export default function Footer(props: { className?: string }) {
  const { className } = props;
  return (
    // TODO set fixed height to calculate page height correctly
    <footer
      className={`w-full px-12 py-6 text-md text-zinc-400 bg-black ${className}`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end">
        <div className="flex items-center justify-center gap-4">
          <Logo className="text-white" />
          <p>© {new Date().getFullYear()}All rights reserved.</p>
        </div>
        <a
          href="https://chloecodes.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-200 transition"
        >
          created by <strong>chloecodes.io</strong>
        </a>
      </div>
    </footer>
  );
}

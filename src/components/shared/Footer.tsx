import Logo from "./Logo";

export default function Footer(props: { className?: string }) {
  const { className } = props;
  return (
    // TODO set fixed height to calculate page height correctly
    <footer
      className={`w-full px-12 py-12 sm:py-6 text-zinc-400 bg-black leading-none ${className}`}
    >
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end gap-2 ">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end gap-2">
          <Logo className="text-white" />
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <a
          href="https://chloecodes.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          created by{" "}
          <span className="text-white font-bold transition">chloecodes.io</span>
        </a>
      </div>
    </footer>
  );
}

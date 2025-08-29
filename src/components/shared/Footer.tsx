import Logo from "./Logo";

// base: 20vh tall
// sm and above: 10vh tall

export default function Footer(props: { className?: string }) {
  const { className } = props;
  return (
    <footer
      className={`w-full h-[20vh] sm:h-[10vh] text-zinc-400 bg-black leading-none ${className} flex items-center justify-center`}
    >
      <div className="w-full h-full px-8 py-8 sm:py-4 flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-2 ">
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

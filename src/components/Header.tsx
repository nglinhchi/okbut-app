import Logo from "./Logo";

export default function Header() {
  return (
    <header className="app-gradient-lg w-full py-4 px-6 flex items-center justify-end">
      <Logo className="text-black" />
    </header>
  );
}

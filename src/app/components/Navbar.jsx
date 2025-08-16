import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between py-2 px-8 z-50 bg-slate-800 text-gray-300">
      <Link
        className="uppercase font-bold text-md h-12 flex items-center"
        href="/"
      >
        next store
      </Link>
    </nav>
  );
}

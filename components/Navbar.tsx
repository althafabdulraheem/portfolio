import Link from "next/link"
export default function Navbar() {
  return (
    <nav className="flex justify-between bg-black p-4 text-white w-full">
      <h1 className="font-bold">ATFAR</h1>
      <div className="hidden sm:block flex justify-between w-[30%]">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
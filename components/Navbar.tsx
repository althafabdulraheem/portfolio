"use client";
import { useState } from "react";
import Link from "next/link";
import { ChartNoAxesGantt, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="flex justify-between bg-black p-4 text-white w-full">
        <div className="flex justify-between w-full sm:w-[50%]">
          <h1 className="font-bold">ATFAR</h1>
          {!isOpen ? (
            <ChartNoAxesGantt onClick={toggleMenu} className="sm:hidden" />
          ) : (
            <X onClick={toggleMenu} className="sm:hidden" />
          )}
        </div>
        <div className="hidden  sm:flex sm:justify-between sm:w-[30%]">
          <Link className="hover:text-cyan-700" href="/">
            Home
          </Link>
          <Link className="hover:text-cyan-700" href="/about">
            About
          </Link>
          <Link className="hover:text-cyan-700" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-cyan-700" href="/contact">
            Contact
          </Link>
        </div>
      </nav>
      {/* mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col text-white bg-black"
          >
            <Link className="p-2 border-b border-cyan-700" href="/">
              Home
            </Link>
            <Link className="p-2 border-b border-cyan-700" href="/about">
              About
            </Link>
            <Link className="p-2 border-b border-cyan-700" href="/projects">
              Projects
            </Link>
            <Link className="p-2" href="/contact">
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

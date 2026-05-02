"use client";

import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "About Me", path: "/aboutpage" },
    { name: "Contacts", path: "/contact" },
  ];

  return (
    <div className="text-white bg-[#1f242d] flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-6 text-sm z-50 bg-[#282C33]/20 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" onClick={handleScrollToTop} className="font-semibold text-2xl tracking-wide text-white hover:text-[#C778DD] transition">
          Meet bhuva
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => link.path === "/" && handleScrollToTop()}
              className={`transition ${
                pathname === link.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="text-[#C778DD]">#</span> {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden z-50 flex flex-col justify-center items-end gap-1 w-8 h-8"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-3xl leading-none">✕</span>
          ) : (
            <>
              <span className="block h-0.5 w-7 bg-white rounded"></span>
              <span className="block h-0.5 w-4 bg-white rounded"></span>
            </>
          )}
        </button>
      </header>

      {/* Space for navbar */}
      <div className="h-18" />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#282C33]/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 ease-in-out md:hidden z-40 ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => {
              setOpen(false);
              if (link.path === "/") {
                handleScrollToTop();
              }
            }}
            className={`transition ${
              pathname === link.path
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <span className="text-[#C778DD]">#</span> {link.name}
          </Link>
        ))}

        {/* Social Icons */}
        <div className="fixed bottom-6 flex gap-4 text-gray-300">
          <a
            href="https://github.com/meetbhuva07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 hover:text-[#C778DD] transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/meet-bhuva-4b1220329?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 hover:text-[#C778DD] transition" />
          </a>

          <a href="mailto:meetbhuva0009@gmail.com">
            <FaEnvelope className="w-5 h-5 hover:text-[#C778DD] transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
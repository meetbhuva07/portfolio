"use client";

import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="text-white bg-[#1f242d] flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-6.5 text-sm z-50 bg-[#282C33]/20 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
        
        {/* Logo */}
        <div className="font-semibold tracking-wide text-white">
          Meet Bhuva
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-white transition">
            <span className="text-[#C778DD]">#</span> Home
          </a>

          <a href="#works" className="hover:text-white transition">
            <span className="text-[#C778DD]">#</span> Works
          </a>

          <a href="#about" className="hover:text-white transition">
            <span className="text-[#C778DD]">#</span> About Me
          </a>

          <a href="#contact" className="hover:text-white transition">
            <span className="text-[#C778DD]">#</span> Contacts
          </a>
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
        className={`fixed top-0 left-0 w-full h-full bg-[#282C33]/85 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 md:hidden z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#home" onClick={() => setOpen(false)}>
          <span className="text-[#C778DD]">#</span> Home
        </a>

        <a href="#works" onClick={() => setOpen(false)}>
          <span className="text-[#C778DD]">#</span> Works
        </a>

        <a href="#about" onClick={() => setOpen(false)}>
          <span className="text-[#C778DD]">#</span> About Me
        </a>

        <a href="#contact" onClick={() => setOpen(false)}>
          <span className="text-[#C778DD]">#</span> Contacts
        </a>

        {/* Social Icons */}
        <div className="fixed bottom-6 flex gap-4 text-gray-300">
          <a href="#">
            <FaGithub className="w-5 h-5 hover:text-[#C778DD] transition" />
          </a>

          <a href="#">
            <FaLinkedin className="w-5 h-5 hover:text-[#C778DD] transition" />
          </a>

          <a href="#">
            <FaEnvelope className="w-5 h-5 hover:text-[#C778DD] transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
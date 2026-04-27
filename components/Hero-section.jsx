"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="bg-[#1f242d] text-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-12 md:py-20 relative gap-10">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Meet is a{" "}
            <span className="text-[#C778DD]">front-end developer</span>
          </h1>

          <p className="text-gray-400 mt-6 text-sm sm:text-base md:text-lg">
            He crafts responsive websites where technologies meet creativity
          </p>

          <button className="mt-6 border border-[#C778DD] px-5 py-2 hover:bg-[#C778DD] transition">
            Contact me !!
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex flex-col items-center order-2">
          <Image
            src="/hero-img.png"
            alt="hero"
            width={450}
            height={500}
            className="w-70 sm:w-87.5 md:w-112.5 h-auto relative z-10"
          />

          {/* STATUS BOX */}
          <div className="mt-4 border border-gray-500 px-4 py-2 text-sm sm:text-base text-gray-300 bg-[#282C33] w-full max-w-[320px] sm:max-w-95 md:max-w-100 text-center">
            <span className="text-[#C778DD]">■</span> Currently working on{" "}
            <span className="text-white font-semibold">Portfolio</span>
          </div>
        </div>

      </section>
    </>
  );
}
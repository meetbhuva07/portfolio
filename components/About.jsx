"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#1f242d] text-white px-6 md:px-20 py-20 overflow-hidden">
      {/* Heading */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
          <span className="text-[#C778DD]">#</span>about-me
        </h2>

        <div className="h-px bg-[#C778DD] flex-1 max-w-30 sm:max-w-55 md:max-w-[320px]"></div>
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Image First on Mobile */}
        <div className="relative flex justify-center order-1 md:order-2">
          {/* Top Dots */}
          <div className="absolute top-4 left-6 grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <span
                key={i}
                className="w-0.75 h-0.75 rounded-full bg-gray-400"
              ></span>
            ))}
          </div>

          {/* Center Dots */}
          <div className="absolute top-1/2 right-6 grid grid-cols-4 gap-2">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="w-0.75 h-0.75 rounded-full bg-gray-400"
              ></span>
            ))}
          </div>

          {/* Person Image */}
          <div className="relative">
            <Image
              src="/About-image.png"
              alt="about"
              width={340}
              height={420}
              className="w-42.5 xs:w-[200px] sm:w-62.5 md:w-85 h-auto object-contain"
            />

            {/* Bottom Purple Line */}
            <div className="h-0.5 bg-[#C778DD] w-full mt-2"></div>
          </div>
        </div>

        {/* Left Content */}
        <div className="relative order-2 md:order-1 text-center md:text-left">
          {/* Left Gray Box */}
          <div className="hidden lg:block absolute -left-24 top-14 w-14 h-28 border border-gray-500"></div>

          <p className="text-gray-300 text-sm sm:text-base leading-8 mb-8">
            Hello, I’m Meet!
            <br />
            <br />
            I’m a passionate front-end developer and BCA student based in India.
            I can develop responsive websites from scratch and turn them into
            modern, user-friendly web experiences.
            <br />
            <br />
            Transforming my ideas and creativity into real websites has been my
            passion. I work with HTML, CSS, JavaScript, React, and Next.js to
            build clean and professional projects. I enjoy learning new
            technologies and continuously improving my skills to create better
            digital experiences.
          </p>

          <button className="border border-[#C778DD] px-5 py-3 hover:bg-[#C778DD] transition">
            Read more →
          </button>
        </div>
      </div>
    </section>
  );
}

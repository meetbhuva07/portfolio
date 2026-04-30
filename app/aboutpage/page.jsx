import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const facts = [
    "I like winter more than summer",
    "I often bike with my friends",
    "I like pizza and pasta",
    "I was in Egypt, Poland and Turkey",
    "My favorite movie is The Green Mile",
    "I am still in school",
    "I don’t have any siblings",
  ];

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-[#1f242d] text-white px-6 md:px-20 py-20 overflow-hidden">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-semibold mb-3">
          <span className="text-[#C778DD]">/ </span>about-me
        </h2>

        <p className="text-gray-400 mb-8 text-sm sm:text-base">Who am I ??</p>

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
          <div className="relative order-2 md:order-1 text-justify md:text-justify max-w-xl">
            {/* Left Gray Box */}
            <div className="hidden lg:block absolute -left-24 top-14 w-14 h-28 border border-gray-500"></div>

            <p className="text-gray-300 text-sm sm:text-base leading-8 mb-8">
              Hello, I’m Meet!
              <br />
              <br />
              I’m a passionate front-end developer and BCA student based in
              India. I can develop responsive websites from scratch and turn
              them into modern, user-friendly web experiences.
              <br />
              <br />
              Transforming my ideas and creativity into real websites has been
              my passion. I work with HTML, CSS, JavaScript, React, and Next.js
              to build clean and professional projects. I enjoy learning new
              technologies and continuously improving my skills to create better
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="bg-[#1f242d] text-white relative overflow-hidden font-mono px-4 sm:px-6 md:px-10 lg:px-20 py-14 sm:py-20">
  
  {/* Left Box */}
  <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-12 h-24 border border-[#ABB2BF] opacity-50"></div>

  {/* Top Right Dots */}
  <div className="absolute top-4 right-4 sm:right-6 grid grid-cols-3 gap-2">
    {[...Array(9)].map((_, i) => (
      <span key={i} className="w-1 h-1 rounded-full bg-[#ABB2BF]"></span>
    ))}
  </div>

  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center md:text-left">
      <span className="text-[#C778DD]">#</span>skills
    </h2>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      
      {/* Card Common Style */}
      {[
        {
          title: "Languages",
          content: `TypeScript Lua\nPython JavaScript`,
        },
        {
          title: "Other",
          content: `HTML CSS EJS SCSS\nREST Jinja`,
        },
        {
          title: "Tools",
          content: `VSCode Neovim Linux\nFigma XFCE Arch\nGit Font Awesome\nKDE Fish`,
        },
        {
          title: "Databases",
          content: `SQLite PostgreSQL\nMongo`,
        },
        {
          title: "Frameworks",
          content: `React Vue\nDjango Discord.js\nFlask Express.js`,
        },
      ].map((item, index) => (
        
        <div
          key={index}
          className="border border-[#ABB2BF] hover:border-[#C778DD] transition duration-300 p-0 group"
        >
          <div className="border-b border-[#ABB2BF] group-hover:border-[#C778DD] px-3 py-2 text-sm font-semibold text-center md:text-left">
            {item.title}
          </div>

          <div className="px-3 py-3 text-[#ABB2BF] text-sm leading-7 whitespace-pre-line text-center md:text-left">
            {item.content}
          </div>
        </div>

      ))}

    </div>
  </div>
</section>

      {/* ================= FUN FACTS SECTION ================= */}
      <section className="bg-[#1f242d] text-white relative overflow-hidden font-mono px-4 sm:px-6 md:px-10 lg:px-20 py-14 sm:py-20">
        {/* Bottom Right Dots */}
        <div className="absolute bottom-8 right-4 sm:right-6 hidden md:grid grid-cols-4 gap-2">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-[#ABB2BF]"
            ></span>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
            <span className="text-[#C778DD]">#</span>my-fun-facts
          </h2>

          {/* Facts */}
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="border border-[#ABB2BF] px-4 py-2 text-sm text-[#ABB2BF] hover:border-[#C778DD] transition duration-300"
              >
                {fact}
              </div>
            ))}
          </div>

          {/* Middle Dots */}
          <div className="hidden xl:flex absolute right-52 top-16 flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="w-5 h-[3px] rounded-full bg-[#ABB2BF]"
              ></span>
            ))}
          </div>

          {/* Purple Boxes */}
          <div className="hidden xl:block absolute right-16 top-24">
            <div className="relative w-24 h-20">
              <div className="absolute left-0 bottom-0 w-10 h-10 border border-[#C778DD]"></div>
              <div className="absolute right-0 top-0 w-10 h-10 border border-[#C778DD]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

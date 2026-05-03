"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "ChertNodes",
      tech: "HTML SCSS Python Flask",
      desc: "Minecraft servers hosting",
      img: "/project1.png",
      live: true,
      cached: true,
    },
    {
      title: "Kahoot Answers Viewer",
      tech: "CSS Express Node.js",
      desc: "Get answers to your kahoot quiz",
      img: "/project2.png",
      live: true,
    },
    {
      title: "ProtectX",
      tech: "React Express Discord.js Node.js",
      desc: "Discord anti-crash bot",
      img: "/project3.png",
      cached: true,
    },
    {
      title: "Kotik Bot",
      tech: "HTML CSS JS",
      desc: "Multi-functional discord bot",
      img: "/project4.png",
      live: true,
    },
    {
      title: "Portfolio",
      tech: "Vue TS Less",
      desc: "You're using it rn",
      img: "/portfolio.png",
      live: true,
    },
  ];

  const smallProjects = [
    {
      tech: "Discord.js TS JS",
      title: "Bot boilerplate",
      desc: "Start creating scalable discord.js bot with typescript",
    },
    {
      tech: "VUE CSS JS",
      title: "My blog",
      desc: "Frontend of my future blog",
    },
    {
      tech: "Figma",
      title: "Chess pro",
      desc: "Landing page for chess tournaments",
    },
    {
      tech: "Figma",
      title: "Crash protect",
      desc: "Anti-raid bot template",
    },
    {
      tech: "HTML CSS",
      title: "CSS experiments",
      desc: "Collection of css projects",
    },
    {
      tech: "Lua NeoVim",
      title: "nvim config",
      desc: "Perfect config for dev",
    },
  ];

  return (
    <section className="bg-[#1f242d] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-semibold mb-3">
        <span className="text-[#C778DD]">/ </span>projects
      </h2>

      <p className="text-gray-400 mb-8 text-sm sm:text-base">
        List of my projects
      </p>

      {/* ================= COMPLETE APPS ================= */}
      <h3 className="text-lg sm:text-2xl mb-5">
        <span className="text-[#C778DD]">#</span>complete-apps
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-12 ">
        {projects.map((item, i) => (
          <div
            key={i}
            className="border border-white bg-[#282C33] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_8px_#C778DD]"
          >
            {/* Image */}
            <div className="relative w-full aspect-16/10 border-b border-white">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tech */}
            <div className="border-b border-white px-3 py-2 text-[11px] text-gray-400">
              {item.tech}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-[15px] sm:text-base font-medium mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-[13px] mb-4 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex gap-2 flex-wrap">
                {item.live && (
                  <button className="border border-[#C778DD] text-[11px] px-3 py-1.5 hover:bg-[#473a54] transition">
                    Live &lt;~&gt;
                  </button>
                )}
                {item.cached && (
                  <button className="border border-white text-[11px] px-3 py-1.5 hover:border-gray-300 transition">
                    Cached &gt;
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= SMALL PROJECTS ================= */}
      <h3 className="text-lg sm:text-2xl mb-5">
        <span className="text-[#C778DD]">#</span>small-projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 ">
        {smallProjects.map((item, i) => (
          <div
            key={i}
            className="border border-white bg-[#282C33] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_6px_#C778DD]"
          >
            <div className="border-b border-white px-3 py-2 text-[11px] text-gray-400">
              {item.tech}
            </div>

            <div className="p-4">
              <h3 className="text-[14px] sm:text-sm font-medium mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-[12px] mb-4 leading-relaxed">
                {item.desc}
              </p>

              <button className="border border-[#C778DD] text-[11px] px-3 py-1.5 hover:bg-[#473a54] transition">
                Live &lt;~&gt;
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
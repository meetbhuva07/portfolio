"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "ChertNodes",
      desc: "Minecraft servers hosting platform with powerful server management and hosting solutions.",
      tech: "HTML | SCSS | Python | Flask",
      image: "/p3.png",
      btn1: "Live ↔",
      link: "https://chertnodes.com/",
    },
    {
      title: "ProtectX",
      desc: "Discord anti-crash bot designed to protect servers from raids and malicious activities.",
      tech: "React | Express | Discord.js | Node.js",
      image: "/project-2.png",
      btn1: "Live ↔",
      link: "https://protectx.vercel.app/",
    },
    {
      title: "URL Shortener",
      desc: "Create short, easy-to-share links instantly. Built with React, Supabase, and shadcn/ui for a fast and modern user experience.",
      tech: "React.js | Supabase | shadcn/ui | Tailwind CSS",
      image: "/shortener.png",
      btn1: "Live ↔",
      link: "https://shortener-pink-two.vercel.app/",
    },
  ];

  const smallProjects = [
    {
      tech: "Discord.js | TS | JS",
      title: "Bot Boilerplate",
      desc: "Start creating scalable Discord bots with TypeScript.",
    },
    {
      tech: "Vue | CSS | JS",
      title: "My Blog",
      desc: "Frontend design for my future blog platform.",
    },
    {
      tech: "Figma",
      title: "Chess Pro",
      desc: "Landing page design for chess tournaments.",
    },
    {
      tech: "Figma",
      title: "Crash Protect",
      desc: "Anti-raid Discord bot template UI.",
    },
    {
      tech: "HTML | CSS",
      title: "CSS Experiments",
      desc: "Collection of creative CSS projects.",
    },
    {
      tech: "Lua | NeoVim",
      title: "Nvim Config",
      desc: "Custom NeoVim configuration for developers.",
    },
  ];

  return (
    <section className="bg-[#1f242d] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 min-h-screen">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
        <span className="text-[#C778DD]">/</span> projects
      </h2>

      <p className="text-gray-400 mb-10 text-sm sm:text-base">
        List of my projects
      </p>

      {/* Complete Apps */}
      <h3 className="text-xl sm:text-2xl mb-6">
        <span className="text-[#C778DD]">#</span>complete-apps
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
        {projects.map((item, i) => (
          <div
            key={i}
            className="border border-gray-700 bg-[#282C33] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(199,120,221,0.4)]"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-[16/10] border-b border-gray-700">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tech Stack */}
            <div className="border-b border-gray-700 px-4 py-2 text-xs text-gray-400">
              {item.tech}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col">
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                {item.desc}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit border border-[#C778DD] px-4 py-2 text-sm hover:bg-[#473a54] transition-colors"
              >
                {item.btn1}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Small Projects */}
      <h3 className="text-xl sm:text-2xl mb-6">
        <span className="text-[#C778DD]">#</span>small-projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {smallProjects.map((item, i) => (
          <div
            key={i}
            className="border border-gray-700 bg-[#282C33] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(199,120,221,0.3)]"
          >
            <div className="border-b border-gray-700 px-4 py-2 text-xs text-gray-400">
              {item.tech}
            </div>

            <div className="p-5">
              <h4 className="text-base font-semibold mb-2">{item.title}</h4>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {item.desc}
              </p>

              <button className="border border-[#C778DD] px-4 py-2 text-sm hover:bg-[#473a54] transition-colors">
                Live ↔
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
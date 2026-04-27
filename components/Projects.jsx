"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "ChertNodes",
      desc: "Minecraft servers hosting",
      tech: "HTML SCSS Python Flask",
      image: "/project-1.png",
      btn1: "Live ↔",
      btn2: "Cached >",
    },
    {
      title: "ProtectX",
      desc: "Discord anti-crash bot",
      tech: "React Express Discord.js Node.js",
      image: "/project-2.png",
      btn1: "Live ↔",
      btn2: "",
    },
    {
      title: "Kahoot Answers Viewer",
      desc: "Get answers to your kahoot quiz",
      tech: "CSS Express Node.js",
      image: "/project-3.png",
      btn1: "Live ↔",
      btn2: "",
    },
  ];

  return (
    <section className="bg-[#1f242d] text-white px-6 md:px-20 py-20">
      {/* Heading */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4 flex-1 min-w-0">
  <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
    <span className="text-[#C778DD]">#</span>projects
  </h2>

  <div className="h-[1.3px] bg-[#C778DD] flex-1 max-w-50 sm:max-w-87.5 md:max-w-92.5 lg:max-w-145 xl:max-w-155"></div>
</div>
        <a
          href="#"
          className="hidden md:block text-sm text-gray-300 hover:text-white"
        >
          View all ~~&gt;
        </a>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="border border-gray-500 bg-[#282C33] hover:-translate-y-1 transition"
          >
            {/* Image */}
            <div className="relative w-full h-44 border-b border-gray-500">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tech */}
            <div className="border-b border-gray-500 px-4 py-2 text-gray-400 text-sm">
              {item.tech}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-400 mb-5 text-sm">{item.desc}</p>

              <div className="flex gap-3 flex-wrap">
                <button className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] transition">
                  {item.btn1}
                </button>

                {item.btn2 && (
                  <button className="border border-gray-500 px-4 py-2 hover:border-white transition">
                    {item.btn2}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="mt-8 md:hidden text-center">
        <a href="#" className="text-sm text-gray-300 hover:text-white">
          View all ~~&gt;
        </a>
      </div>
    </section>
  );
}
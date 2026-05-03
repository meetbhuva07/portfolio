import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";


const page = () => {
  // project data
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

  // skills data
  const skillData = [
    {
      title: "Languages",
      items: ["Python ,", "JavaScript . . . ."],
    },
    {
      title: "Databases",
      items: ["SQLite ,", "Mongo DB . . . ."],
    },
    {
      title: "Tools",
      items: [
        "VSCode ,",
        "Git ,",
        "Github ,",
        "Figma ,",
        "Google Stitch . . . .",
      ],
    },
    {
      title: "Other",
      items: ["HTML ,", "CSS . . . ."],
    },
    {
      title: "Frameworks",
      items: [
        "React.js ,",
        "Node.js ,",
        "Next.js ,",
        "Bootstrap ,",
        "Tailwind CSS . . . . ",
      ],
    },
  ];
  return (
    <div>
      {/* Hero Section */}

      <section className="bg-[#1f242d] text-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-12 md:py-10 relative gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Meet is a{" "}
            <span className="text-[#C778DD]">front-end developer</span>
          </h1>

          <p className="text-gray-400 mt-6 text-sm sm:text-base md:text-lg">
            He crafts responsive websites where technologies meet creativity
          </p>

         <button className="mt-6 border border-[#C778DD] px-5 py-2 hover:bg-[#473a54] transition">
  <Link href="/contact">Contact me !!</Link>
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

      {/* Projects Section  */}
      <section className="bg-[#1f242d] text-white px-6 md:px-20 py-20">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
              <span className="text-[#C778DD]">#</span>projects
            </h2>

            <div className="h-[1.3px] bg-[#C778DD] flex-1 max-w-50 sm:max-w-87.5 md:max-w-92.5 lg:max-w-145 xl:max-w-155"></div>
          </div>
          <Link
            href="/works"
            className="hidden md:block text-sm text-gray-300 hover:text-white"
          >
            View all ~~&gt;
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="border border-gray-500 bg-[#282C33] hover:-translate-y-1 transition  hover:shadow-[0_0_6px_#C778DD]"
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
                  <button className="border border-[#C778DD] px-4 py-2 hover:bg-[#473a54] transition">
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
          <Link href="/works" className="text-sm text-gray-300 hover:text-white">
            View all ~~&gt;
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#1f242d] text-white px-6 md:px-20 py-20">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-3xl font-bold whitespace-nowrap">
            <span className="text-[#C778DD]">#</span>skills
          </h2>

          <div className="h-[1.3px] bg-[#C778DD] flex-1 max-w-50 sm:max-w-87.5 md:max-w-92.5 lg:max-w-145 xl:max-w-155"></div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Design Side */}
          <div className="relative h-80 hidden md:block">
            {/* Dot Grid Top */}
            <div className="absolute top-0 left-6 grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, i) => (
                <span
                  key={i}
                  className="w-0.75 h-0.75 rounded-full bg-gray-400"
                ></span>
              ))}
            </div>

            {/* Purple Squares */}
            <div className="absolute bottom-10 left-10 border border-[#C778DD] w-16 h-16"></div>
            <div className="absolute bottom-16 left-16 border border-[#C778DD] w-16 h-16"></div>

            {/* Gray Box */}
            <div className="absolute top-0 left-1/2 border border-white w-16 h-16"></div>

            {/* Dot Grid Center */}
            <div className="absolute top-28 left-1/3 grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, i) => (
                <span
                  key={i}
                  className="w-0.75 h-0.75 rounded-full bg-gray-400"
                ></span>
              ))}
            </div>

            {/* Small Gray Box */}
            <div className="absolute bottom-20 right-10 border border-gray-400 w-10 h-10"></div>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillData.map((skill, index) => (
              <div key={index} className="border border-white  text-gray-300">
                <div className="border-b border-white px-3 py-2 text-white font-semibold">
                  {skill.title}
                </div>

                <div className="px-3 py-3 text-sm leading-7 flex flex-wrap gap-x-2">
                  {skill.items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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
          <div className="relative order-2 md:order-1 text-justify md:text-justify max-w-xl">
            {/* Left Gray Box */}
            <div className="hidden lg:block absolute -left-24 top-14 w-14 h-28 border border-gray-500"></div>

            <p className="text-gray-400 text-sm sm:text-base leading-8 mb-8">
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
            <button className="border border-[#C778DD] px-5 py-3 hover:bg-[#473a54] transition">
              <Link href="/aboutpage"> Read more →</Link>
              
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section  */}
      <section className=" bg-[#1f242d]   text-gray-300 py-20 px-6 md:px-16 relative">
        {/* Dotted Design */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* LEFT SIDE */}
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold mb-4">
              <span className="text-purple-400">#</span>contacts
              <span className="inline-block ml-4 w-24 h-[1.5px] bg-purple-400 align-middle"></span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="border border-gray-400 p-5 w-full max-w-xs rounded-lg lg:mr-20">
            <h3 className="mb-4 font-bold text-white">  
              Message me here :
            </h3>

            {/* LinkedIn */}
            <div className="flex pl-5.5  mb-3">
              <a
                href="https://www.linkedin.com/in/meet-bhuva-4b1220329?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="flex   gap-2 text-sm hover:text-purple-400 transition"
              >
                <FaLinkedinIn size={22}  />
                <span>meet-bhuva</span>
              </a>
            </div>

            {/* Email */}
            <div className="flex justify-center">
              <a
                href="mailto:meetbhuva0009@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
              >
                <Mail size={22} />
                <span>meetbhuva0009@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;


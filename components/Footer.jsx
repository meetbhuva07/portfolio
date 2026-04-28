import {
  FaGithub,
  FaFigma,
  FaDiscord,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f242d]  text-gray-400 px-6 md:px-16 py-10">
      {/* Top Border Line */}
      <div className="border-t border-gray-600 mb-8"></div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6 text-center md:text-left pt-10">
        {/* LEFT SIDE */}
        <div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-white font-semibold">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-semibold">
              <span className="text-purple-400 text-lg">▣</span>
              <span>Meet Bhuva</span>
            </div>
            <span className="text-gray-500 font-normal">
              meet.bhuva@gmail.com
            </span>
          </div>

          <p className="text-xl text-white mt-2">front-end developer</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-auto mt-15 md:mt-0">
          <h3 className="text-white pb-4 text-center">Media</h3>

          <div className="flex justify-center gap-4 text-gray-300">
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

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center text-sm mt-10 text-gray-500">
        © Copyright 2026. Made by Meet Bhuva
      </div>
    </footer>
  );
}

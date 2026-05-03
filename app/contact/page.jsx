import { Mail } from "lucide-react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <section className="bg-[#1f242d] text-gray-300 py-20 px-6 md:px-16 relative overflow-hidden">
        {/* ✅ Dotted Design (Hidden on Mobile) */}
        <div className="hidden sm:grid absolute left-3 top-1/2 -translate-y-1/2 grid-cols-3 gap-2 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* LEFT SIDE */}
          <div className="max-w-md  md:text-left">
            <h2 className="text-2xl sm:text-4xl font-semibold mt-10 mb-3">
              <span className="text-[#C778DD]">/ </span>contacts
            </h2>

            {/* Single line on mobile */}
            <p className="text-gray-400 mt-7 mb-6 text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal">
              Who am I ??
            </p>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="border border-gray-400 p-5 w-full max-w-xs rounded-lg lg:mr-20">
            <h3 className="mb-4 font-bold text-white">Message me here :</h3>

            {/* LinkedIn */}
            <div className="flex pl-5.5  mb-3">
              <a
                href="https://www.linkedin.com/in/meet-bhuva-4b1220329?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="flex   gap-2 text-sm hover:text-purple-400 transition"
              >
                <FaLinkedinIn size={22} />
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

export default ContactPage;

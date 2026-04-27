import { Mail, MailCheckIcon, MessageCircle } from "lucide-react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className=" bg-[#1f242d] text-gray-300 py-20 px-6 md:px-16 relative">
      
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
            I’m interested in freelance opportunities. However, if you have other
            request or question, don’t hesitate to contact me
          </p>
        </div>

        {/* RIGHT SIDE CARD */}
    <div className="border border-gray-400 p-5 w-full max-w-xs rounded-lg lg:mr-20">
  
  <h3 className="mb-4 font-bold text-white text-center">
    Message me here
  </h3>

  {/* LinkedIn */}
  <div className="flex justify-center mb-3">
    <a
      href="#"
      className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
    >
      <FaLinkedinIn size={22} />
      <span>meet-bhuva</span>
    </a>
  </div>

  {/* Email */}
  <div className="flex justify-center">
    <a
      href="mailto:xyz@gmail.com"
      className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
    >
      <Mail size={22} />
      <span>xyz@gmail.com</span>
    </a>
  </div>

</div>
      </div>
    </section>
  );
}
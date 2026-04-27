"use client";

export default function Skills() {
  const skillData = [
    {
      title: "Languages",
      items: [ "Python ,", "JavaScript . . . ."],
    },
    {
      title: "Databases",
      items: ["SQLite ," , "Mongo DB . . . ."],
    },
    {
      title: "Tools",
      items: ["VSCode ,", "Git ,", "Github ,", "Figma ,", "Google Stitch . . . ."],
    },
    {
      title: "Other",
      items: ["HTML ,", "CSS . . . ."],
    },
    {
      title: "Frameworks",
      items: ["React.js ,", "Node.js ,", "Next.js ,","Bootstrap ," ,"Tailwind CSS . . . . "],
    },
  ];

  return (
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
            <div
              key={index}
              className="border border-white  text-gray-300"
            >
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
  );
}
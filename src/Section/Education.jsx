import React from "react";
import Lottie from "lottie-react";
import educationAnimation from "../assets/education.json";

const educationData = [
  {
    title: "B.E. Computer Science & Engineering",
    institute: "IET, Dr. B.R. Ambedkar University, Agra",
    duration: "2021 – 2025",
    score: "CGPA: 6.5 / 10.0",
  },
  {
    title: "Web Development",
    institute: "Internshala Training - 2025",
    description: "Worked on MERN Stack projects",
    score: "84% Score",
  },
  {
    title: "Full Stack Internship",
    institute: "Edureka - 2024",
    description: "Worked on MERN Stack projects",
    score: "Web Development Training",
  },
  {
    title: "Intermediate (CBSE)",
    institute: "Dinapur Public School",
    duration: "2019 – 2021",
    score: "Percentage: 61%",
  },
  {
    title: "High School (CBSE)",
    institute: "Chandani Public School",
    duration: "2017 – 2019",
    score: "Percentage: 91%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-wrap items-center justify-center gap-12 px-[10%] py-20 text-white relative overflow-hidden md:flex-nowrap md:gap-12"
    >
      {/* Animation */}
      <div className="flex flex-1 items-center justify-center z-10 mb-10 md:mb-0">
        <Lottie
          animationData={educationAnimation}
          loop
          className="w-[450px] max-w-full drop-shadow-[0_0_15px_#00e0ff] will-change-transform"
        />
      </div>

      {/* Education Cards */}
      <div className="flex-1 z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold mb-10 pl-4 border-l-[6px] border-white-400 drop-shadow-[0_0_15px_#00e0ff]">
          My Education
        </h1>

        <div className="space-y-8 mt-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl border border-[rgba(0,224,255,0.2)] shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]"
            >
              <h2 className="text-xl font-semibold mb-2 text-[#ff4fff] drop-shadow-[0_0_8px_#ff4fff]">
                {edu.title}
              </h2>
              <p className="text-gray-300">{edu.institute}</p>
              {edu.duration && (
                <span className="block mt-1 text-[0.95rem] font-semibold text-[#00ff90]">
                  {edu.duration}
                </span>
              )}
              {edu.description && (
                <p className="text-gray-300">{edu.description}</p>
              )}
              <p className="font-semibold text-[#00ff90] drop-shadow-[0_0_6px_#00ff90]">
                {edu.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

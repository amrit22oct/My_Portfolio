import React from "react";
import Lottie from "lottie-react";
import educationAnimation from "../assets/education.json";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-wrap items-center justify-center gap-12 px-[10%] py-20 text-white relative overflow-hidden md:flex-nowrap md:gap-12"
    >
      {/* Left Side - Animation */}
      <div className="flex flex-1 items-center justify-center z-10 mb-10 md:mb-0">
        <Lottie
          animationData={educationAnimation}
          loop={true}
          className="w-[450px] max-w-full drop-shadow-[0_0_15px_#00e0ff]"
        />
      </div>

      {/* Right Side - Education Details */}
      <div className="flex-1 z-10">
      <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold mb-10 pl-4 border-l-[6px] border-white-400 text-left drop-shadow-[0_0_15px_#00e0ff]">
  My Education
</h1>


        {/* Education Cards */}
        <div className="space-y-8 mt-6">
          <div className="bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl border border-[rgba(0,224,255,0.2)] shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]">
            <h2 className="text-xl font-semibold mb-2 text-[#ff4fff] drop-shadow-[0_0_8px_#ff4fff]">
              B.E. Computer Science & Engineering
            </h2>
            <p className="text-gray-300">IET, Dr. B.R. Ambedkar University, Agra</p>
            <span className="block mt-1 text-[0.95rem] font-semibold text-[#00ff90]">
              2021 – 2025
            </span>
            <p className="font-semibold text-[#00ff90] drop-shadow-[0_0_6px_#00ff90]">
              CGPA: 6.5 / 10.0
            </p>
          </div>

          <div className="bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl border border-[rgba(0,224,255,0.2)] shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]">
            <h2 className="text-xl font-semibold mb-2 text-[#ff4fff] drop-shadow-[0_0_8px_#ff4fff]">
              Web Development
            </h2>
            <p className="text-gray-300">Internshala Training - 2025</p>
            <p className="text-gray-300">Worked on MERN Stack projects</p>
            <span className="block mt-1 text-[0.95rem] font-semibold text-[#00ff90]">
              <b>84% Score</b>
            </span>
          </div>

          <div className="bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl border border-[rgba(0,224,255,0.2)] shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]">
            <h2 className="text-xl font-semibold mb-2 text-[#ff4fff] drop-shadow-[0_0_8px_#ff4fff]">
              Full Stack Internship
            </h2>
            <p className="text-gray-300">Edureka - 2024</p>
            <p className="text-gray-300">Worked on MERN Stack projects</p>
            <span className="block mt-1 text-[0.95rem] font-semibold text-[#00ff90]">
              Web Development Training
            </span>
          </div>

          <div className="bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl border border-[rgba(0,224,255,0.2)] shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]">
            <h2 className="text-xl font-semibold mb-2 text-[#ff4fff] drop-shadow-[0_0_8px_#ff4fff]">
              Intermediate (CBSE)
            </h2>
            <p className="text-gray-300">Dinapur Public School</p>
            <span className="block mt-1 text-[0.95rem] font-semibold text-[#00ff90]">
              2019 – 2021
            </span>
            <p className="font-semibold text-[#00ff90] drop-shadow-[0_0_6px_#00ff90]">
              Percentage: 61%
            </p>
          </div>

          <div className="bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl border border-[rgba(0,224,255,0.2)] shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]">
            <h2 className="text-xl font-semibold mb-2 text-[#ff4fff] drop-shadow-[0_0_8px_#ff4fff]">
              High School (CBSE)
            </h2>
            <p className="text-gray-300">Chandani Public School</p>
            <span className="block mt-1 text-[0.95rem] font-semibold text-[#00ff90]">
              2017 – 2019
            </span>
            <p className="font-semibold text-[#00ff90] drop-shadow-[0_0_6px_#00ff90]">
              Percentage: 91%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

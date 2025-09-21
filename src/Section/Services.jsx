import React from "react";
import { FaLaptopCode, FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaLaptopCode />, title: "Full Stack Development", description: "Designing and developing complete web applications from frontend to backend." },
  { icon: <FaReact />, title: "MERN Stack", description: "Building scalable web applications using MongoDB, Express, React, and Node.js." },
  { icon: <FaLaptopCode />, title: "Frontend Development", description: "Creating responsive and interactive UI with HTML, CSS, Tailwind, and React.js." },
  { icon: <FaNodeJs />, title: "Backend Development", description: "Developing REST APIs and server-side applications using Node.js and Express." },
  { icon: <FaServer />, title: "API Integration", description: "Connecting frontend with backend services and external APIs efficiently." },
  { icon: <FaDatabase />, title: "Database Management", description: "Managing data with MongoDB for robust and scalable applications." },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-[8%] py-[70px] text-white text-center"
    >
      <h1 className="text-[2.8rem] font-bold mb-12 pl-[18px] inline-block border-l-[6px] border-white-400 drop-shadow-[0_0_15px_#00e0ff] text-left md:text-[2.4rem] sm:text-[2rem] sm:mb-10">
        My Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] justify-items-center mt-20 items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group bg-[rgba(20,20,20,0.9)] p-[35px_25px] rounded-[18px] border border-[rgba(0,224,255,0.25)] shadow-[0_0_15px_rgba(0,224,255,0.1)] text-center transition-transform duration-300 will-change-transform hover:-translate-y-2 hover:scale-105 hover:border-[#ff4fff] hover:shadow-[0_0_25px_#ff4fff,0_0_50px_rgba(255,79,255,0.6)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="text-[3.2rem] text-[#00ff90] mb-[18px] flex justify-center items-center transition-all duration-300 will-change-transform group-hover:text-[#00e0ff] group-hover:drop-shadow-[0_0_18px_#00e0ff,0_0_35px_rgba(0,224,255,0.6)]">
              {service.icon}
            </div>

            <h2 className="text-[1.4rem] font-semibold mb-[12px] text-[#ff4fff] drop-shadow-[0_0_10px_rgba(255,79,255,0.5)]">
              {service.title}
            </h2>

            <p className="text-[1rem] leading-[1.6] text-[#d4d4d4]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

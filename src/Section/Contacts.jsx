import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contactsInfo = [
  { icon: <FaEnvelope />, label: "Email", value: "amritrai22oct@gmail.com", link: "mailto:amritrai22oct@gmail.com", color: "#00ff90" },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/amrit22oct", link: "https://github.com/amrit22oct", color: "#ff4fff" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/amrit-rai9335014143/", link: "https://www.linkedin.com/in/amrit-rai9335014143/", color: "#00d4ff" },
];

const socialLinks = [
  { icon: <FaInstagram />, link: "https://www.instagram.com/_its_amrit._/", color: "#ff007f" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100023164340028", color: "#1877f2" },
  { icon: <SiLeetcode />, link: "https://leetcode.com/u/amrit22oct/", color: "#f79f1f" },
];

const Contacts = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-16 text-white overflow-hidden"
    >
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic mb-12 pl-4 border-l-[6px] border-white drop-shadow-[0_0_15px_#00e0ff] text-center sm:text-left">
        Let's Connect
      </h1>

      {/* Container */}
      <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full mt-8 max-w-[1200px] justify-center items-stretch">
        {/* Left: Professional Summary & Info */}
        <div className="flex-1 w-full max-w-[500px] min-h-[500px] bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl shadow-[0_0_15px_rgba(0,224,255,0.4)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,224,255,0.7)] flex flex-col justify-between">
          <div>
            <h2 className="text-pink-500 mb-4 drop-shadow-[0_0_5px_#ff4fff,0_0_15px_#ff4fff] text-lg sm:text-xl italic">
              Professional Summary
            </h2>
            <p className="text-[#d4d4d4] mb-6 leading-relaxed text-sm sm:text-base italic">
              Full Stack Developer skilled in the MERN stack. I craft modern, interactive, and intuitive applications that solve real-world problems. Passionate about clean code, continuous learning, and building impactful digital solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 mt-4">
            {contactsInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {React.cloneElement(item.icon, {
                  className: `text-2xl drop-shadow-[0_0_5px_${item.color},0_0_10px_${item.color}]`,
                  style: { color: item.color },
                })}
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{item.label}</h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition text-sm sm:text-base break-all"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                {React.cloneElement(item.icon, {
                  className: "text-2xl sm:text-[1.6rem] cursor-pointer transition-transform duration-300 hover:scale-125",
                  style: { color: item.color, filter: `drop-shadow(0 0 5px ${item.color})` },
                })}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 w-full max-w-[500px] min-h-[500px] bg-[rgba(20,20,20,0.9)] p-6 rounded-2xl shadow-[0_0_15px_rgba(255,0,255,0.4)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,0,255,0.7)] flex flex-col justify-between mt-8 md:mt-0">
          <div>
            <h2 className="text-[#00ff90] mb-4 drop-shadow-[0_0_5px_#00ff90,0_0_15px_#00ff90] text-lg sm:text-xl italic">
              Send Me a Message
            </h2>
            <p className="text-[#d4d4d4] italic text-center sm:text-left leading-relaxed mb-4 text-sm sm:text-base">
              Have questions or work opportunities? Feel free to reach out!
            </p>
          </div>

          <form
            action="https://formspree.io/f/mblaqowe"
            method="POST"
            className="flex flex-col gap-3"
          >
            {[
              { label: "Name", type: "text", name: "name", placeholder: "Your Name" },
              { label: "Email", type: "email", name: "email", placeholder: "Your Email" },
            ].map((field, idx) => (
              <div key={idx}>
                <h4 className="text-cyan-400 text-sm font-semibold">{field.label}</h4>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  className="bg-[rgba(15,15,15,0.8)] border border-[rgba(255,255,255,0.2)] text-white px-4 py-2 rounded-lg text-sm sm:text-base transition duration-300 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_#00e0ff,0_0_12px_#00e0ff] w-full"
                />
              </div>
            ))}
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold">Message</h4>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="bg-[rgba(15,15,15,0.8)] border border-[rgba(255,255,255,0.2)] text-white px-4 py-2 rounded-lg text-sm sm:text-base transition duration-300 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_#00e0ff,0_0_12px_#00e0ff] w-full min-h-[150px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-pink-500 border-none px-4 py-2 rounded-lg text-white font-semibold text-base cursor-pointer mt-2 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00e0ff,0_0_25px_#ff4fff]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

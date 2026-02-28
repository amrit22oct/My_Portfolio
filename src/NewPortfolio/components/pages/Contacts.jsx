import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("amritrai22oct@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen  py-24 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Improved Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft Gradient Glow */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full"></div> */}

      <div className=" min-w-[850px] w-full grid grid-cols-1 p-40 md:grid-cols-3 gap-6 relative z-10  ">

        {/* HERO CARD */}
        <div className="md:col-span-2 bg-[#0b0b0b] border border-white/5 rounded-3xl p-10 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-500 group">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-white tracking-widest uppercase">
                System Online
              </span>
            </div>

            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6"
          >
            Let’s Build<br /> <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> Something Powerful</span>
          </motion.h2>

            {/* <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Let’s Build <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Something Powerful
              </span>
            </h2> */}
          </div>

          <p className="text-white mt-10 max-w-md text-lg font-light leading-relaxed">
            Transforming ideas into scalable full-stack experiences. 
            If you're serious about building something impactful — let's talk.
          </p>
        </div>

        {/* SOCIAL CARD */}
        <div className=" border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500 bg-[#0b0b0b]">

          {/* <h3 className="text-white font-bold text-xl mb-6 italic">
            Connect
          </h3> */}
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6"
          >
     Let's<span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> Connect</span>
          </motion.h2>

          <div className="w-full ">
           <div className = "w-full p-2 pt-4 h-full flex flex-col gap-3 ">
           {[
              { icon: <FaGithub />, name: "GitHub", link: "https://github.com/amrit22oct" },
              { icon: <FaLinkedin />, name: "LinkedIn", link: "https://linkedin.com/in/amrit-rai9335014143/" },
              { icon: <SiLeetcode />, name: "LeetCode", link: "https://leetcode.com/u/amrit22oct/" }
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-gray-400  hover:text-white transition-all group/link"
              >
                <span className="flex items-center gap-3 text-lg text-[#00e0ff] group-hover/link:text-[#00ffd9]  ">
                  {soc.icon} {soc.name}
                </span>
                <FaArrowRight className="text-xs -rotate-45 text-[#00e0ff] group-hover/link:rotate-0 group-hover/link:text-[#00ffd9] transition-transform duration-300"/>
              </a>
            ))}
           </div>
          </div>

          {/* Glow Accent */}
          {/* <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-pink-500/20 blur-[80px] rounded-full group-hover:bg-pink-500/40 transition-all duration-500"></div> */}
        </div>

        {/* EMAIL COPY CARD */}
        <div
          onClick={handleCopy}
          className="bg-[#0b0b0b] border border-white/5 rounded-3xl p-8 flex items-center justify-center hover:bg-[#101010] hover:border-cyan-500/30 transition-all cursor-pointer relative"
        >
          <div className="text-center">
            <p className="text-gray-500 text-xs uppercase font-mono tracking-widest mb-2">
              Tap to Copy Email
            </p>
            <span className="text-white font-medium text-lg border-b border-dashed border-gray-700 hover:border-cyan-400 transition-colors">
              amritrai22oct@gmail.com
            </span>
          </div>

          {copied && (
            <div className="absolute -top-4 bg-cyan-500 text-black text-xs px-3 py-1 rounded-full">
              Copied ✓
            </div>
          )}
        </div>

        {/* TERMINAL FORM */}
        <div className="md:col-span-2 bg-[#0b0b0b] border border-white/5 rounded-3xl p-10 relative overflow-hidden hover:border-cyan-500/20 transition-all duration-500">

          <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>
            </div>
            <span className="text-[15px] font-mono text-white ml-2">
              MESSAGE_TERMINAL_v2.1
            </span>
          </div>

          <form action="https://formspree.io/f/mblaqowe" method="POST" className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="user_name"
                required
                className="bg-transparent border-b border-white/50 px-2 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder:text-white/50 w-full transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="user_email"
                required
                className="bg-transparent border-b border-white/50 px-2 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder:text-white/50 w-full transition-all"
              />
            </div>

            <textarea
              name="message"
              placeholder="write_message_here..."
              required
              rows="4"
              className="bg-transparent border-b border-white/50 px-2 py-3 text-white focus:outline-none focus:border-pink-500 font-mono text-sm placeholder:text-white/50 w-full transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="flex items-center gap-4 text-white group"
            >
              <span className="h-[1px] w-10 bg-white/20 group-hover:w-20 group-hover:bg-cyan-500 transition-all duration-500"></span>
              <span className="font-mono text-xs tracking-[0.4em] uppercase m-1  group-hover:text-cyan-400 transition-colors">
                Execute Send
              </span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
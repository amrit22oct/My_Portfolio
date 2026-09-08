// import React, { useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// const Contacts = () => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("amritrai22oct@gmail.com");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <section
//       id="contact"
//       className="relative w-full min-h-screen  py-24 px-6 flex items-center justify-center overflow-hidden"
//     >
//       {/* Improved Background Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.07]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Soft Gradient Glow */}
//       {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full"></div> */}

//       <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6  md:p-40 relative z-10">

// {/* HERO CARD */}
// <div className="md:col-span-2 bg-[#0b0b0b] border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-500 group">
//   <div>
//     <div className="flex items-center gap-2 mb-4 md:mb-6">
//       <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
//       <span className="text-xs md:text-xs font-mono text-white tracking-widest uppercase">
//         System Online
//       </span>
//     </div>

//     <motion.h2
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="text-3xl md:text-4xl lg:text-6xl font-black uppercase italic tracking-tighter text-white mb-4 md:mb-6"
//     >
//       Let’s Build<br /> 
//       <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> Something Powerful</span>
//     </motion.h2>
//   </div>

//   <p className="text-white mt-6 md:mt-10 max-w-full md:max-w-md text-base md:text-lg font-light leading-relaxed">
//     Transforming ideas into scalable full-stack experiences. 
//     If you're serious about building something impactful — let's talk.
//   </p>
// </div>

// {/* SOCIAL CARD */}
// <div className="bg-[#0b0b0b] border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500">
//   <motion.h2
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     className="text-3xl md:text-4xl lg:text-6xl font-black uppercase italic tracking-tighter text-white mb-4 md:mb-6"
//   >
//     Let's<span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> Connect</span>
//   </motion.h2>

//   <div className="w-full">
//     <div className="w-full p-2 pt-4 flex flex-col gap-2 md:gap-3 h-full">
//       {[
//         { icon: <FaGithub />, name: "GitHub", link: "https://github.com/amrit22oct" },
//         { icon: <FaLinkedin />, name: "LinkedIn", link: "https://linkedin.com/in/amrit-rai9335014143/" },
//         { icon: <SiLeetcode />, name: "LeetCode", link: "https://leetcode.com/u/amrit22oct/" }
//       ].map((soc, i) => (
//         <a
//           key={i}
//           href={soc.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-between text-gray-400 hover:text-white transition-all group/link"
//         >
//           <span className="flex items-center gap-2 md:gap-3 text-lg text-[#00e0ff] group-hover/link:text-[#00ffd9]">
//             {soc.icon} {soc.name}
//           </span>
//           <FaArrowRight className="text-xs -rotate-45 text-[#00e0ff] group-hover/link:rotate-0 group-hover/link:text-[#00ffd9] transition-transform duration-300"/>
//         </a>
//       ))}
//     </div>
//   </div>
// </div>

// {/* EMAIL COPY CARD */}
// <div
//   onClick={handleCopy}
//   className="bg-[#0b0b0b] border border-white/5 rounded-3xl p-6 md:p-8 flex items-center justify-center hover:bg-[#101010] hover:border-cyan-500/30 transition-all cursor-pointer relative"
// >
//   <div className="text-center">
//     <p className="text-gray-500 text-[9px] md:text-xs uppercase font-mono tracking-widest mb-1 md:mb-2">
//       Tap to Copy Email
//     </p>
//     <span className="text-white font-medium text-sm md:text-lg border-b border-dashed border-gray-700 hover:border-cyan-400 transition-colors">
//       amritrai22oct@gmail.com
//     </span>
//   </div>

//   {copied && (
//     <div className="absolute -top-4 bg-cyan-500 text-black text-xs px-3 py-1 rounded-full">
//       Copied ✓
//     </div>
//   )}
// </div>

// {/* TERMINAL FORM */}
// <div className="md:col-span-2 bg-[#0b0b0b] border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden hover:border-cyan-500/20 transition-all duration-500">
//   <div className="flex items-center gap-2 mb-4 md:mb-8 border-b border-white/5 pb-2 md:pb-4">
//     <div className="flex gap-1.5">
//       <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
//       <div className="w-2.5 h-2.5 rounded-full bg-yellow-300"></div>
//       <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>
//     </div>
//     <span className="text-[13px] md:text-[15px] font-mono text-white ml-2">
//       MESSAGE_TERMINAL_v2.1
//     </span>
//   </div>

//   <form action="https://formspree.io/f/mblaqowe" method="POST" className="space-y-4 md:space-y-6">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//       <input
//         type="text"
//         name="name"
//         placeholder="user_name"
//         required
//         className="bg-transparent border-b border-white/50 px-2 py-2 md:py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder:text-white/50 w-full transition-all"
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="user_email"
//         required
//         className="bg-transparent border-b border-white/50 px-2 py-2 md:py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder:text-white/50 w-full transition-all"
//       />
//     </div>

//     <textarea
//       name="message"
//       placeholder="write_message_here..."
//       required
//       rows="4"
//       className="bg-transparent border-b border-white/50 px-2 py-2 md:py-3 text-white focus:outline-none focus:border-pink-500 font-mono text-sm placeholder:text-white/50 w-full transition-all resize-none"
//     ></textarea>

//     <button
//       type="submit"
//       className="flex items-center gap-3 md:gap-4 text-white group"
//     >
//       <span className="h-[1px] w-6 md:w-10 bg-white/20 group-hover:w-20 group-hover:bg-cyan-500 transition-all duration-500"></span>
//       <span className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase m-1 group-hover:text-cyan-400 transition-colors">
//         Execute Send
//       </span>
//     </button>
//   </form>
// </div>
// </div>
//     </section>
//   );
// };

// export default Contacts;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
  FaCopy,
  FaCheck,
  FaTerminal,
  FaPaperPlane,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const email = "amritrai22oct@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const socials = [
    {
      name: "GitHub",
      username: "@amrit22oct",
      href: "https://github.com/amrit22oct",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      username: "/in/amrit-rai",
      href: "https://linkedin.com/in/amrit-rai9335014143/",
      icon: <FaLinkedin />,
    },
    {
      name: "LeetCode",
      username: "@amrit22oct",
      href: "https://leetcode.com/u/amrit22oct/",
      icon: <SiLeetcode />,
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        px-6
        py-28
        md:px-[8%]
        lg:px-[10%]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main glow */}

        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.035]
            blur-[150px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-0
            right-[-10%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-emerald-500/[0.025]
            blur-[130px]
          "
        />

        {/* Very subtle lines */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              border
              border-cyan-400/20
              bg-cyan-400/[0.05]
              text-cyan-400
            "
          >
            <FaTerminal className="text-xs" />
          </div>

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-cyan-400/70
            "
          >
            ~/contact/connect
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-5xl
            font-black
            uppercase
            leading-[0.9]
            tracking-[-0.06em]
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Let's Build
          <br />

          <span
            className="
              bg-gradient-to-r
              from-white
              via-cyan-100
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            Something
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            mt-7
            max-w-2xl
            text-sm
            leading-7
            text-zinc-500
            md:text-base
          "
        >
          Have an idea, a project, or an opportunity worth discussing?
          Send a message and let's turn the concept into something
          meaningful.
        </motion.p>
      </div>

      {/* =====================================================
          MAIN CONTACT LAYOUT
      ====================================================== */}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

        {/* =================================================
            LEFT SIDE
        ================================================== */}

        <div className="flex flex-col gap-5 lg:col-span-4">

          {/* Availability */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-[#070a0a]/80
              p-7
              backdrop-blur-xl
            "
          >
            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-emerald-400/60
                to-transparent
              "
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-400
                    "
                  />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">
                  Available
                </span>
              </div>

              <span className="font-mono text-[8px] text-zinc-700">
                STATUS_200
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
              Open to opportunities.
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              I'm always interested in interesting products,
              challenging engineering problems and meaningful
              collaborations.
            </p>

            <div className="mt-7 flex items-center gap-3 font-mono text-[9px] text-zinc-600">
              <span className="text-emerald-400/60">
                ●
              </span>

              accepting_messages=true
            </div>
          </motion.div>

          {/* Socials */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-[#070a0a]/80
              p-7
              backdrop-blur-xl
            "
          >
            <div className="mb-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/60">
                01 // networks
              </span>

              <h3 className="mt-2 text-xl font-bold text-white">
                Find me online
              </h3>
            </div>

            <div className="space-y-2">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-3
                    transition-all
                    duration-300
                    hover:border-white/[0.07]
                    hover:bg-white/[0.025]
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/[0.06]
                        bg-black/30
                        text-sm
                        text-zinc-400
                        transition-colors
                        duration-300
                        group-hover:border-cyan-400/20
                        group-hover:text-cyan-400
                      "
                    >
                      {social.icon}
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-zinc-300">
                        {social.name}
                      </p>

                      <p className="mt-0.5 font-mono text-[8px] text-zinc-600">
                        {social.username}
                      </p>
                    </div>
                  </div>

                  <FaArrowUpRightFromSquare
                    className="
                      text-[9px]
                      text-zinc-700
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-cyan-400
                    "
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Email */}

          <motion.button
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={handleCopy}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-[#070a0a]/80
              p-6
              text-left
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/20
              hover:bg-cyan-400/[0.025]
            "
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                02 // email
              </span>

              {copied ? (
                <FaCheck className="text-xs text-emerald-400" />
              ) : (
                <FaCopy className="text-xs text-zinc-700 transition-colors group-hover:text-cyan-400" />
              )}
            </div>

            <p className="mt-4 break-all text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
              {email}
            </p>

            <p className="mt-2 font-mono text-[8px] text-zinc-600">
              {copied ? "email_copied ✓" : "click_to_copy"}
            </p>
          </motion.button>
        </div>

        {/* =================================================
            RIGHT SIDE — MESSAGE TERMINAL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#070a0a]/90
            backdrop-blur-xl
            lg:col-span-8
          "
        >
          {/* Terminal top glow */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400/60
              to-transparent
            "
          />

          {/* Terminal Header */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/[0.06]
              px-6
              py-4
              md:px-8
            "
          >
            <div className="flex items-center gap-3">
              {/* Window controls */}

              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                contact_terminal
              </span>
            </div>

            <span className="hidden font-mono text-[8px] text-zinc-700 sm:block">
              bash — 80x24
            </span>
          </div>

          {/* Terminal Body */}

          <div className="p-6 md:p-8 lg:p-10">

            {/* Command */}

            <div className="mb-8 font-mono text-[10px]">
              <span className="text-emerald-400/70">
                amrit@dev
              </span>

              <span className="text-zinc-700">
                :
              </span>

              <span className="text-cyan-400/70">
                ~/contact
              </span>

              <span className="text-zinc-600">
                $
              </span>

              <span className="ml-2 text-zinc-500">
                ./send_message.sh
              </span>
            </div>

            {/* Form */}

            <form
              action="https://formspree.io/f/mblaqowe"
              method="POST"
              className="space-y-8"
            >
              {/* Name + Email */}

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-zinc-600
                      transition-colors
                      group-focus-within:text-cyan-400/70
                    "
                  >
                    user_name
                  </label>

                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-xs text-cyan-400/40">
                      &gt;
                    </span>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="
                        w-full
                        border-b
                        border-white/[0.10]
                        bg-transparent
                        py-3
                        pl-5
                        font-mono
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-zinc-700
                        transition-all
                        duration-300
                        focus:border-cyan-400/60
                      "
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-zinc-600
                      transition-colors
                      group-focus-within:text-cyan-400/70
                    "
                  >
                    user_email
                  </label>

                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-xs text-cyan-400/40">
                      &gt;
                    </span>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="
                        w-full
                        border-b
                        border-white/[0.10]
                        bg-transparent
                        py-3
                        pl-5
                        font-mono
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-zinc-700
                        transition-all
                        duration-300
                        focus:border-cyan-400/60
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Message */}

              <div className="group">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                    transition-colors
                    group-focus-within:text-cyan-400/70
                  "
                >
                  message
                </label>

                <div className="relative">
                  <span className="absolute left-0 top-3 font-mono text-xs text-cyan-400/40">
                    &gt;
                  </span>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your idea..."
                    required
                    rows={6}
                    className="
                      w-full
                      resize-none
                      border-b
                      border-white/[0.10]
                      bg-transparent
                      py-3
                      pl-5
                      font-mono
                      text-sm
                      leading-7
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-all
                      duration-300
                      focus:border-cyan-400/60
                    "
                  />
                </div>
              </div>

              {/* Bottom */}

              <div className="flex flex-col justify-between gap-6 pt-2 sm:flex-row sm:items-center">

                {/* Terminal status */}

                <div className="font-mono text-[9px] leading-5 text-zinc-700">
                  <span className="text-emerald-400/60">
                    ●
                  </span>{" "}
                  connection_ready
                  <br />

                  <span className="text-zinc-600">
                    encryption: enabled
                  </span>
                </div>

                {/* Send */}

                <button
                  type="submit"
                  className="
                    group
                    relative
                    flex
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-lg
                    border
                    border-cyan-400/20
                    bg-cyan-400/[0.06]
                    px-6
                    py-3.5
                    font-mono
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-cyan-300
                    transition-all
                    duration-300
                    hover:border-cyan-400/50
                    hover:bg-cyan-400/[0.12]
                    hover:text-cyan-200
                  "
                >
                  <FaPaperPlane
                    className="
                      text-[10px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                  Execute Send
                </button>
              </div>
            </form>
          </div>

          {/* Bottom terminal line */}

          <div className="border-t border-white/[0.04] px-6 py-3 md:px-8">
            <div className="font-mono text-[8px] text-zinc-700">
              amrit@dev:~/contact${" "}
              <span className="text-zinc-600">
                awaiting_input
              </span>

              <span className="ml-1 inline-block h-2.5 w-1 animate-pulse bg-cyan-400/50 align-middle" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          FOOTER STATUS
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="
          mt-8
          flex
          flex-col
          justify-between
          gap-3
          border-t
          border-white/[0.05]
          pt-5
          font-mono
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-zinc-700
          sm:flex-row
        "
      >
        <span>
          connection: secure
        </span>

        <span>
          protocol: https
        </span>

        <span className="text-emerald-400/40">
          system: ready
        </span>
      </motion.div>
    </section>
  );
};

export default Contacts;
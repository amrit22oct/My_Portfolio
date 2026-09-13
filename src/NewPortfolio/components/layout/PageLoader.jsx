
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">

        {/* Core */}
        <div className="relative w-16 h-16">

          <motion.div
            className="
              absolute inset-0
              rounded-full
              border-2
              border-cyan-400/20
              border-t-cyan-400
            "
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="
              absolute inset-3
              rounded-full
              border
              border-cyan-300/20
              border-b-cyan-300
            "
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="
              absolute
              top-1/2
              left-1/2
              w-2
              h-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400
              shadow-[0_0_15px_rgba(34,211,238,0.9)]
            "
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />

        </div>

        {/* Text */}
        <motion.div
          className="
            text-xs
            tracking-[0.35em]
            text-cyan-400
            font-mono
          "
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          LOADING_MODULE
        </motion.div>

        {/* Progress line */}
        <div className="w-48 h-[2px] bg-cyan-400/10 overflow-hidden">
          <motion.div
            className="h-full bg-cyan-400"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default PageLoader;

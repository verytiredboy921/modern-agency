import { motion } from "framer-motion";

function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-52 -left-52 h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-52 -right-52 h-[700px] w-[700px] rounded-full bg-purple-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />
    </>
  );
}

export default Aurora;
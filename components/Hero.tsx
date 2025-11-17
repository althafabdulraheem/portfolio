"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="w-full flex p-2 ">
      <motion.div
        className="w-3/5 flex flex-col justify-center items-center h-[80vh] md:w-full"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="p-2">
          <h1 className="text-5xl font-bold">
            Hi! I'm <span className="text-cyan-800">Althaf Abdul Raheem</span>
          </h1>
          <h1 className="text-3xl font-bold mt-2 mb-2">FullStack Developer</h1>
          <p>
            I am a results-driven full-stack developer with expertise in
            designing, developing, and deploying robust web applications using
            modern technologies.
          </p>
        </div>
      </motion.div>
      <div className="w-2/5 flex justify-center items-center h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mt-4 h-[400px] w-[400px] bg-cyan-800 absolute"
          style={{ transform: "rotate3d(2,2,2,69deg)" }}
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="rounded-[50%] h-[300px] w-[300px] grayscale-[1] hover:grayscale-[0]"
          src="https://avatars.githubusercontent.com/u/109522801?v=4"
          alt="hero image"
        />
      </div>
    </div>
  );
}

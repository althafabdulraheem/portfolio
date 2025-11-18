"use client";
import { Download } from 'lucide-react';
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="w-full p-2 flex flex-col-reverse flex-col sm:flex-row md:flex-row">
      <motion.div
        className="w-full sm:w-3/5 md:w-3/5 flex flex-col md:justify-center md:items-center h-[60vh] sm:h-[80vh] md:h-[80vh] "
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
          <button className="flex gap-1 mt-2 bg-cyan-700 text-white p-4 rounded hover:bg-cyan-800">Resume <Download/></button>
        </div>
      </motion.div>
      <div className=" w-full sm:w-2/5 flex md:justify-center md:items-center sm:h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=" sm:block sm:mt-4 h-[400px] w-[400px] bg-cyan-800 absolute"
          style={{ transform: "rotate3d(97, -29, 92, 106deg)" }}
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="rounded-[50%] h-[300px] md:h-[300px] sm:h-[300px] w-full md:w-[300px] sm:w-[300px] grayscale-[1] hover:grayscale-[0]"
          src="https://avatars.githubusercontent.com/u/109522801?v=4"
          alt="hero image"
        />
      </div>
    </div>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
const projects = [
  {
    id: 1,
    title: "Business Website",
    description: "To provide a platform for businesses to showcase their products and services.",
    tags: ["Laravel", "PHP", "Jquery", "MySQL"],
    image: "/projects/gkb_opticals.png",
    link: "http://www.gkbopticalsfze.com/",

  },
  {
    id: 2,
    title: "Business Website",
    description: "To provide a platform for businesses to showcase their products and services.",
    tags: ["Laravel", "PHP", "Jquery", "MySQL"],
    link: "https://saudistark.com/",
    image: "/projects/saudi_stark.png",
  },
  {
    id: 3,
    title: "Business Website",
    description: "To provide a platform for businesses to showcase their products and services.",
    tags: ["Laravel", "PHP", "Jquery", "MySQL"],
    link: "https://anbieterconsulting.com/",
    image: "/projects/anbiter.jpeg"

  },

  {
    id: 4,
    title: "Business Website",
    description: "A professional business website designed to present company information, services, and contact details in a clear and organized manner.",
    tags: ["Laravel", "PHP", "Jquery", "MySQL", "Wordpress"],
    link: "https://maconsultants.uk/",
    image: "/projects/mac.png",

  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Laravel, PHP,Stripe, and MySQL. Features inventory and secure checkout.",
    tags: ["Laravel", "PHP", "Stripe", "MySQL"],
    link: "https://www.ishthari.com/",
    image: "/projects/ishtari.png",
  },

  {
    id: 6,
    title: "LMS Platform",
    description: "A LMS website to host,deliver and track educational courses and training programs. It serves asa centralized hub where instructors can manage content and learners can access materials and complete assignments.",
    tags: ["Laravel", "PHP", "Jquery", "MySQL", "Stripe", "Zoom SDK"],
    link: "https://getskillonline.com/",
    image: "/projects/getskillonline.png",

  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
            My <span className="text-cyan-600">Projects</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 text-lg">
            A collection of my recent work, ranging from web applications to design systems.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Card Header/Image Placeholder */}
              <div className="h-48 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-700 font-bold text-6xl opacity-40 select-none hover:opacity-100">
                  {/* {project.title.charAt(0)} */}
                  <Image src={project.image} alt="project image" width={500} height={500} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  {/* <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                    <Github size={18} />
                    Code
                  </a> */}
                  <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors ml-auto">
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

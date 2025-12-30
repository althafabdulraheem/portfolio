"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone, Server, Layers, Layout, FileJson } from "lucide-react";

export default function AboutPage() {
    const technologies = [
        { name: "HTML5", icon: Layout, category: "Frontend" },
        { name: "CSS3", icon: Layers, category: "Frontend" },
        { name: "JS", icon: FileJson, category: "Frontend" },
        { name: "jQuery", icon: FileJson, category: "Frontend" },
        { name: "React JS", icon: Code2, category: "Frontend" },
        { name: "Next.js", icon: Globe, category: "Frontend" },
        { name: "React Native", icon: Smartphone, category: "Mobile" },
        { name: "PHP", icon: Server, category: "Backend" },
        { name: "Laravel", icon: Server, category: "Backend" },
        { name: "MySQL", icon: Database, category: "Database" },

    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-900 mb-8 pb-2">
                        About Me
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        I'm a passionate developer dedicated to crafting exceptional digital experiences.
                        With a strong foundation in both web and mobile development, I bring ideas to life
                        through clean code and intuitive design.
                    </p>
                </motion.div>

                {/* Tech Stack Section */}
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3"
                    >
                        <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                        Technologies I Use
                        <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                    </motion.h2>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        {technologies.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={item}
                                className="group relative bg-gray-900/50 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-900 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative flex flex-col items-center gap-4 text-center">
                                    <div className="p-4 rounded-xl bg-white/5 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors duration-300">
                                        <tech.icon size={32} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                                            {tech.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {tech.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
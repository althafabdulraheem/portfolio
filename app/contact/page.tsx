"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                        Get in <span className="text-cyan-600">Touch</span>
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                        Fill out the form below or reach out directly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Email</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">althafbinraheem786@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Phone</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">+91 7356906565</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Location</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Follow Me</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/althafabdulraheem" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="https://linkedin.com/in/althaf-abdul-raheem-4a422a22b" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition-all">
                                    <Linkedin size={20} />
                                </a>
                                {/* <a href="#" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition-all">
                                    <Twitter size={20} />
                                </a> */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

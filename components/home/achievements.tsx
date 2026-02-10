'use client';

import { motion } from 'framer-motion';
import { Award, Users, Trophy, ExternalLink } from 'lucide-react';

export function Achievements() {
    return (
        <section className="py-6 px-6 md:px-0 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-xl font-semibold mb-6 text-cyan-500 flex items-center">
                    <span className="mr-2 text-cyan-500/50">04.</span> Achievements
                </h3>

                <div className="space-y-6">
                    {/* Workshops & Teaching */}
                    <div>
                        <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-cyan-500" />
                            Workshops & Teaching
                        </h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li className="flex gap-3 items-start">
                                <span className="text-cyan-500 shrink-0">▹</span>
                                <span>Organizer & Instructor: Getting Started on Agentic AI (Feb 2026, 50+ participants)</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-cyan-500 shrink-0">▹</span>
                                <span>Organizer & Instructor: RAG & Agentic RAG (Feb 2025, 30+ participants)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hackathons */}
                    <div>
                        <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-cyan-500" />
                            Hackathons
                        </h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li className="flex gap-3 items-start">
                                <span className="text-cyan-500 shrink-0">▹</span>
                                <span>1st Place – Electrothon'24 (intra-college AI hackathon)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-cyan-500" />
                            Certifications
                        </h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li className="flex gap-3 items-start">
                                <span className="text-cyan-500 shrink-0">▹</span>
                                <a
                                    href="https://drive.google.com/file/d/1RWgBR9I8yVL_Dsocm-FenwJy9gTevOOo/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                                >
                                    <span>AWS Certified Cloud Practitioner</span>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

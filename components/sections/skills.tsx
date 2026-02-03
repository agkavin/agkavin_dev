'use client';

import { motion } from 'framer-motion';

export function Skills() {
    const skills = [
        {
            category: "Applied AI",
            items: [
                "GenAI Systems",
                "RAG Architectures",
                "Agentic AI & Multi-Agent Systems",
                "MCP & AI Tool-building"
            ]
        },
        {
            category: "Engineering",
            items: [
                "Python (FastAPI, Pydantic)",
                "TypeScript / Node.js",
                "Next.js (Frontend Delivery)",
                "API Design & System Integration"
            ]
        },
        {
            category: "Platforms & Deployment",
            items: [
                "Docker & Container Apps",
                "GitHub Actions",
                "Azure OpenAI / Vertex AI",
                "Cloudflare Pages"
            ]
        }
    ];

    return (
        <section className="py-8 px-6 md:px-0 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-xl font-semibold mb-12 text-cyan-500 flex items-center">
                    <span className="mr-2 text-cyan-500/50">02.</span> Technical Arsenal
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skills.map((group, idx) => (
                        <div key={idx} className="space-y-4">
                            <h4 className="text-foreground font-medium text-lg tracking-wide border-l-2 border-cyan-800/50 pl-3">
                                {group.category}
                            </h4>
                            <ul className="space-y-2 pl-4">
                                {group.items.map((item, i) => (
                                    <li key={i} className="text-muted-foreground text-base hover:text-cyan-400 transition-colors duration-200">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

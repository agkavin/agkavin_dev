'use client';

import { motion } from 'framer-motion';

export function Experience() {
    return (
        <section className="pt-16 pb-6 px-6 md:px-0 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-xl font-semibold mb-6 text-cyan-500 flex items-center">
                    <span className="mr-2 text-cyan-500/50">01.</span> Experience
                </h3>

                <div className="space-y-8">
                    {/* Cognizant Experience */}
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                            <h4 className="text-lg font-semibold text-foreground">Gen-AI Intern</h4>
                            <span className="text-sm text-muted-foreground">July 2025 – Jan. 2026</span>
                        </div>
                        <div className="text-base text-cyan-400/80">Cognizant Technology Solutions · Chennai, TN</div>

                        <ul className="space-y-3 text-muted-foreground leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-cyan-500 shrink-0">▹</span>
                                <span>Designed and deployed <strong className="text-foreground font-medium">multi-agent systems</strong> using LangGraph JS and Mastra AI for Retail & Logistics clients, building POCs and MVPs for production-ready GenAI solutions.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-500 shrink-0">▹</span>
                                <span>Integrated enterprise platforms (<strong className="text-foreground font-medium">ServiceNow, Shopify</strong>) through scalable APIs and owned end-to-end <strong className="text-foreground font-medium">Azure deployment</strong> on Container Apps.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-500 shrink-0">▹</span>
                                <span>Built <strong className="text-foreground font-medium">agentic RAG systems</strong> using Azure AI Search and Document Intelligence for real-time customer-facing chatbots.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Journey Narrative */}
                    <div className="text-muted-foreground leading-relaxed pt-4 border-t border-cyan-900/20">
                        <p>
                            I transitioned from classical ML to <strong className="text-foreground font-medium">Applied AI</strong>, focusing on production-ready systems over academic experiments. Today, I build <strong className="text-foreground font-medium">GenAI and agentic workflows</strong> where LLMs retrieve data, make decisions, and execute tasks—shipping usable AI services that solve real problems.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

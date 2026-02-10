'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function ProjectsHome() {
    const projects = [
        {
            title: "TitanCompute",
            description: "Distributed LLM inference engine with zero-proxy streaming architecture and intelligent MCDA scheduling across heterogeneous consumer devices",
            tags: ["Golang", "Python", "gRPC", "Docker"],
            link: "https://github.com/agkavin/TitanCompute"
        },
        {
            title: "RAG Pipelines",
            description: "Modular agentic RAG framework with autonomous tool-based reasoning, web-search retrieval, and multi-source document querying capabilities",
            tags: ["LangChain", "ChromaDB", "Tavily", "Gemini"],
            link: "https://github.com/agkavin/RAG-Pipelines"
        },
        {
            title: "FloatChat",
            description: "Production-grade NL-to-SQL analytics platform with hybrid RAG architecture, automated anomaly detection, and scientific PDF report generation",
            tags: ["FastAPI", "Vanna AI", "PostgreSQL", "Agents"],
            link: "https://github.com/agkavin/FloatChat-Backend"
        }
    ];

    return (
        <section className="py-6 px-6 md:px-0 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-between items-center mb-12">
                    <h3 className="text-xl font-semibold text-cyan-500 flex items-center">
                        <span className="mr-2 text-cyan-500/50">03.</span> Selected Works
                    </h3>
                    <Link
                        href="/projects"
                        className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                                <Card className="bg-card/50 border-cyan-900/20 hover:border-cyan-500/30 transition-colors duration-300 cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-xl font-medium text-foreground flex items-center gap-2">
                                                {project.title}
                                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="text-base mt-2 text-muted-foreground">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex gap-2 flex-wrap">
                                            {project.tags.map((tag, i) => (
                                                <Badge key={i} variant="secondary" className="bg-cyan-950/30 text-cyan-400 hover:bg-cyan-900/40 border-0">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function Projects() {
    const projects = [
        {
            title: "TitanCompute",
            description: "Distributed LLM inference system enabling model sharding across heterogeneous consumer devices.",
            tags: ["Python", "gRPC", "PyTorch"],
            link: "#"
        },
        {
            title: "RetailSense",
            description: "Multi-agent simulation for optimizing inventory and dynamic pricing strategies in retail environments.",
            tags: ["Agentic AI", "Simulation", "FastAPI"],
            link: "#"
        },
        {
            title: "RAG Pipelines",
            description: "Modular, high-performance retrieval architectures with tool-use capabilities for enterprise knowledge bases.",
            tags: ["RAG", "Vector DB", "LangChain"],
            link: "#"
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
                    <span className="mr-2 text-cyan-500/50">04.</span> Selected Works
                </h3>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="bg-card/50 border-cyan-900/20 hover:border-cyan-500/30 transition-colors duration-300">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl font-medium text-foreground">
                                            {project.title}
                                        </CardTitle>
                                        {/* Placeholder for link icon if needed */}
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
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

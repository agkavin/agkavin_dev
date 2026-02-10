'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsGrid() {
    const projects = [
        {
            title: "TitanCompute",
            description: "Distributed LLM inference engine with zero-proxy streaming architecture and intelligent MCDA scheduling across heterogeneous consumer devices",
            tags: ["Golang", "Python", "gRPC", "Docker"],
            link: "https://github.com/agkavin/TitanCompute",
            repo: "agkavin/TitanCompute"
        },
        {
            title: "RAG Pipelines",
            description: "Modular agentic RAG framework with autonomous tool-based reasoning, web-search retrieval, and multi-source document querying capabilities",
            tags: ["LangChain", "ChromaDB", "Tavily", "Gemini"],
            link: "https://github.com/agkavin/RAG-Pipelines",
            repo: "agkavin/RAG-Pipelines"
        },
        {
            title: "FloatChat",
            description: "Production-grade NL-to-SQL analytics platform with hybrid RAG architecture, automated anomaly detection, and scientific PDF report generation",
            tags: ["FastAPI", "Vanna AI", "PostgreSQL", "Agents"],
            link: "https://github.com/agkavin/FloatChat-Backend",
            repo: "agkavin/FloatChat-Backend"
        },
        {
            title: "Speech X",
            description: "Real-time conversational avatar system optimized by preloading models into RAM, applying latent space optimizations in the VAE, and caching intermediate results to minimize recomputation",
            tags: ["FastAPI", "Whisper", "TTS", "Optimization"],
            link: "#",
            repo: null
        },
        {
            title: "SmartRail Triage",
            description: "Multimodal complaint classification system using Vision Transformers and OCR for automated ticket metadata extraction and severity-based routing",
            tags: ["Python", "Azure Vision", "Multi-Modal", "OCR"],
            link: "https://github.com/agkavin/Railway-Complaint-Management",
            repo: "agkavin/Railway-Complaint-Management"
        },
        {
            title: "llm-finetuning",
            description: "Fine-tuning Phi-3-mini-4k-instruct on ArXiv math dataset via QLoRA, optimized for domain-specific mathematical queries with local inference support",
            tags: ["LLM", "Fine-Tuning", "QLoRA", "Math Dataset"],
            link: "https://github.com/agkavin/llm-finetuning",
            repo: "agkavin/llm-finetuning"
        },
        {
            title: "Tokenizer From Scratch",
            description: "Toolkit for building custom tokenizers from scratch, covering fundamental text tokenization techniques without relying on pre-built libraries",
            tags: ["Tokenizer", "NLP", "Python"],
            link: "https://github.com/agkavin/Tokenizer-From-Scratch",
            repo: "agkavin/Tokenizer-From-Scratch"
        },
        {
            title: "Transformer From Scratch",
            description: "Raw PyTorch implementation of the Transformer model from scratch, demonstrating the core architecture from 'Attention Is All You Need' with multi-head self-attention and positional encoding",
            tags: ["PyTorch", "Transformer", "Deep Learning"],
            link: "https://github.com/agkavin/Transformer-From-Scratch",
            repo: "agkavin/Transformer-From-Scratch"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                >
                    <Link
                        href={project.link}
                        target={project.link === "#" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className={`block group h-full ${project.link === "#" ? "pointer-events-none" : ""}`}
                    >
                        <div className="bg-card/50 border border-cyan-900/20 hover:border-cyan-500/30 transition-all duration-300 rounded-lg overflow-hidden h-full flex flex-col p-6">
                            {/* Header with GitHub-style preview */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Github className="w-5 h-5 text-cyan-500/70" />
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                {project.link !== "#" && (
                                    <ExternalLink className="w-4 h-4 text-cyan-500/50 group-hover:text-cyan-400 transition-colors shrink-0" />
                                )}
                            </div>

                            {/* Repository name */}
                            {project.repo && (
                                <p className="text-xs text-muted-foreground/60 mb-3 font-mono">
                                    {project.repo}
                                </p>
                            )}

                            {/* Description */}
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors mb-4 flex-1 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="bg-cyan-950/30 text-cyan-400 hover:bg-cyan-900/40 border-0 text-xs"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

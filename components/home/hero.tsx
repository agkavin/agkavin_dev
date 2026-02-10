'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="px-6 md:px-12 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Kavin AG
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                    <span className="text-cyan-500">Applied AI Engineer</span>
                </h2>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                    I build applied AI systems — <span className="text-foreground">GenAI</span>, <span className="text-foreground">RAG pipelines</span>, and <span className="text-foreground">agentic workflows</span> that integrate into real-world applications.
                </p>

                <div className="flex gap-4">
                    <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white border-0 font-medium">
                        <Link href="https://github.com/agkavin" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-cyan-900/40 hover:bg-cyan-950/30 hover:text-cyan-400">
                        <Link href="https://www.linkedin.com/in/agkavin/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { ProjectsGrid } from '@/components/projects/projects-grid';

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan-900/30">
            <Navigation />

            <div className="max-w-4xl mx-auto px-6 pt-8 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Projects
                    </h1>
                    <p className="text-lg text-muted-foreground mb-12">
                        Building production-ready AI systems and tools
                    </p>

                    <ProjectsGrid />
                </motion.div>
            </div>
        </main>
    );
}

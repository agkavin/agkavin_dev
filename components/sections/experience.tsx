'use client';

import { motion } from 'framer-motion';

export function Experience() {
    return (
        <section className="py-8 px-6 md:px-0 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-xl font-semibold mb-8 text-cyan-500 flex items-center">
                    <span className="mr-2 text-cyan-500/50">01.</span> Journey
                </h3>

                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                    <p>
                        My path started with classical machine learning, training models on structured datasets. While the math was fascinating, I quickly realized that model performance metrics often stayed in notebooks, disconnected from real user value. I wanted to build things that actually worked in production.
                    </p>
                    <p>
                        I transitioned into <strong className="text-foreground font-medium">Applied AI</strong>, shifting my focus from hyperparameter tuning to system integration. I realized that the hardest challenges weren't just in the model architecture, but in the orchestration—making reliable pipelines, handling edge cases, and ensuring latency requirements were met.
                    </p>
                    <p>
                        Today, I work on <strong className="text-foreground font-medium">GenAI systems and Agentic workflows</strong>. I build multi-agent systems where LLMs actually do work—retrieving data, making decisions, and executing tasks via tools. It's less about "chatbots" and more about intelligent automation layers that sit between users and complex databases.
                    </p>
                    <p>
                        I prefer shipping <strong className="text-foreground font-medium">usable AI services</strong> over academic experimentation. If it doesn't solve a problem reliably, it's just a demo.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

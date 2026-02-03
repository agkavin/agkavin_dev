'use client';

import { motion } from 'framer-motion';

export function Approach() {
    return (
        <section className="py-8 px-6 md:px-0 max-w-2xl mx-auto bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-l-2 border-cyan-500/20 pl-6 md:pl-8 py-2"
            >
                <h3 className="text-xl font-semibold mb-6 text-cyan-500 flex items-center">
                    <span className="mr-2 text-cyan-500/50">03.</span> How I Build
                </h3>

                <div className="prose prose-invert prose-lg text-muted-foreground">
                    <p className="leading-relaxed">
                        I use <span className="text-foreground">Python</span> for the heavy lifting—AI services, orchestration, and backend logic where data processing speed matters.
                        For user-facing tools, I reach for <span className="text-foreground">TypeScript and Next.js</span> because the type safety and ecosystem allow for rapid, reliable delivery.
                    </p>
                    <p className="mt-6 leading-relaxed">
                        Infrastructure is just a delivery mechanism to me, not an identity. While I'm comfortable with Docker and containers, I don't obsess over Kubernetes clusters unless the scale demands it.
                        My focus is always on clarity, reliability, and real-world usability. If the system is too complex to maintain, it's already broken.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

'use client';

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 px-6 text-center text-sm text-muted-foreground/60">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
                <div className="flex gap-6">
                    <Link
                        href="https://github.com/agkavin"
                        target="_blank"
                        className="hover:text-cyan-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/agkavin/"
                        target="_blank"
                        className="hover:text-cyan-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                </div>
                <p>© {new Date().getFullYear()} agkavin.dev</p>
            </div>
        </footer>
    );
}

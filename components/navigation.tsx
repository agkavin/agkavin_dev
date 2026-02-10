'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        // { href: '/writing', label: 'Writing' }, // Uncomment when ready
    ];

    return (
        <nav className="fixed top-0 right-0 z-50 p-6 md:p-8">
            <div className="flex gap-6">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm font-medium transition-colors duration-200 ${pathname === link.href
                                ? 'text-cyan-500'
                                : 'text-muted-foreground hover:text-cyan-400'
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

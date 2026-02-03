import { Hero } from '@/components/sections/hero';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Approach } from '@/components/sections/approach';
import { Projects } from '@/components/sections/projects';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan-900/30">
      <Hero />
      <Experience />
      <Skills />
      <Approach />
      <Projects />
      <Footer />
    </main>
  );
}

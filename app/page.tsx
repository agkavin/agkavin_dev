import { Hero } from '@/components/sections/hero';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Approach } from '@/components/sections/approach';
import { Projects } from '@/components/sections/projects';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan-900/30">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Fixed Hero */}
        <div className="lg:w-2/5 lg:fixed lg:h-screen lg:flex lg:items-center lg:justify-center">
          <Hero />
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="lg:w-3/5 lg:ml-[40%]">
          <div className="max-w-3xl mx-auto">
            <Experience />
            <Skills />
            <Approach />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

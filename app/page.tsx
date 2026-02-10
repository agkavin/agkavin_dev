import { Hero } from '@/components/home/hero';
import { Experience } from '@/components/home/experience';
import { Skills } from '@/components/home/skills';
import { ProjectsHome } from '@/components/home/projects-home';
import { Achievements } from '@/components/home/achievements';
import { Footer } from '@/components/home/footer';
import { Navigation } from '@/components/navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan-900/30">
      <Navigation />
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
            <ProjectsHome />
            <Achievements />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

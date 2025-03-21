import { Wrench, Rocket, BookOpen } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ImageCarousel } from '@/components/image-carousel';
import { StatsCard } from '@/components/stats-card';
import { FeatureCard } from '@/components/feature-card';
import { ProblemSolutionSection } from '@/components/problem-solution-section';
import { HeroSection } from '@/components/hero-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 space-y-6 md:py-16 lg:py-24">
          <div className="mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by developers worldwide
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Our platform provides the tools you need to build, test, and deploy your smart
              contracts with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <StatsCard title="Users" value="100K+" description="Active developers" />
            <StatsCard title="Contracts" value="250K+" description="Successfully deployed" />
            <StatsCard title="Transactions" value="10M+" description="Processed monthly" />
          </div>
        </section>

        <section className="container py-12 space-y-6 md:py-16 lg:py-24">
          <div className="mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why choose our platform
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Experience rapid blockchain development with our powerful and customizable framework
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Rocket className="h-10 w-10 text-primary" />}
              title="Quick Setup"
              description="Start building dApps in minutes with our pre-configured development environment"
            />
            <FeatureCard
              icon={<Wrench className="h-10 w-10 text-primary" />}
              title="Customizable Framework"
              description="Tailor your development environment with flexible configuration options"
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Developer Experience"
              description="Comprehensive documentation and templates to accelerate your development"
            />
          </div>
        </section>

        <ProblemSolutionSection />

        <section className="container py-12 space-y-6 md:py-16 lg:py-24">
          <div className="mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See it in action
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Browse through our showcase of successful implementations
            </p>
          </div>

          <div className="mt-8">
            <ImageCarousel />
          </div>
        </section>

        <section className="container py-12 md:py-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </section>
      </main>
    </div>
  );
}

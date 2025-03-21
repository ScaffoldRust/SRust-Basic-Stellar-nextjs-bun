'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    'Time-consuming blockchain development setup',
    'Lack of standardized development workflows',
    'Steep learning curve for new developers',
    'Missing development tools integration',
  ];

  const solutions = [
    'Ready-to-use development environment',
    'Streamlined development workflow',
    'Developer-friendly documentation & templates',
    'Integrated tools & testing framework',
  ];

  return (
    <section className="container py-12 space-y-6 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="mx-auto text-center space-y-4 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why ScaffoldRust?
        </h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Building decentralized applications should be straightforward. We make blockchain
          development accessible and efficient.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-12 relative z-10">
        <Card className="border-pink-500/20 overflow-hidden relative backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-transparent to-transparent" />
          <CardContent className="p-8 relative">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-pink-500/20">
                <XCircle className="h-7 w-7 text-red-500" />
                <h3 className="text-2xl font-bold">Current Challenges</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-500/20 overflow-hidden relative backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-transparent to-transparent" />
          <CardContent className="p-8 relative">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-pink-500/20">
                <CheckCircle className="h-7 w-7 text-green-500" />
                <h3 className="text-2xl font-bold">ScaffoldRust Solution</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

'use client';

import type React from 'react';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Card className="border-pink-500/20 overflow-hidden relative h-[200px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
        <CardContent className="p-6 relative">
          <div className="space-y-4">
            {icon}
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

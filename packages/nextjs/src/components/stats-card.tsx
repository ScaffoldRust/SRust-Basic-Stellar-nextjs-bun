'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
}

export function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Card className="border-pink-500/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
        <CardContent className="p-6 py-10 relative">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500">
              {value}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, RefreshCw } from 'lucide-react';

interface FunctionCardProps {
  name: string;
  description: string;
  inputs: { name: string; placeholder: string }[];
  buttonText: string;
  onExecute: () => void;
  isLoading: boolean;
}

export default function FunctionCard({
  name,
  description,
  inputs,
  buttonText,
  onExecute,
  isLoading,
}: FunctionCardProps) {
  return (
    <motion.div
      className="mb-6 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <Card className="border-pink-500/20 overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {inputs.map((input, index) => (
            <div key={index} className="space-y-2">
              <Label htmlFor={`${name}-${input.name}`} className="text-sm">
                {input.name}
              </Label>
              <Input
                id={`${name}-${input.name}`}
                placeholder={input.placeholder}
                className="border-pink-500/20 focus-visible:ring-pink-500/50"
              />
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={onExecute} disabled={isLoading} className="group">
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

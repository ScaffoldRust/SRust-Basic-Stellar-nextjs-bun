'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RefreshCw } from 'lucide-react';
import FunctionCard from '@/components/function-card';

export default function DebugContractPage() {
  const [activeTab, setActiveTab] = useState('read');
  const [isLoading, setIsLoading] = useState(false);
  const [accountBalance, setAccountBalance] = useState('1234.5678');
  const transactionFee = 0.00001;

  const handleExecute = (functionName: string) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(`Executing function: ${functionName}`);
      setIsLoading(false);
    }, 1500);
  };

  const handleRefreshBalance = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate balance update with random value
      const newBalance = (1000 + Math.random() * 500).toFixed(4);
      setAccountBalance(newBalance);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="container py-10 space-y-8">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Smart Contract Debug
        </h1>
        <p className="text-muted-foreground">
          Interact with your smart contract functions and monitor state changes in real-time.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          className="lg:col-span-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="border-pink-500/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
              <CardHeader className="relative">
                <Badge className="w-fit mb-2 bg-black text-white border-pink-500/50">XLM</Badge>
                <CardTitle className="text-2xl">Account Balance</CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500">
                      {accountBalance} <span className="text-2xl">XLM</span>
                    </h3>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                    onClick={handleRefreshBalance}
                    disabled={isLoading}
                  >
                    <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                    <span className="sr-only">Refresh balance</span>
                  </Button>
                </div>

                <Separator className="bg-pink-500/20" />

                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Transaction Fee:</span>
                  <span>{transactionFee} XLM</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-pink-500/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
              <CardHeader className="relative">
                <CardTitle>Token Details</CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">Stellar Token</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Symbol</p>
                    <p className="font-medium">XLM</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Decimals</p>
                    <p className="font-medium">7</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Supply</p>
                    <p className="font-medium">500,000,000 XLM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-pink-500/20 overflow-hidden relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
            <CardHeader className="relative pb-2">
              <CardTitle>Contract Functions</CardTitle>
              <CardDescription>
                Interact with your contract&apos;s read and write functions
              </CardDescription>
            </CardHeader>
            <CardContent className="relative p-0">
              <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
                <div className="px-6">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="read">Read</TabsTrigger>
                    <TabsTrigger value="write">Write</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="read" className="m-0">
                  <div className="px-6 space-y-6 max-h-[500px] overflow-y-auto py-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="read-functions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FunctionCard
                          name="balance_of"
                          description="Get the balance of an account"
                          inputs={[{ name: 'account', placeholder: 'Enter account' }]}
                          buttonText="Read"
                          onExecute={() => handleExecute('balance_of')}
                          isLoading={isLoading}
                        />

                        <FunctionCard
                          name="allowance"
                          description="Get the amount of tokens that an owner allowed to a spender"
                          inputs={[
                            { name: 'owner', placeholder: 'Enter owner' },
                            { name: 'spender', placeholder: 'Enter spender' },
                          ]}
                          buttonText="Read"
                          onExecute={() => handleExecute('allowance')}
                          isLoading={isLoading}
                        />

                        <FunctionCard
                          name="balanceOf"
                          description="Get the balance of an account"
                          inputs={[{ name: 'account', placeholder: 'Enter account' }]}
                          buttonText="Read"
                          onExecute={() => handleExecute('balanceOf')}
                          isLoading={isLoading}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </TabsContent>

                <TabsContent value="write" className="m-0">
                  <div className="px-6 space-y-6 max-h-[500px] overflow-y-auto py-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="write-functions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FunctionCard
                          name="transfer"
                          description="Transfer tokens to a specified address"
                          inputs={[
                            { name: 'recipient', placeholder: 'Enter recipient' },
                            { name: 'amount', placeholder: 'Enter amount' },
                          ]}
                          buttonText="Execute"
                          onExecute={() => handleExecute('transfer')}
                          isLoading={isLoading}
                        />

                        <FunctionCard
                          name="approve"
                          description="Approve the passed address to spend the specified amount of tokens"
                          inputs={[
                            { name: 'spender', placeholder: 'Enter spender' },
                            { name: 'amount', placeholder: 'Enter amount' },
                          ]}
                          buttonText="Execute"
                          onExecute={() => handleExecute('approve')}
                          isLoading={isLoading}
                        />

                        <FunctionCard
                          name="transferFrom"
                          description="Transfer tokens from one address to another"
                          inputs={[
                            { name: 'sender', placeholder: 'Enter sender' },
                            { name: 'recipient', placeholder: 'Enter recipient' },
                            { name: 'amount', placeholder: 'Enter amount' },
                          ]}
                          buttonText="Execute"
                          onExecute={() => handleExecute('transferFrom')}
                          isLoading={isLoading}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

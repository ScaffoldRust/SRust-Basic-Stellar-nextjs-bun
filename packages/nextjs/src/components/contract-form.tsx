"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContractForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <Tabs defaultValue="address" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="address">Contract Address</TabsTrigger>
        <TabsTrigger value="code">Contract Code</TabsTrigger>
      </TabsList>

      <TabsContent value="address" className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contract-address">Contract Address</Label>
            <Input
              id="contract-address"
              placeholder="0x..."
              className="border-pink-500/20 focus-visible:ring-pink-500/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="network">Network</Label>
            <Input
              id="network"
              placeholder="Ethereum Mainnet"
              className="border-pink-500/20 focus-visible:ring-pink-500/50"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Debug Contract"}
          </Button>
        </form>
      </TabsContent>

      <TabsContent value="code" className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contract-code">Contract Code</Label>
            <Textarea
              id="contract-code"
              placeholder="Paste your contract code here..."
              className="min-h-[200px] border-pink-500/20 focus-visible:ring-pink-500/50"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Analyze Contract"}
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  )
}


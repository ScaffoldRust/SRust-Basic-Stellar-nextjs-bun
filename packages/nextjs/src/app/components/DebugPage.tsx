"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function DebugPage() {
    const [mode, setMode] = useState<"read" | "write">("read");

    const readMethods = [
        { name: "balance_of", params: ["account"] },
        { name: "allowance", params: ["owner", "spender"] },
        { name: "balanceOf", params: ["account"] },
    ];

    const writeMethods = [
        { name: "transfer", params: ["recipient", "amount"] },
        { name: "approve", params: ["spender", "amount"] },
        { name: "transferFrom", params: ["sender", "recipient", "amount"] },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Static Tab */}
                <div className="flex space-x-3 mb-4">
                    <Button variant="default">XLM</Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                    {/* Contract Info Panel */}
                    <div className="col-span-2 space-y-6">
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div className="text-center">
                                    <p className="text-xl font-semibold">Account Balance</p>
                                    <p className="text-2xl font-bold">1234.5678 XLM</p>
                                </div>
                                <div className="text-center border-t pt-4">
                                    <p className="text-sm text-gray-500">Transaction Fee:</p>
                                    <p className="text-lg font-semibold">0.00001 XLM</p>
                                </div>

                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 space-y-4">
                                {[
                                    { label: "name", value: "Stellar Token" },
                                    { label: "symbol", value: "XLM" },
                                    { label: "decimals", value: "7" },
                                    { label: "totalSupply", value: "500,000,000 XLM" },
                                ].map(({ label, value }) => (
                                    <div key={label}>
                                        <p className="text-sm text-gray-500">{label}</p>
                                        <p className="text-sm font-mono text-gray-900">{value}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contract Methods Panel */}
                    <div className="col-span-4">
                        <div className="flex justify-between p-2 border border-black rounded-lg mb-6">
                            {["read", "write"].map((m) => (
                                <Button
                                    key={m}
                                    className="flex-1"
                                    variant={mode === m ? "default" : "outline"}
                                    onClick={() => setMode(m as "read" | "write")}
                                >
                                    {m.charAt(0).toUpperCase() + m.slice(1)}
                                </Button>
                            ))}
                        </div>

                        <Card>
                            <CardContent className="p-4">
                                {(mode === "read" ? readMethods : writeMethods).map(
                                    (method, index) => (
                                        <div key={index} className="pb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                                {method.name}
                                            </h3>
                                            <div className="space-y-3">
                                                {method.params.map((param, paramIndex) => (
                                                    <div key={paramIndex}>
                                                        <label className="block text-sm text-gray-600 mb-1">
                                                            {param}
                                                        </label>
                                                        <Input placeholder={`Enter ${param}`} />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-end mt-3">
                                                <Button variant="default">
                                                    {mode === "read" ? "Read" : "Execute"}
                                                </Button>
                                            </div>
                                            {index !==
                                                (mode === "read" ? readMethods : writeMethods).length -
                                                1 && (
                                                    <div className="w-full h-[1px] bg-black mt-4"></div>
                                                )}
                                        </div>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
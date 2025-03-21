'use client';

import type React from 'react';

import { useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ConnectWalletButton } from '@/components/connect-wallet-button';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGlobalAuthenticationStore } from '@/components/auth/store/data';
import { useWallet } from '@/components/auth/hooks/useWallet.hook';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleConnect, handleDisconnect } = useWallet();
  const address = useGlobalAuthenticationStore((state) => state.address);

  return (
    <html lang="en">
      <body className={inter.className} cz-shortcut-listen="true">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-pink-500/20 bg-background/80 backdrop-blur-sm">
            <div className="container flex h-24 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500">
                  ScaffoldRust
                </span>
              </Link>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center gap-6">
                <nav className="flex gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/debug"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Smart Contract Debug
                  </Link>
                </nav>
                <ConnectWalletButton />
              </div>
            </div>
          </header>

          {/* Mobile menu overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div
            className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-background border-l border-pink-500/20 p-6 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500">
                ScaffoldRust
              </span>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/debug"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Smart Contract Debug
              </Link>
            </nav>

            <div className="mt-6">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (address) {
                    handleDisconnect();
                  } else {
                    handleConnect();
                  }
                }}
              >
                {address ? 'Disconnect Wallet' : 'Connect Wallet'}
              </Button>
            </div>
          </div>

          {children}

          <footer className="border-t border-pink-500/20 bg-background">
            <div className="container flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between md:py-8">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500"
                >
                  ScaffoldRust
                </Link>
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} ScaffoldRust. All rights reserved.
                </p>
              </div>
              <nav className="flex gap-4">
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

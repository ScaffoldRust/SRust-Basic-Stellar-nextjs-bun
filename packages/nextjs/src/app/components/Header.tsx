import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                className="dark:invert"
                src="/stellar-new-logo.jpg"
                alt="Next.js logo"
                width={50}
                height={10}
                priority
              />
              <span className="text-gray-900 text-xl font-semibold">
                Scaffold-Stellar
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/debug"
                  className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm flex items-center space-x-1"
                >
                  <span>Debug Contracts</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
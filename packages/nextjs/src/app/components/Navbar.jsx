'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useWallet } from '@/components/auth/hooks/useWallet.hook';
import { useGlobalAuthenticationStore } from '@/components/auth/store/data';
import { theme } from '@/components/utils/theme'; // Import the theme object

/**
 * Navbar Component
 *
 * This component renders the navigation bar, including:
 * - A logo linking to the homepage
 * - Navigation links for desktop users
 * - A responsive offcanvas menu for mobile users
 * - A connect/disconnect wallet button
 *
 * Future developers can customize the navigation links and styles by modifying
 * the JSX elements and Tailwind CSS classes within this file.
 */
const Navbar = () => {
  const { handleConnect, handleDisconnect } = useWallet();
  const address = useGlobalAuthenticationStore((state) => state.address);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for offcanvas menu

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo linking to the homepage */}
        <Link href="/" className="text-lg font-bold text-gray-800">
          ScaffoldRust
        </Link>

        {/* Hamburger Icon (Toggle Offcanvas Menu for mobile users) */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/debug" className="text-gray-700 hover:text-gray-900 transition-colors">
            Smart Contract Debug
          </Link>
          <Button
            onClick={address ? handleDisconnect : handleConnect}
            className={`bg-${theme.primaryColor} hover:bg-${theme.primaryColor}-dark text-white px-4 py-2 rounded`}
          >
            {address ? 'Disconnect Wallet' : 'Connect Wallet'}
          </Button>
        </div>
      </div>

      {/* Offcanvas Menu for mobile users */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsMenuOpen(false)} // Close on background click
      ></div>
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-bold">Scaffold-Rust</h5>
            <button onClick={() => setIsMenuOpen(false)} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Navigation Links */}
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/debug"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Smart Contract Debug
              </Link>
            </li>
          </ul>

          {/* Connect Wallet Button */}
          <div className="mt-4">
            <Button
              onClick={() => {
                setIsMenuOpen(false); // Close menu after clicking
                if (address) {
                  handleDisconnect();
                } else {
                  handleConnect();
                }
              }}
              className={`w-full bg-${theme.primaryColor} hover:bg-${theme.primaryColor}-dark text-white py-2 rounded`}
            >
              {address ? 'Disconnect Wallet' : 'Connect Wallet'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

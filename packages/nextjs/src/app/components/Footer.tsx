"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa"; // Import social media icons

/**
 * Footer Component
 *
 * This component renders the footer section of the application. It includes:
 * - About section
 * - Quick navigation links
 * - Social media links
 * - Copyright information
 *
 * Customization:
 * - Modify text content as needed.
 * - Add or remove links in the "Quick Links" section.
 * - Update social media links with actual URLs.
 */
const Footer = () => {
  return (
    <footer className="bg-bark py-8 text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Scaffold-Rust</h3>
            <p className="text-sm">
              ScaffoldRust is a powerful and customizable blockchain
              development template designed to help you build decentralized
              applications effortlessly.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-gray-300 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/debug"
                  className="hover:text-gray-300 transition-colors"
                >
                  Smart Contract Debug
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* GitHub Link */}
              <a
                href="https://github.com/ScaffoldRust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={24} title="GitHub" />
              </a>
              {/* Twitter Link */}
              <a
                href="https://twitter.com/ScaffoldRust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={24} title="Twitter" />
              </a>
              {/* Discord Link */}
              <a
                href="https://discord.gg/ScaffoldRust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaDiscord size={24} title="Discord" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright Information */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Scaffold-Rust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

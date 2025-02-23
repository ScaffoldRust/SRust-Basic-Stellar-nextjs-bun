'use client';

import { useGlobalAuthenticationStore } from "@/components/auth/store/data";
import Footer from "./components/Footer"; // Import the Footer component

/**
 * Home Page Component
 * 
 * This component serves as the main landing page for ScaffoldRust.
 * It features a hero section, call-to-action, and testimonials.
 * 
 * Customization Guide:
 * - To change the hero section background image, update the `backgroundImage` in the inline style.
 * - To modify the call-to-action button, adjust the text and styling inside the <button> element.
 * - To add or edit testimonials, update the testimonial array.
 */
export default function Home() {
  const address = useGlobalAuthenticationStore((state) => state.address);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-bark text-white">
      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center justify-center">
        {/* Hero Section */}
        <section
          className="relative w-full h-[500px] md:h-[800px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/Blockchain.jpeg")', // Replace with custom image
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to ScaffoldRust
            </h1>
            
            <p className="text-lg md:text-xl max-w-md mx-auto mt-4 pt-9">
            </p>

            <p className="text-lg md:text-xl max-w-md mx-auto mt-4 pt-9">
              ScaffoldRust helps developers build decentralized applications quickly and efficiently.
              A powerful and customizable blockchain development.
            </p>

          </div>
        </section>

        {/* Call to Action Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow-md"
        >
          Get Started
        </button>

        {/* Testimonial Section */}
        <section className="w-full max-w-6xl mx-auto p-8 bg-bark-card border border-gray-700 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16">
            Here's what our users think about ScaffoldRust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Cards */}
            {[
              {
                text: "ScaffoldRust has made blockchain development effortless. The customization options are fantastic!",
                author: "John Doe, Developer at Blockchain Co.",
              },
              {
                text: "I was skeptical at first, but ScaffoldRust exceeded my expectations. It's now my go-to template for smart contracts.",
                author: "Jane Smith, CTO at Crypto Solutions",
              },
              {
                text: "The ease of setup and integration with blockchain networks is unmatched. Highly recommend it for any project!",
                author: "Alex Johnson, Blockchain Enthusiast",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-bark-lighter border border-gray-700 rounded-lg p-6 transition-shadow hover:shadow-lg"
              >
                <blockquote className="text-gray-300">{testimonial.text}</blockquote>
                <footer className="mt-4 text-sm text-gray-400 text-right">
                  — {testimonial.author}
                </footer>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

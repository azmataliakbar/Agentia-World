"use client";

import { useState, useEffect, useMemo } from "react";
import { BotIcon as Robot } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const texts = useMemo(
    () => [
      "Hello! I'm your AI agent. How can I enhance your business today?",
      "I can help optimize your workflows with neural networks.",
      "Let me assist you with advanced data analytics.",
      "Would you like to explore our AI integration solutions?",
    ],
    []
  );

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); // Cursor blinking effect

  // Typing effect (SLOWER SPEED)
  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Slower typing speed (100ms per character)

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length); // Loop infinitely
      }, 2000); // Pause before next line
    }
  }, [charIndex, textIndex, texts]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 md:py-28 lg:py-28 xl:py-36 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex justify-center ">
          <h6 className="text-[15px text-white font-bold flex items-center space-x-3">
            {/* Animated Circle */}
            <span className="w-4 h-4 mr-4 rounded-full bg-purple-200 animate-breathe"></span>
            POWERED BY PANAVERSITY
          </h6>
          </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Enterprise AI Agents
              </span>
              <br />
              for the Future
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Powered by next-generation artificial intelligence
            </p>
          </div>
          <div className="w-full max-w-2xl space-y-2"> {/* Increased width */}
            <div className="relative border-2 border-gray-600 rounded-[10px] p-4 flex items-center bg-gray-950">
              
              {/* Robot Logo */}
              <Robot className="h-8 w-8 p-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-500" />
              {/* Input Wrapper */}
<div className="flex-1 bg-gray-900 pt-3 pl-2 ml-2 rounded-[10px] max-w-full">
  <textarea
    className="w-full min-h-[50px] max-h-[300px] bg-transparent text-sm lg:text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-y-auto"
    value={displayText + (showCursor ? "|" : "")} // Add blinking cursor
    readOnly
    placeholder="Typing..."
    aria-label="AI Assistant Input"
    rows={1}
    style={{ height: `${Math.min(5 + displayText.split(" ").length * 8, 300)}px` }} // Adjusts height dynamically
  />
</div>

  </div>
</div>

          <div className="space-x-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-[5px] bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:from-purple-600 hover:to-blue-600"
            >
              Deploy Your AI Agent
            </Link>
            <Link
              href="#"
              className="inline-flex mt-4 h-9 items-center justify-center rounded-[5px] border border-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

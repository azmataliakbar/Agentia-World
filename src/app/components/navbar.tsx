"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BotIcon as Robot, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const targetId = target.hash.replace("#", "")

      window.history.pushState({}, "", target.hash)

      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          const navbarHeight = 56 // Adjust based on your navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100) 
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll as EventListener)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll as EventListener)
      })
    }
  }, [])

  return (
    <header className="px-4 lg:px-16 h-14 flex items-center fixed w-full bg-black/80 backdrop-blur-sm z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Robot className="h-6 w-6 text-purple-500" />
        <span className="ml-2 text-xl font-bold text-white">Agentia World</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex ml-auto gap-6">
        <NavLinks />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto md:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black/90 backdrop-blur-md text-white flex flex-col items-center py-6 md:hidden">
          <NavLinks />
        </div>
      )}
    </header>
  )
}

// Navigation Links Component
const NavLinks = () => (
  <>
    <Link href="#neural-capabilities" className="text-sm font-medium hover:text-purple-400 transition-colors">
      Features
    </Link>
    <Link href="#powered-by-ai" className="text-sm font-medium hover:text-purple-400 transition-colors">
      Technology
    </Link>
    <Link href="#ai-solutions" className="text-sm font-medium hover:text-purple-400 transition-colors">
      Agents
    </Link>
    <Link href="#pricing-section" className="text-sm font-medium hover:text-purple-400 transition-colors">
      Pricing
    </Link>
    <Link href="#contact-section" className="text-sm font-medium hover:text-purple-400 transition-colors">
      Contact
    </Link>
  </>
)

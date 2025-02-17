import Link from "next/link"
import { BotIcon as Robot } from "lucide-react"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Robot className="h-6 w-6 text-purple-500" />
              <span className="text-lg font-bold">Agentia World</span>
            </Link>
            <p className="text-sm text-gray-400">
              Next-generation AI agents powering the future of enterprise intelligence.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2025 Agentia World. Powered by Panaversity. All rights reserved.</p>
          <br />
          <h6 className="text-sm text-gray-400">Author: Azmat Ali</h6>
        </div>
      </div>
    </footer>
  )
}


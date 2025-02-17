import { Mail, Github, Linkedin, Twitter, Earth } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="w-full py-8 md:py-20 lg:py-20 lg:px-16 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-8">Ready to transform your business with AI?</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-500" />
                <a href="mailto:contact@agentiaworld.com" className="text-gray-300 hover:text-purple-400">
                  contact@agentiaworld.com
                </a>
              </li>
              <li className="flex items-center">
                <Earth className="h-5 w-5 mr-2 text-purple-500" />
                <a href="/" className="text-gray-300 hover:text-purple-400">
                  www.agentiaworld.com
                </a>
              </li>
            </ul>
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
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full bg-gray-800 rounded-[10px] border-2 border-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="First Name"
                type="text"
              />
              <input
                className="w-full bg-gray-800 rounded-[10px] border-2 border-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <input
              className="w-full bg-gray-800 rounded-[10px] border-2 border-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email Address"
              type="email"
            />
            <textarea
              className="w-full bg-gray-800 rounded-[10px] border-2 border-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Message :"
              rows={4}
            ></textarea>
            <button
              className="w-full inline-flex h-10 items-center justify-center rounded-[10px] bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:from-purple-600 hover:to-blue-600"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}


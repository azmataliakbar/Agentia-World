import { Brain, Cpu, Code, Globe } from "lucide-react"

export default function PoweredByAI() {
  const technologies = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced neural architectures for complex decision making",
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "Sophisticated deep learning models for pattern recognition",
    },
    {
      icon: Code,
      title: "Advanced ML",
      description: "Cutting-edge machine learning algorithms",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Distributed AI processing across global networks",
    },
  ]

  return (
    <section className="w-full py-8 md:py-8 lg:py-8 lg:px-8 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Powered by Advanced AI
          </span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-8">Built on cutting-edge neural architectures</p>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-900 border-2 border-gray-600 rounded-[10px] ">
              <tech.icon className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Brain, MessageSquare, Code, Shield } from "lucide-react"

export default function NeuralCapabilities() {
  const capabilities = [
    {
      icon: Brain,
      title: "Autonomous Learning",
      description:
        "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
    },
    {
      icon: MessageSquare,
      title: "Multi-Modal Intelligence",
      description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
    },
    {
      icon: Code,
      title: "Cognitive Integration",
      description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
    },
    {
      icon: Shield,
      title: "Ethical AI Framework",
      description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
    },
  ]

  return (
    <section className="w-full py-8 md:py-8 lg:py-8 lg:px-8 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Neural Capabilities
          </span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-8">Powered by next-generation artificial intelligence</p>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4 ">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-900 border-gray-600 border-2 rounded-[10px]">
              <capability.icon className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
              <p className="text-gray-400">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


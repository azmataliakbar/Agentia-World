import { Building2, Network, ShieldCheck } from "lucide-react"

export default function AISolutions() {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise AI",
      description: "Custom AI agents designed for enterprise-scale operations and decision-making",
    },
    {
      icon: Network,
      title: "Neural Operations",
      description: "Automated workflow optimization through distributed neural networks",
    },
    {
      icon: ShieldCheck,
      title: "Secure Intelligence",
      description: "Privacy-first AI solutions with military-grade security protocols",
    },
  ]

  return (
    <section className="w-full py-8 md:py-8 lg:py-8 lg:px-8 bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            AI Solutions
          </span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-8">Transforming industries with intelligent agents</p>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-black border-2 border-gray-600 rounded-[10px] ">
              <solution.icon className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      features: [
        "2 AI Agent Instances",
        "Basic Neural Processing",
        "24/7 Support",
        "Weekly Analytics",
        "Basic Integration Support",
      ],
    },
    {
      name: "Professional",
      price: "$999",
      features: [
        "10 AI Agent Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Agents",
        "Full Neural Suite",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom Development",
        "Full API Access",
        "Enterprise Security",
        "Custom Training",
      ],
    },
  ]

  return (
    <section className="w-full py-8 md:py-8 lg:py-8 lg:px-8 bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Choose Your Plan
          </span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-8">Scale your AI capabilities with our flexible pricing</p>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className= {`flex flex-col p-6 bg-black rounded-xl ${index === 1 ? "border-2 border-purple-500" : ""}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-purple-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto inline-flex h-10 items-center justify-center rounded-[10px] bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:from-purple-600 hover:to-blue-600">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


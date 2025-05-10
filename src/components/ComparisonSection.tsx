"use client"
import { Check, X } from "lucide-react"

interface ProviderPlan {
  provider: string
  logo: string
  internet: {
    speed: string
    price: string
    priceRange?: boolean
    dataCaps: boolean
    contract: string
    equipment: string
    installation: string
    description?: string
  }
}

const providers: ProviderPlan[] = [
  {
    provider: "Residential",
    logo: "https://placehold.co/80x40/1A3A5F/FFFFFF?text=Residential",
    internet: {
      speed: "Low Latency Unlimited Speed",
      price: "120",
      priceRange: false,
      dataCaps: false,
      contract: "12 months",
      equipment: "Included",
      installation: "Professional installation",
      description: "Stable and secure connectivity for your residence",
    },
  },
  {
    provider: "Roam",
    logo: "https://placehold.co/80x40/FF7F50/FFFFFF?text=Roam",
    internet: {
      speed: "Up to 500 Mbps",
      price: "50 - 165",
      priceRange: true,
      dataCaps: true,
      contract: "No contract",
      equipment: "$15/mo",
      installation: "Self-install",
      description: "Reliable high-speed connectivity at sea",
    },
  },
  {
    provider: "Boat",
    logo: "https://placehold.co/80x40/0BBEAD/FFFFFF?text=Boat",
    internet: {
      speed: "Up to 300 Mbps",
      price: "50 - 165",
      priceRange: true,
      dataCaps: false,
      contract: "No contract",
      equipment: "Included",
      installation: "Professional installation",
      description: "Stable and secure connectivity on open waters",
    },
  },
]

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy mb-4">Compare Satellite Internet Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how different satellite internet providers stack up against each other to find the best fit for your
            needs.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Provider
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Speed
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Data Caps
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Contract
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Installation
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {providers.map((provider, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={provider.logo || "/placeholder.svg"}
                        alt={provider.provider}
                        className="h-8 w-auto mr-3"
                      />
                      <span className="font-medium">{provider.provider}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-navy font-medium">{provider.internet.speed}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {provider.internet.priceRange ? `$${provider.internet.price}/mo` : `$${provider.internet.price}/mo`}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {provider.internet.dataCaps ? (
                      <X className="text-red-500 h-5 w-5" />
                    ) : (
                      <Check className="text-green-500 h-5 w-5" />
                    )}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">{provider.internet.contract}</td>
                  <td className="py-4 px-6 whitespace-nowrap">{provider.internet.equipment}</td>
                  <td className="py-4 px-6 whitespace-nowrap">{provider.internet.installation}</td>
                  <td className="py-4 px-6 whitespace-nowrap max-w-xs truncate">{provider.internet.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>* Prices may vary by location and are subject to change. Additional fees and taxes may apply.</p>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection

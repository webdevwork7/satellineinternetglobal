"use client"

import { motion } from "framer-motion"
import { Layers, Search, Star } from "lucide-react"

const MethodologySection = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-teal" />,
      title: "Research & Data Collection",
      description:
        "We continuously gather data from hundreds of providers across the nation, ensuring our information is accurate and up-to-date.",
    },
    {
      icon: <Layers className="h-10 w-10 text-teal" />,
      title: "Comprehensive Analysis",
      description:
        "Our experts analyze every aspect of service plans including speed, channels, reliability, customer service, and hidden fees.",
    },
    {
      icon: <Star className="h-10 w-10 text-teal" />,
      title: "Unbiased Recommendations",
      description:
        "We provide personalized recommendations based on your unique needs, not commission rates or partnerships.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-navy/10 to-teal/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Methodology</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            How we ensure you get the best recommendations for TV and internet services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-teal"
            >
              <div className="bg-light rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-teal to-navy text-white p-8 rounded-xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Commitment to Accuracy</h3>
          <p className="mb-4">
            We update our database daily to ensure you have access to the most current offers and promotions available
            in your area.
          </p>
          <p>
            Our team personally tests services and equipment to provide authentic, first-hand insights about the
            products we recommend.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MethodologySection

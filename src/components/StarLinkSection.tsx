"use client";

import { motion } from "framer-motion";
import { Satellite, Wifi, Globe, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const StarLinkSection = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+18889701698";
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy to-teal/90 opacity-95"></div>

      {/* Animated satellite illustration in background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96"
        >
          <Satellite className="w-full h-full text-white" />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-teal/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected with StarLink Satellite Internet Deals
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience lightning-fast internet anywhere with revolutionary
            satellite technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Satellite className="h-10 w-10 text-teal" />,
              title: "Global Coverage",
              description:
                "Connect from virtually anywhere on the planet with low-orbit satellite technology",
            },
            {
              icon: <Wifi className="h-10 w-10 text-teal" />,
              title: "High-Speed Performance",
              description:
                "Enjoy download speeds of 100-200 Mbps with low latency for seamless streaming and gaming",
            },
            {
              icon: <Globe className="h-10 w-10 text-teal" />,
              title: "Easy Setup",
              description:
                "Self-install your satellite dish with automated positioning for optimal signal strength",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">
                {feature.title}
              </h3>
              <p className="text-white/80 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-orange to-orange/70 p-1 rounded-lg mb-8">
            <p className="bg-navy px-6 py-2 rounded-md text-white font-medium">
              Limited Time Offer: Get $100 off equipment with new StarLink
              subscriptions
            </p>
          </div>

          <Button
            onClick={handleCallNow}
            className="bg-orange hover:bg-orange/90 text-white font-bold py-6 px-8 rounded-lg transition-colors flex items-center gap-2 mx-auto text-lg"
          >
            <PhoneCall className="h-5 w-5" />
            Call Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StarLinkSection;

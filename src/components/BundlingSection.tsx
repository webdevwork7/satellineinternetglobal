"use client";

import { motion } from "framer-motion";
import { Package, Phone, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BundlingSection = () => {
  const benefits = [
    {
      title: "Cost Savings",
      description:
        "Bundle discounts can save you up to 30% compared to purchasing services separately.",
    },
    {
      title: "Single Bill",
      description:
        "Manage just one monthly statement for all your communication services.",
    },
    {
      title: "Simplified Support",
      description:
        "One point of contact for customer service and technical issues.",
    },
    {
      title: "Promotional Incentives",
      description:
        "Access to exclusive deals, premium channels, and enhanced equipment.",
    },
  ];

  const considerations = [
    "Do you use both services equally?",
    "Are there standalone providers with better service in your area?",
    "Will you use all features included in the bundle?",
    "How important is having the newest technology vs. cost savings?",
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Should You Consider Bundling Satellite Internet?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Understanding whether a bundle is right for your connectivity needs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6 justify-center">
              <div className="bg-teal/10 rounded-full p-3">
                <Package className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-navy">
                Benefits of Bundling
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-shadow">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h4 className="font-bold text-navy mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-orange to-orange/80 text-white p-6 rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-4 justify-center">
                <Gift className="h-6 w-6" />
                <h4 className="font-bold text-xl">
                  Claim Your Free $100 Prepaid Card Today!
                </h4>
              </div>
              <p className="text-white/90 text-center mb-4">
                Order Now and Claim Your Free $100 Prepaid Card! Don't miss this
                limited-time offer! Place your order today and receive a $100
                prepaid card for shopping, dining, or bills. Hurry—claim yours
                now!
              </p>
              <div className="flex justify-center mt-4">
                <Button
                  onClick={() => (window.location.href = "tel:+18889701698")}
                  className="bg-white text-orange hover:bg-white/90 font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BundlingSection;

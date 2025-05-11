"use client";

import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+18889701698";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find the Best Satellite Internet Deals in Your Area
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Talk to our experts and discover special satellite internet offers
            available near you.
          </p>

          <div className="max-w-md mx-auto">
            <Button
              onClick={handleCallNow}
              className="bg-orange hover:bg-orange/90 text-white font-bold py-6 px-8 rounded-lg transition-colors flex items-center gap-2 mx-auto"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now & Talk to an Expert
            </Button>

            <p className="mt-4 text-center text-white/80">
              <span className="inline-flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Direct line:{" "}
                <a
                  href="tel:+18889701698"
                  className="font-bold underline ml-1 hover:text-white transition-colors"
                >
                  +1 (888) 970-1698
                </a>
              </span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-xl font-bold mr-2">
                Seamless Connectivity
              </span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-xl font-bold mr-2">
                Claim Your Free $100 Card
              </span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-xl font-bold mr-2">
                Fast, Reliable Internet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

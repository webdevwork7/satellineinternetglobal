"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, Satellite, Zap } from "lucide-react";

// Change the providers array to only include the three satellite providers
const providers = [
  {
    id: 1,
    name: "Residential",
    logo: "https://placehold.co/140x70/1A3A5F/FFFFFF?text=Residential",
  },
  {
    id: 2,
    name: "Roam",
    logo: "https://placehold.co/140x70/FF7F50/FFFFFF?text=Roam",
  },
  {
    id: 3,
    name: "Boat",
    logo: "https://placehold.co/140x70/0BBEAD/FFFFFF?text=Boat",
  },
];

// Update the component to focus only on satellite internet
const ProviderSection = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+18889701698";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Top Internet Providers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with the nation's leading providers to bring you the best
            deals on internet packages.
          </p>
        </div>

        <div className="mb-8">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-8 py-4 px-1 justify-center">
              {providers.map((provider) => (
                <div
                  key={provider.id}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={provider.logo || "/placeholder.svg"}
                    alt={`${provider.name} logo`}
                    className="h-12 sm:h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex justify-center mt-12">
          <div className="bg-light p-8 rounded-lg shadow-md max-w-3xl w-full">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Satellite Internet
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-teal mb-4 flex items-center">
                  <span className="bg-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <Satellite className="h-4 w-4" />
                  </span>
                  What Is It?
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Beams internet signals from space to a dish at your
                      location
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Works virtually anywhere with a clear view of the sky
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Ideal for remote areas without traditional internet
                      options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Perfect for maritime vessels and mobile applications
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-teal mb-4 flex items-center">
                  <span className="bg-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <Zap className="h-4 w-4" />
                  </span>
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>Global coverage regardless of your location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Modern LEO satellites offer lower latency than ever before
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Speeds suitable for streaming, video calls, and everyday
                      use
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Freedom to stay connected wherever life takes you
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={handleCallNow}
            className="bg-orange hover:bg-orange/90 text-white flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProviderSection;

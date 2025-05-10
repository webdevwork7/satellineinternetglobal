import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about satellite internet services,
            plans, and providers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                How does satellite internet work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Satellite internet works by transmitting data between your
                  location, a satellite in orbit, and ground stations. When you
                  request information online, the signal travels from your
                  satellite dish to the orbiting satellite, then to a ground
                  station connected to the internet. The data returns via the
                  same path in reverse. Modern satellite internet systems use
                  advanced technology to provide reliable connections virtually
                  anywhere on the planet, making it ideal for remote locations
                  where traditional internet services aren't available.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                What speeds can I expect with satellite internet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Satellite internet speeds vary by plan and provider:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Residential Plan: Low latency with unlimited speeds, ideal
                    for streaming, gaming, and video conferencing
                  </li>
                  <li>
                    Roam Plan: Up to 500 Mbps, perfect for on-the-go
                    connectivity with reliable performance
                  </li>
                  <li>
                    Boat Plan: Up to 300 Mbps, designed for maritime use with
                    stable connections on open waters
                  </li>
                </ul>
                <p className="mt-2">
                  Actual speeds may vary based on your location, weather
                  conditions, and network congestion. Most users experience
                  speeds sufficient for streaming HD video, video conferencing,
                  and general internet usage.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                What equipment do I need for satellite internet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Standard satellite internet equipment includes:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Satellite dish/antenna (installed outside with clear view of
                    the sky)
                  </li>
                  <li>
                    Modem/router (connects your devices to the satellite
                    network)
                  </li>
                  <li>Cables and mounting hardware</li>
                </ul>
                <p className="mt-2">
                  Equipment may be included in your plan or available for
                  purchase/lease depending on your chosen provider and plan. Our
                  Residential Plan includes all necessary equipment, while other
                  plans may have different equipment arrangements. Professional
                  installation is available for most plans to ensure optimal
                  positioning and setup.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                Does weather affect satellite internet performance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Yes, severe weather conditions can temporarily impact
                  satellite internet performance. Heavy rain, snow, or dense
                  cloud cover may cause signal attenuation (weakening) as the
                  signal travels through the atmosphere. Modern satellite
                  systems are designed to minimize these effects, but during
                  extreme weather events, you might experience:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Temporarily reduced speeds</li>
                  <li>Slightly higher latency</li>
                  <li>In rare cases, brief service interruptions</li>
                </ul>
                <p className="mt-2">
                  Most weather-related disruptions are brief and resolve when
                  conditions improve. Our systems include advanced technologies
                  to maintain connections even during challenging weather
                  conditions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                Are there data caps with satellite internet plans?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Data policies vary by plan:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Residential Plan: No data caps, offering truly unlimited
                    usage
                  </li>
                  <li>
                    Roam Plan: Tiered data options, with plans ranging from 50GB
                    to unlimited data
                  </li>
                  <li>
                    Boat Plan: Flexible data options from 50GB to 1024GB, with
                    the ability to upgrade as needed
                  </li>
                </ul>
                <p className="mt-2">
                  We recommend choosing a plan that matches your typical usage
                  patterns. For households that stream video, use video
                  conferencing, or have multiple connected devices, plans with
                  higher or unlimited data allowances are recommended.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                How is satellite internet installed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Installation typically involves:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>
                    Site survey to determine optimal dish placement with clear
                    view of the sky
                  </li>
                  <li>
                    Mounting the satellite dish securely on your roof, wall, or
                    ground pole
                  </li>
                  <li>Running cables from the dish to your indoor equipment</li>
                  <li>Setting up and configuring your modem/router</li>
                  <li>Testing the connection and optimizing signal strength</li>
                </ol>
                <p className="mt-2">
                  Professional installation is recommended and included with
                  some plans. For Residential and Boat plans, our technicians
                  handle the entire process. The Roam plan offers a
                  self-installation option with comprehensive instructions and
                  support. Installation typically takes 2-3 hours, depending on
                  your specific location and requirements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                What are the contract terms for satellite internet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Contract terms vary by plan:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Residential Plan: 12-month service agreement with guaranteed
                    pricing
                  </li>
                  <li>
                    Roam Plan: No long-term contract required, flexible
                    month-to-month service
                  </li>
                  <li>
                    Boat Plan: No long-term contract, with seasonal options
                    available
                  </li>
                </ul>
                <p className="mt-2">
                  Early termination fees may apply to the Residential Plan if
                  canceled before the 12-month period. All plans include our
                  30-day satisfaction guarantee, allowing you to try the service
                  and ensure it meets your needs. Our representatives can
                  provide complete details on terms and conditions for each
                  plan.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left text-navy hover:text-teal">
                Can I use satellite internet for streaming and gaming?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Yes, modern satellite internet is suitable for streaming and
                  many gaming applications:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Streaming: All our plans support standard and HD streaming
                    from services like Netflix, Hulu, and YouTube. The
                    Residential Plan can handle multiple simultaneous streams
                    and 4K content.
                  </li>
                  <li>
                    Gaming: Online gaming is supported, with the Residential
                    Plan offering the best experience due to its lower latency.
                    While satellite internet has improved dramatically,
                    competitive fast-twitch gaming may still experience some
                    latency compared to fiber connections.
                  </li>
                </ul>
                <p className="mt-2">
                  For the best streaming and gaming experience, we recommend our
                  Residential Plan with its low latency and unlimited data.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 p-5 bg-light rounded-lg border border-gray-200">
            <p className="font-medium text-navy">Still have questions?</p>
            <p className="text-gray-600 mt-2">
              Our connectivity experts are available 7 days a week to help you
              find the perfect satellite internet plan.
            </p>
            <div className="mt-4 flex items-center">
              <Phone className="h-4 w-4 text-teal mr-2" />
              <a
                href="tel:+18889701698"
                className="text-teal font-medium hover:underline"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

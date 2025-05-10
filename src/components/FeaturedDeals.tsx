import { Check, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Deal {
  id: number;
  provider: string;
  logo: string;
  planName: string;
  price: string;
  originalPrice?: number;
  speed: string;
  channels?: string;
  features: string[];
  popular: boolean;
}

const deals: Deal[] = [
  {
    id: 1,
    provider: "Residential",
    logo: "https://placehold.co/80x40/1A3A5F/FFFFFF?text=Residential",
    planName: "Residential Plan",
    price: "120",
    speed: "Low Latency Unlimited Speed",
    features: [
      "No data caps",
      "Stable and secure connectivity for your residence",
      "Enjoy seamless streaming and browsing",
      "Round-the-clock customer support",
      "99.9% reliability",
    ],
    popular: true,
  },
  {
    id: 2,
    provider: "Roam",
    logo: "https://placehold.co/80x40/FF7F50/FFFFFF?text=Roam",
    planName: "Roam Plan",
    price: "50 - 165",
    speed: "Up to 500 Mbps",
    channels: "Unlimited",
    features: [
      "Reliable high-speed connectivity at sea",
      "24/7 onboard technical support",
      "Smooth streaming and seamless navigation",
      "Multi-device connectivity with secure encryption",
      "99.9% reliability",
    ],
    popular: false,
  },
  {
    id: 3,
    provider: "Boat",
    logo: "https://placehold.co/80x40/0BBEAD/FFFFFF?text=Boat",
    planName: "Boat Plan",
    price: "50 - 165",
    speed: "Up to 300 Mbps",
    channels: "165+ channels",
    features: [
      "Stable and secure connectivity on open waters",
      "Enjoy seamless streaming and browsing while offshore",
      "Round-the-clock customer support",
      "Weather-resistant equipment with easy installation",
      "End-to-end encryption for secure communications",
    ],
    popular: false,
  },
];

const FeaturedDeals = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Trending Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare the best internet packages with exclusive online discounts.
            Plans updated daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`opacity-0 animate-fade-in ${
                index === 0
                  ? "animate-delay-100"
                  : index === 1
                  ? "animate-delay-200"
                  : "animate-delay-300"
              }`}
            >
              <Card
                className={`h-full flex flex-col card-shadow ${
                  deal.popular ? "border-teal border-2" : ""
                }`}
              >
                {deal.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal hover:bg-teal/90 text-white flex items-center gap-1 px-3 py-1">
                      <Star className="h-3 w-3 fill-white" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <img
                      src={deal.logo || "/placeholder.svg"}
                      alt={`${deal.provider} logo`}
                      className="h-10"
                    />
                  </div>
                  <CardTitle className="text-center text-xl">
                    {deal.planName}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {deal.provider}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-6 text-center">
                    <div className="flex items-center justify-center">
                      {deal.originalPrice && (
                        <span className="text-gray-500 line-through mr-2">
                          ${deal.originalPrice}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-navy">
                        ${deal.price}
                      </span>
                      <span className="text-gray-500 ml-1">/mo</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {deal.id === 1
                        ? "for 12 months + taxes"
                        : deal.id === 2
                        ? "ROAM-50GB: $50/mo | Unlimited: $165/mo"
                        : "Mobile 50GB: $50/mo | 1024GB: $165/mo"}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600">Internet Speed</p>
                    <p className="font-bold text-navy">{deal.speed}</p>

                    {deal.channels && (
                      <>
                        <div className="h-px bg-gray-200 my-3"></div>
                        <p className="text-sm text-gray-600">Package</p>
                        <p className="font-bold text-navy">{deal.channels}</p>
                      </>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Plan Features:</h4>
                    <ul className="space-y-2">
                      {deal.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-teal w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-navy hover:bg-navy/90 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button className="bg-teal hover:bg-teal/90 flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Call Now & Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;

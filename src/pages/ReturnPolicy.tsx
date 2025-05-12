import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  CalendarClock,
  RefreshCw,
  AlertCircle,
  CreditCard,
} from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Return & Cancellation Policy
              </h1>
              <p className="text-xl text-white/90">
                Our policies regarding cancellations, refunds, and payments
              </p>
              <div className="mt-8 text-sm text-white/80">
                Last Updated: May 12, 2025
              </div>
            </div>
          </div>
        </section>

        {/* Return Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  1. Cancellation Policy
                </h2>
                <div className="bg-light p-6 rounded-lg mb-8">
                  <p>
                    We understand that plans may change. To cancel an order or
                    service and receive a full refund, requests must be
                    submitted in writing at least 15 days before the scheduled
                    delivery or service activation date. Cancellations made
                    after this period may not qualify for a refund.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-navy mb-6 mt-10">
                  2. Refund Policy
                </h2>
                <div className="bg-light p-6 rounded-lg mb-8">
                  <p className="mb-4">
                    Refund requests must be made within 15 days of receiving the
                    product or service. After this period, all sales are
                    considered final.
                  </p>

                  <h3 className="text-xl font-semibold text-navy mb-2">
                    Eligible Refunds:
                  </h3>
                  <p className="mb-4">
                    Refunds apply to items returned in their original condition
                    or for services not rendered as agreed.
                  </p>

                  <h3 className="text-xl font-semibold text-navy mb-2">
                    Ineligible Refunds:
                  </h3>
                  <p>
                    Refunds are not available for items damaged due to misuse or
                    for returns initiated beyond the 15-day window.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-navy mb-6 mt-10">
                  3. Non-Payment Policy
                </h2>
                <div className="bg-light p-6 rounded-lg mb-8">
                  <p>
                    To ensure uninterrupted service, payments must be made on
                    time. If payment is not received within one day of the
                    invoice date, service will be suspended until full payment
                    is received. We encourage prompt payments to avoid
                    disruptions.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-navy mb-6 mt-10">
                  4. Payment Acknowledgment
                </h2>
                <div className="bg-light p-6 rounded-lg mb-8">
                  <p>
                    By completing a payment, the customer confirms that the
                    products or services have been delivered as agreed. Any
                    concerns or disputes must be reported within 15 days of
                    payment. After this period, the sale is considered final.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-navy mb-6 mt-10">
                  Contact Information
                </h2>
                <p>
                  For questions about our return and cancellation policies or to
                  initiate a return or cancellation, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@linkify.com"
                    className="text-teal hover:underline"
                  >
                    support@linkify.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+18889701698"
                    className="text-teal hover:underline"
                  >
                    +1 (888) 970-1698
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Features */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              Key Policy Points
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <CalendarClock className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  15-Day Window
                </h3>
                <p className="text-gray-600">
                  All cancellations and refund requests must be made within 15
                  days
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <RefreshCw className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Original Condition
                </h3>
                <p className="text-gray-600">
                  Items must be returned in their original condition to qualify
                  for refunds
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <AlertCircle className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Service Suspension
                </h3>
                <p className="text-gray-600">
                  Service suspended if payment not received within one day of
                  invoice
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <CreditCard className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Payment Confirmation
                </h3>
                <p className="text-gray-600">
                  Payment confirms delivery of products or services as agreed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;

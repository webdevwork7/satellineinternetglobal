import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Shipping Policy
              </h1>
              <p className="text-xl text-white/90">
                Information about our equipment delivery and installation
                process
              </p>
              <div className="mt-8 text-sm text-white/80">
                Last Updated: May 12, 2025
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Delivery Timeframes
                </h2>
                <p>
                  At Linkify, we strive to deliver your satellite internet
                  equipment as quickly as possible. Standard delivery timeframes
                  are as follows:
                </p>
                <ul>
                  <li>Urban areas: 3-5 business days</li>
                  <li>Suburban areas: 5-7 business days</li>
                  <li>Rural areas: 7-10 business days</li>
                </ul>
                <p>
                  Please note that these timeframes are estimates and may vary
                  based on inventory availability, weather conditions, and other
                  factors outside our control.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Shipping Carriers
                </h2>
                <p>
                  We partner with reputable shipping carriers including FedEx,
                  UPS, and USPS to ensure your equipment arrives safely. The
                  specific carrier used for your delivery will depend on your
                  location and the equipment being shipped.
                </p>
                <p>
                  Once your order is processed, you will receive a confirmation
                  email with tracking information, allowing you to monitor your
                  shipment's progress.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Installation Appointments
                </h2>
                <p>
                  For equipment requiring professional installation, our
                  customer service team will contact you within 2 business days
                  of your order to schedule an installation appointment at a
                  time convenient for you.
                </p>
                <p>
                  Installation appointments are typically available Monday
                  through Saturday, 8:00 AM to 6:00 PM local time. Our
                  technicians will call approximately 30 minutes before arrival
                  on the day of installation.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Shipping Costs
                </h2>
                <p>
                  Standard shipping is included at no additional cost for all
                  equipment purchases and leases. Expedited shipping options are
                  available for an additional fee, which will be clearly
                  displayed during the checkout process.
                </p>
                <p>
                  For customers in extremely remote locations, additional
                  shipping surcharges may apply. These will be communicated to
                  you before your order is finalized.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  International Shipping
                </h2>
                <p>
                  At this time, we only ship equipment within the continental
                  United States, Alaska, Hawaii, and select U.S. territories.
                  International shipping is not currently available.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Damaged or Missing Items
                </h2>
                <p>
                  We carefully inspect and package all equipment before
                  shipping. If your equipment arrives damaged or if any
                  components are missing, please contact our customer service
                  team within 48 hours of delivery.
                </p>
                <p>
                  Please keep all original packaging materials and take photos
                  of any damage for our claims process. Our team will work
                  quickly to resolve the issue by sending replacement parts or
                  scheduling a new delivery.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Contact Information
                </h2>
                <p>
                  For questions about shipping or to check on an order, please
                  contact us at:
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

        {/* Shipping Features */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              Our Shipping Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Package className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Order Processing
                </h3>
                <p className="text-gray-600">
                  Orders are processed within 1-2 business days after payment
                  confirmation
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Truck className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Shipping</h3>
                <p className="text-gray-600">
                  Equipment is carefully packaged and shipped via trusted
                  carriers
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Clock className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Scheduling</h3>
                <p className="text-gray-600">
                  Our team contacts you to schedule professional installation
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Installation
                </h3>
                <p className="text-gray-600">
                  Professional technicians install and optimize your equipment
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

export default ShippingPolicy;

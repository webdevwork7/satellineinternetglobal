import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AlertTriangle, Info, Shield, Scale } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Disclaimer
              </h1>
              <p className="text-xl text-white/90">
                Important information about our website content and services
              </p>
              <div className="mt-8 text-sm text-white/80">
                Last Updated: May 12, 2025
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Website Information Disclaimer
                </h2>
                <p>
                  The information provided on this website is for general
                  informational purposes only. While we strive to keep the
                  information up to date and accurate, we make no
                  representations or warranties of any kind, express or implied,
                  about the completeness, accuracy, reliability, suitability, or
                  availability of the website or the information, products,
                  services, or related graphics contained on the website for any
                  purpose.
                </p>
                <p>
                  Any reliance you place on such information is therefore
                  strictly at your own risk. In no event will we be liable for
                  any loss or damage including without limitation, indirect or
                  consequential loss or damage, or any loss or damage whatsoever
                  arising from loss of data or profits arising out of, or in
                  connection with, the use of this website.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Service Availability and Performance
                </h2>
                <p>
                  Satellite internet service availability, speeds, and
                  performance are subject to various factors including but not
                  limited to:
                </p>
                <ul>
                  <li>Geographic location and line of sight to satellites</li>
                  <li>Weather conditions and atmospheric disturbances</li>
                  <li>Network congestion and capacity</li>
                  <li>Customer equipment and configuration</li>
                </ul>
                <p>
                  Actual speeds and performance may vary and are not guaranteed.
                  The maximum advertised speeds represent optimal conditions and
                  may not be achievable in all circumstances or locations.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Pricing and Promotions
                </h2>
                <p>
                  All pricing, promotions, and offers displayed on this website
                  are subject to change without notice. Promotional pricing is
                  typically for a limited time and may require a minimum service
                  commitment. Additional fees such as equipment costs,
                  installation fees, taxes, and surcharges may apply and may not
                  be included in advertised pricing.
                </p>
                <p>
                  Please contact our customer service team for the most current
                  pricing and promotion details specific to your location and
                  service needs.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Third-Party Links
                </h2>
                <p>
                  This website may contain links to third-party websites or
                  services that are not owned or controlled by
                  satelliteinternetglobal. We have no control over, and assume
                  no responsibility for, the content, privacy policies, or
                  practices of any third-party websites or services.
                </p>
                <p>
                  You acknowledge and agree that satelliteinternetglobal shall
                  not be responsible or liable, directly or indirectly, for any
                  damage or loss caused or alleged to be caused by or in
                  connection with the use of or reliance on any such content,
                  goods, or services available on or through any such websites
                  or services.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Fair Usage Policies
                </h2>
                <p>
                  Our satellite internet services are subject to Fair Usage
                  Policies designed to ensure equitable access to network
                  resources for all customers. These policies may include data
                  usage thresholds that, when exceeded, could result in reduced
                  speeds during network congestion periods.
                </p>
                <p>
                  These policies are not intended to limit your usage but rather
                  to ensure that the activities of a few users do not negatively
                  impact the experience of the majority. For specific details
                  about our Fair Usage Policies, please refer to your service
                  agreement or contact customer service.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Changes to This Disclaimer
                </h2>
                <p>
                  We may update this disclaimer from time to time. We will
                  notify you of any changes by posting the new disclaimer on
                  this page. You are advised to review this disclaimer
                  periodically for any changes.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Contact Information
                </h2>
                <p>
                  If you have any questions about this disclaimer, please
                  contact us at:
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@satelliteinternetglobal.com"
                    className="text-teal hover:underline"
                  >
                    support@satelliteinternetglobal.com
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

        {/* Disclaimer Features */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              Important Notices
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <AlertTriangle className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Service Limitations
                </h3>
                <p className="text-gray-600">
                  Satellite internet performance may vary based on location and
                  conditions
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Info className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Informational Only
                </h3>
                <p className="text-gray-600">
                  Website content is provided for general information purposes
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Fair Usage</h3>
                <p className="text-gray-600">
                  Services subject to Fair Usage Policies to ensure network
                  quality
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Scale className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  Legal Compliance
                </h3>
                <p className="text-gray-600">
                  We adhere to all applicable laws and regulations in our
                  operations
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

export default Disclaimer;

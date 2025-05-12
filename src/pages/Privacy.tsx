import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye } from "lucide-react";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/90">
                Your privacy matters to us. Learn how we collect, use, and
                protect your information.
              </p>
              <div className="mt-8 text-sm text-white/80">
                Last Updated: May 10, 2025
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Introduction
                </h2>
                <p>
                  At Satellite Internet Global ("we," "our," or "us"), we
                  respect your privacy and are committed to protecting your
                  personal information. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website, use our satellite internet services, or
                  interact with us in any way.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or
                  using our services, you acknowledge that you have read,
                  understood, and agree to be bound by all the terms outlined in
                  this policy.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Information We Collect
                </h2>
                <p>
                  We may collect several types of information from and about
                  users of our services, including:
                </p>
                <ul>
                  <li>
                    <strong>Personal Information:</strong> Name, postal address,
                    email address, telephone number, billing information, and
                    any other identifier by which you may be contacted online or
                    offline.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about your internet
                    connection, the equipment you use to access our services,
                    usage details, and browsing patterns.
                  </li>
                  <li>
                    <strong>Service Data:</strong> Information related to your
                    satellite internet service, including connection speeds,
                    data usage, and service interruptions.
                  </li>
                  <li>
                    <strong>Customer Service Interactions:</strong> Records of
                    your communications with our customer service team.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  How We Collect Information
                </h2>
                <p>We collect information through:</p>
                <ul>
                  <li>
                    Direct interactions when you provide information to us
                  </li>
                  <li>
                    Automated technologies or interactions as you navigate
                    through our website
                  </li>
                  <li>Third parties or publicly available sources</li>
                  <li>Our network equipment and service monitoring systems</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  How We Use Your Information
                </h2>
                <p>
                  We may use the information we collect about you for various
                  purposes, including:
                </p>
                <ul>
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing payments and billing</li>
                  <li>
                    Communicating with you about service updates, offers, and
                    promotions
                  </li>
                  <li>
                    Responding to your inquiries and providing customer support
                  </li>
                  <li>Monitoring and analyzing usage patterns and trends</li>
                  <li>
                    Protecting our services and users from fraudulent or illegal
                    activity
                  </li>
                  <li>Complying with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Disclosure of Your Information
                </h2>
                <p>
                  We may disclose personal information that we collect or you
                  provide:
                </p>
                <ul>
                  <li>To our subsidiaries and affiliates</li>
                  <li>
                    To contractors, service providers, and other third parties
                    we use to support our business
                  </li>
                  <li>To fulfill the purpose for which you provide it</li>
                  <li>
                    For any other purpose disclosed by us when you provide the
                    information
                  </li>
                  <li>With your consent</li>
                  <li>To comply with any court order, law, or legal process</li>
                  <li>To enforce our terms of service</li>
                  <li>
                    If we believe disclosure is necessary to protect the rights,
                    property, or safety of satelliteinternetglobal, our
                    customers, or others
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Data Security
                </h2>
                <p>
                  We have implemented measures designed to secure your personal
                  information from accidental loss and from unauthorized access,
                  use, alteration, and disclosure. All information you provide
                  to us is stored on secure servers behind firewalls.
                </p>
                <p>
                  Unfortunately, the transmission of information via the
                  internet is not completely secure. Although we do our best to
                  protect your personal information, we cannot guarantee the
                  security of your personal information transmitted to our
                  website. Any transmission of personal information is at your
                  own risk.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Your Choices About Your Information
                </h2>
                <p>
                  We strive to provide you with choices regarding the personal
                  information you provide to us:
                </p>
                <ul>
                  <li>
                    You can review and change your personal information by
                    logging into your account and visiting your account profile
                    page.
                  </li>
                  <li>
                    You can opt-out of receiving promotional emails by following
                    the unsubscribe instructions in each email.
                  </li>
                  <li>
                    You can request access to, correction of, or deletion of
                    your personal information by contacting us directly.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Changes to Our Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. If we make
                  material changes to how we treat our users' personal
                  information, we will notify you through a notice on the
                  website home page or via email.
                </p>
                <p>
                  The date the Privacy Policy was last revised is identified at
                  the top of the page. You are responsible for ensuring we have
                  an up-to-date active and deliverable email address for you,
                  and for periodically visiting our website and this Privacy
                  Policy to check for any changes.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  Contact Information
                </h2>
                <p>
                  To ask questions or comment about this Privacy Policy and our
                  privacy practices, contact us at:
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@satelliteinternetglobal.com"
                    className="text-teal hover:underline"
                  >
                    privacy@satelliteinternetglobal.com
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
                <p>
                  <strong>Mail:</strong> Satellite Internet Global Privacy
                  Office, 1234 Digital Ave, Suite 100, Tech City, TX 75001
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              Our Commitment to Privacy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  Data Protection
                </h3>
                <p className="text-gray-600">
                  We implement robust security measures to protect your personal
                  information from unauthorized access, alteration, disclosure,
                  or destruction.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Lock className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  Secure Transactions
                </h3>
                <p className="text-gray-600">
                  All payment information is encrypted using industry-standard
                  protocols to ensure your financial data remains secure and
                  confidential.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Eye className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  We believe in clear communication about how we collect and use
                  your data, giving you control over your personal information.
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

export default Privacy;

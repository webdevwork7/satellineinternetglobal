import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FileText, Shield, Scale } from "lucide-react";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms and Conditions
              </h1>
              <p className="text-xl text-white/90">
                Please read these terms carefully before using our services.
              </p>
              <div className="mt-8 text-sm text-white/80">
                Last Updated: May 15, 2025
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Linkify. These Terms and Conditions govern your use
                  of our website, products, and services. By accessing or using
                  Linkify's services, you agree to be bound by these Terms. If
                  you disagree with any part of the terms, you may not access
                  our services.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  2. Definitions
                </h2>
                <p>For the purposes of these Terms and Conditions:</p>
                <ul>
                  <li>
                    <strong>"Company"</strong> (referred to as either "the
                    Company", "We", "Us" or "Our" in this Agreement) refers to
                    Linkify.
                  </li>
                  <li>
                    <strong>"Service"</strong> refers to the Company's website,
                    applications, and satellite internet services.
                  </li>
                  <li>
                    <strong>"You"</strong> means the individual accessing or
                    using the Service, or the company, or other legal entity on
                    behalf of which such individual is accessing or using the
                    Service.
                  </li>
                  <li>
                    <strong>"Website"</strong> refers to Linkify, accessible
                    from www.linkify.com.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  3. Service Description
                </h2>
                <p>
                  Linkify provides satellite internet services, including but
                  not limited to residential, roaming, and maritime connectivity
                  solutions. Our services are subject to availability in your
                  area and may vary based on geographical and technical
                  limitations.
                </p>
                <p>
                  We strive to provide continuous, high-quality service but
                  cannot guarantee uninterrupted service due to factors beyond
                  our control, including but not limited to weather conditions,
                  satellite positioning, and equipment functionality.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  4. User Accounts
                </h2>
                <p>
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times. Failure to do so constitutes a breach of the Terms,
                  which may result in immediate termination of your account on
                  our Service.
                </p>
                <p>
                  You are responsible for safeguarding the password that you use
                  to access the Service and for any activities or actions under
                  your password. You agree not to disclose your password to any
                  third party. You must notify us immediately upon becoming
                  aware of any breach of security or unauthorized use of your
                  account.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  5. Billing and Payment
                </h2>
                <p>
                  By subscribing to our services, you agree to pay all fees
                  associated with your selected plan. Fees are billed in advance
                  on a monthly basis and are non-refundable. There will be no
                  refunds or credits for partial months of service, or for
                  periods in which your account remains open but you do not use
                  our services.
                </p>
                <p>
                  We reserve the right to change our fees upon reasonable
                  notice. Such notice may be provided at any time by posting the
                  changes to the Linkify Website or via email.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  6. Equipment
                </h2>
                <p>
                  Depending on your service plan, equipment may be provided to
                  you on a lease or purchase basis. Equipment provided on a
                  lease basis remains the property of Linkify and must be
                  returned upon termination of service in good working
                  condition, normal wear and tear excepted.
                </p>
                <p>
                  You are responsible for maintaining all equipment necessary
                  for accessing our services. You agree to use the equipment in
                  accordance with our instructions and solely for the purpose of
                  accessing our services.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  7. Acceptable Use Policy
                </h2>
                <p>
                  You agree to use our services only for lawful purposes and in
                  accordance with these Terms. You agree not to use our
                  services:
                </p>
                <ul>
                  <li>
                    In any way that violates any applicable federal, state,
                    local, or international law or regulation
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or
                    promotional material, including any "junk mail", "chain
                    letter," "spam," or any other similar solicitation
                  </li>
                  <li>
                    To impersonate or attempt to impersonate the Company, a
                    Company employee, another user, or any other person or
                    entity
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits
                    anyone's use or enjoyment of the Service, or which may harm
                    the Company or users of the Service
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  8. Termination
                </h2>
                <p>
                  We may terminate or suspend your account immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will
                  immediately cease. If you wish to terminate your account, you
                  may simply discontinue using the Service or contact our
                  customer support.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  9. Limitation of Liability
                </h2>
                <p>
                  In no event shall Linkify, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                  <li>
                    Your access to or use of or inability to access or use the
                    Service
                  </li>
                  <li>
                    Any conduct or content of any third party on the Service
                  </li>
                  <li>Any content obtained from the Service</li>
                  <li>
                    Unauthorized access, use or alteration of your transmissions
                    or content
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  10. Changes to Terms
                </h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material we
                  will try to provide at least 30 days' notice prior to any new
                  terms taking effect. What constitutes a material change will
                  be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Service after those
                  revisions become effective, you agree to be bound by the
                  revised terms. If you do not agree to the new terms, please
                  stop using the Service.
                </p>

                <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
                  11. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:legal@linkify.com"
                    className="text-teal hover:underline"
                  >
                    legal@linkify.com
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
                  <strong>Mail:</strong> Linkify Legal Department, 1234 Digital
                  Ave, Suite 100, Tech City, TX 75001
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              Key Points to Remember
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <FileText className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  Clear Agreements
                </h3>
                <p className="text-gray-600">
                  Our terms are written in clear language to ensure you
                  understand your rights and responsibilities when using our
                  services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  Data Protection
                </h3>
                <p className="text-gray-600">
                  We implement robust security measures to protect your personal
                  information and ensure compliance with data protection laws.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Scale className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  Fair Policies
                </h3>
                <p className="text-gray-600">
                  Our terms are designed to be fair and balanced, protecting
                  both your interests and ours while ensuring quality service.
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

export default Terms;

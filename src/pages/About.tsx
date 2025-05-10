import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Award, Users, Globe, Shield, Phone } from "lucide-react"

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Linkify</h1>
              <p className="text-xl text-white/90">
                Connecting the world through innovative satellite internet solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Linkify, our mission is to bridge the digital divide by providing reliable, high-speed satellite
                internet access to everyone, everywhere. We believe that connectivity should not be limited by
                geography, and we're committed to delivering innovative solutions that keep people connected regardless
                of their location.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're in a remote residential area, traveling across continents, or navigating the open seas,
                our cutting-edge satellite technology ensures you stay connected to what matters most. We're not just
                providing internet service; we're enabling opportunities, fostering connections, and empowering
                communities through reliable connectivity.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Reliability</h3>
                <p className="text-gray-600">
                  We understand that consistent connectivity is essential. Our systems are designed with redundancy and
                  resilience to ensure you stay connected when it matters most.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of satellite technology to deliver faster speeds, lower latency,
                  and more reliable connections to our customers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We're committed to providing exceptional service,
                  transparent pricing, and solutions tailored to your unique needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-navy mb-6">Global Reach, Local Support</h2>
                <p className="text-lg text-gray-700 mb-6">
                  With satellite coverage spanning the globe, Linkify provides connectivity solutions to customers in
                  over 150 countries. Our network of satellites ensures reliable service across continents, oceans, and
                  remote regions.
                </p>
                <p className="text-lg text-gray-700">
                  While our reach is global, our support is local. Our dedicated team of experts understands the unique
                  challenges of different regions and provides personalized assistance to ensure you get the most from
                  your satellite internet service.
                </p>
                <div className="mt-8 flex items-center">
                  <Globe className="h-6 w-6 text-teal mr-3" />
                  <span className="text-navy font-bold">Serving customers across 6 continents</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?key=1fhll"
                  alt="Global satellite coverage"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Connected?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the freedom of reliable satellite internet wherever life takes you.
            </p>
            <a
              href="tel:+18889701698"
              className="inline-flex items-center bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +1 (888) 970-1698
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About

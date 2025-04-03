import Image from "next/image"
import Link from "next/link"
import { Heart, Shield, Clock, Award, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            AIMS Hospitals provides comprehensive pediatric and neonatal care services with a focus on excellence and
            compassion.
          </p>
        </div>
      </section>

      <section id="nicu" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">NICU</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Neonatal Intensive Care Unit</h2>
              <p className="text-gray-700 mb-6">
                Our Neonatal Intensive Care Unit (NICU) provides specialized care for premature and critically ill
                newborns. Equipped with advanced medical technology and staffed by experienced neonatologists and
                nurses, our NICU ensures the best possible outcomes for our tiniest patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Heart className="text-primary-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Advanced Life Support</h3>
                    <p className="text-gray-700">
                      State-of-the-art ventilators, incubators, and monitoring systems to support premature and
                      critically ill newborns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Shield className="text-primary-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Specialized Care</h3>
                    <p className="text-gray-700">
                      Treatment for conditions such as respiratory distress syndrome, sepsis, and other neonatal
                      complications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-primary-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">24/7 Monitoring</h3>
                    <p className="text-gray-700">
                      Round-the-clock care by specialized neonatal nurses and physicians to ensure immediate response to
                      any changes in condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="NICU at AIMS Hospitals"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="picu" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-primary-green mb-4">PICU</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pediatric Intensive Care Unit</h2>
              <p className="text-gray-700 mb-6">
                Our Pediatric Intensive Care Unit (PICU) provides comprehensive care for critically ill children
                requiring intensive monitoring and treatment. Our team of pediatric intensivists and specialized nurses
                work together to provide the highest level of care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Heart className="text-primary-green" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Critical Care</h3>
                    <p className="text-gray-700">
                      Treatment for serious illnesses, injuries, and post-surgical care requiring intensive monitoring.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Shield className="text-primary-green" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Advanced Technology</h3>
                    <p className="text-gray-700">
                      State-of-the-art equipment for monitoring and supporting vital functions in critically ill
                      children.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-primary-green" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Specialized Team</h3>
                    <p className="text-gray-700">
                      A multidisciplinary team of pediatric specialists working together to provide comprehensive care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="PICU at AIMS Hospitals"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pediatric-surgeries" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-accent-purple mb-4">
                Surgical Care
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pediatric Surgeries</h2>
              <p className="text-gray-700 mb-6">
                Our pediatric surgery department offers a wide range of surgical procedures for children of all ages.
                Our skilled surgeons use minimally invasive techniques whenever possible to reduce recovery time and
                improve outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Heart className="text-accent-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Specialized Procedures</h3>
                    <p className="text-gray-700">
                      Surgical treatment for a wide range of pediatric conditions, from common to complex.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Shield className="text-accent-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Child-Friendly Approach</h3>
                    <p className="text-gray-700">
                      Our team is trained to address the unique needs of children before, during, and after surgery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-accent-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Comprehensive Care</h3>
                    <p className="text-gray-700">
                      From pre-operative evaluation to post-operative care, we provide support throughout the surgical
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Pediatric Surgery at AIMS Hospitals"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="emergency-care" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-accent-teal mb-4">
                Emergency Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pediatric Emergency Care</h2>
              <p className="text-gray-700 mb-6">
                Our pediatric emergency department is equipped to handle all types of pediatric emergencies, from minor
                injuries to life-threatening conditions. Our team is available 24/7 to provide immediate care when your
                child needs it most.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Heart className="text-accent-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Rapid Response</h3>
                    <p className="text-gray-700">
                      Immediate assessment and treatment for pediatric emergencies of all types.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Shield className="text-accent-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Specialized Equipment</h3>
                    <p className="text-gray-700">
                      Child-sized medical equipment and supplies specifically designed for pediatric emergencies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-accent-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">24/7 Availability</h3>
                    <p className="text-gray-700">
                      Emergency care available around the clock, with pediatric specialists on call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Emergency Care at AIMS Hospitals"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Additional Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Pediatric Care</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              In addition to our specialized intensive care units and surgical services, we offer a wide range of
              pediatric healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-neumorphic">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-primary-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Outpatient Consultations</h3>
              <p className="text-gray-700">
                Regular check-ups and consultations with our pediatric specialists for ongoing health management and
                preventive care.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-primary-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Diagnostic Services</h3>
              <p className="text-gray-700">
                Comprehensive diagnostic services including laboratory tests, imaging, and specialized pediatric
                assessments.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-accent-purple" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Vaccination</h3>
              <p className="text-gray-700">
                Complete immunization services following the recommended vaccination schedule for children of all ages.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-accent-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Developmental Assessment</h3>
              <p className="text-gray-700">
                Evaluation and monitoring of developmental milestones to identify and address any concerns early.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-primary-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Nutritional Counseling</h3>
              <p className="text-gray-700">
                Guidance on proper nutrition for children at different stages of growth and development.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-primary-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Parent Education</h3>
              <p className="text-gray-700">
                Resources and support for parents to help them understand and manage their child's health needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Our Services?</h2>
            <p className="text-xl mb-8">
              Contact us today to schedule an appointment with our pediatric specialists or to learn more about our
              services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact#appointment"
                className="inline-flex items-center bg-white text-primary-blue font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                Book an Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Heart, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About AIMS Hospitals</h1>
          <p className="text-xl max-w-3xl">
            Anurag Institute of Medical Sciences for Child Health - Providing expert pediatric and neonatal care with a
            focus on excellence and compassion.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of Excellence in Pediatric Care</h2>
              <p className="text-gray-700 mb-6">
                AIMS Hospitals was established with a vision to provide specialized healthcare services for children and
                newborns. Over the years, we have grown to become a leading pediatric healthcare provider in Andhra
                Pradesh, known for our expertise in neonatal and pediatric intensive care.
              </p>
              <p className="text-gray-700 mb-6">
                Our state-of-the-art facilities in Vijayawada and Tenali are equipped with the latest medical technology
                and staffed by experienced specialists who are dedicated to providing the highest quality of care for
                our young patients.
              </p>
              <p className="text-gray-700">
                At AIMS Hospitals, we believe that every child deserves the best possible healthcare. This belief drives
                our commitment to excellence in all aspects of our service.
              </p>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="AIMS Hospital Building"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Our Mission & Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Guided by Purpose</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-neumorphic">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional healthcare for children and newborns through advanced medical treatments,
                compassionate care, and continuous innovation. We are committed to improving the health and well-being
                of every child who comes through our doors.
              </p>
            </div>
            <div className="card-neumorphic">
              <h3 className="text-2xl font-bold mb-4 text-primary-green">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading pediatric healthcare provider in the region, recognized for clinical excellence,
                patient-centered care, and outstanding outcomes. We aim to set new standards in pediatric and neonatal
                care through research, education, and innovative treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="director" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Director</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Dr. V. Nagamalleswara Rao</h3>
              <p className="text-gray-700 mb-4">
                Dr. V. Nagamalleswara Rao is a distinguished pediatrician with over 25 years of experience in neonatal
                and pediatric intensive care. After completing his medical education with specialization in Pediatrics,
                he dedicated his career to improving healthcare outcomes for children and newborns.
              </p>
              <p className="text-gray-700 mb-4">
                Under his visionary leadership, AIMS Hospitals has established itself as a center of excellence in
                pediatric healthcare. Dr. Rao has been instrumental in introducing advanced medical technologies and
                protocols that have significantly improved survival rates and patient outcomes.
              </p>
              <p className="text-gray-700 mb-4">
                His contributions to pediatric healthcare have been recognized through various awards and accolades. Dr.
                Rao regularly participates in national and international medical conferences, sharing his expertise and
                learning from other leaders in the field of pediatric medicine.
              </p>
              <p className="text-gray-700">
                His philosophy of combining medical excellence with compassionate care forms the cornerstone of AIMS
                Hospitals' approach to pediatric healthcare.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg"
                  alt="Dr. V. Nagamalleswara Rao"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-neumorphic">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Compassion</h3>
              <p className="text-gray-700">
                We provide care with kindness, empathy, and respect for the dignity of every child and family.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="text-primary-green" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in medical care, continuously improving our services and outcomes.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="text-accent-purple" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We act with honesty, transparency, and ethical behavior in all aspects of our work.
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-accent-teal" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Teamwork</h3>
              <p className="text-gray-700">
                We collaborate effectively, valuing the contributions of all team members to provide comprehensive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Our Facilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Healthcare</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              AIMS Hospitals is equipped with advanced medical technology and facilities to provide the best care for
              our young patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="NICU Facility"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Neonatal Intensive Care Unit (NICU)</h3>
                <p className="text-gray-700">
                  Our NICU is equipped with advanced life support systems, incubators, and monitoring devices to provide
                  specialized care for premature and critically ill newborns.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="PICU Facility"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pediatric Intensive Care Unit (PICU)</h3>
                <p className="text-gray-700">
                  Our PICU provides round-the-clock monitoring and treatment for critically ill children, with a team of
                  specialists available 24/7.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="btn-primary inline-flex items-center">
              Explore Our Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Our Mission</h2>
            <p className="text-xl mb-8">
              At AIMS Hospitals, we are committed to providing the best possible care for children and newborns. We
              invite you to learn more about our services and how we can help your family.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary-blue font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


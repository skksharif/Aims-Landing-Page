import Image from "next/image";
import Link from "next/link";
import CounterAnimation from "@/components/counter-animation";
import { ArrowRight, Heart, Shield, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://content.jdmagicbox.com/comp/guntur/u9/9999px863.x863.190617105322.b8u9/catalogue/aiims-hospital-government-mangalagiri-guntur-public-hospitals-grFy68135Z.jpg"
            alt="NICU at AIMS Hospitals"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-50/50"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Caring for Tomorrow's Future
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Expert Pediatric & Neonatal Care
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              At AIMS Hospitals, we provide specialized care for children and
              newborns with state-of-the-art facilities and experienced medical
              professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#appointment" className="btn-primary">
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="bg-white text-primary-blue font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Learn More <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-neumorphic text-center">
              <CounterAnimation end={10000} suffix="+" />
              <h3 className="text-xl font-medium mt-4 text-gray-700">
                NICU Admissions
              </h3>
            </div>
            <div className="card-neumorphic text-center">
              <CounterAnimation end={99} suffix="%" />
              <h3 className="text-xl font-medium mt-4 text-gray-700">
                Survival Rate
              </h3>
            </div>
            <div className="card-neumorphic text-center">
              <CounterAnimation end={6000} suffix="+" />
              <h3 className="text-xl font-medium mt-4 text-gray-700">
                PICU Admissions
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
                About AIMS Hospitals
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading Pediatric & Neonatal Care in Andhra Pradesh
              </h2>
              <p className="text-gray-700 mb-6">
                AIMS Hospitals (Anurag Institute of Medical Sciences for Child
                Health) is dedicated to providing exceptional healthcare for
                children and newborns. Our state-of-the-art facilities and team
                of experienced specialists ensure the highest quality of care.
              </p>
              <p className="text-gray-700 mb-6">
                Under the leadership of Dr. V. Nagamalleswara Rao, we have
                established ourselves as a center of excellence in pediatric and
                neonatal care, with a focus on advanced treatments and
                compassionate patient care.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary-blue font-medium hover:underline"
              >
                Learn more about our hospital{" "}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/ap.png"
                  alt="AIMS Hospital Building"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-primary-blue">
                  25+
                </span>
                <span className="text-sm text-gray-600 text-center">
                  Years of Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Pediatric Care
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer a wide range of specialized services to ensure the health
              and well-being of your children from birth through adolescence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-neumorphic">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">NICU</h3>
              <p className="text-gray-700">
                Our Neonatal Intensive Care Unit provides specialized care for
                premature and critically ill newborns with advanced medical
                equipment.
              </p>
              <Link
                href="/services#nicu"
                className="inline-flex items-center mt-4 text-primary-blue font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="card-neumorphic">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="text-primary-green" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">PICU</h3>
              <p className="text-gray-700">
                Our Pediatric Intensive Care Unit offers round-the-clock
                monitoring and treatment for critically ill children requiring
                intensive care.
              </p>
              <Link
                href="/services#picu"
                className="inline-flex items-center mt-4 text-primary-blue font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="card-neumorphic">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="text-accent-purple" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pediatric Surgeries</h3>
              <p className="text-gray-700">
                Our skilled surgeons perform a wide range of pediatric surgeries
                with precision and care, ensuring the best outcomes.
              </p>
              <Link
                href="/services#pediatric-surgeries"
                className="inline-flex items-center mt-4 text-primary-blue font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="card-neumorphic">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="text-accent-teal" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency Care</h3>
              <p className="text-gray-700">
                Our emergency department is equipped to handle pediatric
                emergencies 24/7 with specialized staff and equipment.
              </p>
              <Link
                href="/services#emergency-care"
                className="inline-flex items-center mt-4 text-primary-blue font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Director */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
                Meet the Director
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dr. V. Nagamalleswara Rao
              </h2>
              <p className="text-gray-700 mb-4">
                Dr. V. Nagamalleswara Rao is a distinguished pediatrician with
                over 25 years of experience in neonatal and pediatric intensive
                care. His vision and leadership have established AIMS Hospitals
                as a center of excellence in child healthcare.
              </p>
              <p className="text-gray-700 mb-6">
                Under his guidance, AIMS Hospitals has achieved remarkable
                success rates in treating critically ill newborns and children,
                implementing the latest medical technologies and protocols.
              </p>
              <Link href="/about#director" className="btn-primary">
                Read Full Profile
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
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

      {/* Statistics Preview */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm mb-4">
              Our Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Making a Difference in Children's Lives
            </h2>
            <p className="max-w-3xl mx-auto">
              Our commitment to excellence in pediatric and neonatal care has
              resulted in impressive outcomes and success rates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">NICU Admissions</h3>
              <div className="text-5xl font-bold mb-4">10,000+</div>
              <p>
                Newborns have received specialized care in our NICU facilities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Survival Rate</h3>
              <div className="text-5xl font-bold mb-4">99%</div>
              <p>
                Our NICU has achieved an exceptional survival rate for all
                admissions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">PICU Admissions</h3>
              <div className="text-5xl font-bold mb-4">6,000+</div>
              <p>
                Children have been successfully treated in our Pediatric
                Intensive Care Unit.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/statistics"
              className="inline-flex items-center bg-white text-primary-blue font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View Detailed Statistics <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Parents Say About Us
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Read about the experiences of families who have entrusted their
              children's care to AIMS Hospitals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-neumorphic">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Parent"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Mother of Arjun</p>
                </div>
              </div>
              <p className="text-gray-700">
                "When our premature baby needed specialized care, AIMS
                Hospital's NICU team was exceptional. Their expertise and
                compassion gave us hope during a difficult time. Today, our son
                is healthy and thriving thanks to their outstanding care."
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Parent"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Father of Meera</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Dr. Rao and his team at AIMS Hospitals provided exceptional
                care when our daughter needed emergency surgery. Their quick
                response and skilled treatment saved her life. We are forever
                grateful for their expertise and dedication."
              </p>
            </div>

            <div className="card-neumorphic">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Parent"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Lakshmi Reddy</h4>
                  <p className="text-sm text-gray-600">Mother of Twins</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Having twins born prematurely was overwhelming, but the NICU
                staff at AIMS Hospitals were amazing. They not only provided
                excellent medical care but also emotional support. Both our
                babies are now healthy and developing well."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Child's Health is Our Priority
            </h2>
            <p className="text-xl mb-8">
              Schedule an appointment with our pediatric specialists today and
              give your child the best care possible.
            </p>
            <Link
              href="/contact#appointment"
              className="inline-flex items-center bg-white text-primary-blue font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

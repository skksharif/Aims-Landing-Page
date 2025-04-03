import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. V. Nagamalleswara Rao",
      role: "Director & Senior Pediatrician",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Founder and Director of AIMS Hospitals with over 25 years of experience in pediatric and neonatal care.",
    },
    {
      name: "Dr. Anita Sharma",
      role: "Pediatric Intensivist",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Specializes in critical care for children with 15 years of experience in managing complex pediatric cases.",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Neonatologist",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Expert in the care of premature and critically ill newborns with specialized training in neonatal medicine.",
    },
    {
      name: "Dr. Priya Patel",
      role: "Pediatric Surgeon",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Skilled surgeon specializing in pediatric procedures with a focus on minimally invasive techniques.",
    },
    {
      name: "Dr. Sanjay Reddy",
      role: "Pediatric Cardiologist",
      image: "/placeholder.svg?height=400&width=400",
      description: "Specializes in diagnosing and treating heart conditions in children from newborns to adolescents.",
    },
    {
      name: "Dr. Meera Krishnan",
      role: "Pediatric Neurologist",
      image: "/placeholder.svg?height=400&width=400",
      description: "Expert in neurological disorders affecting children with a focus on developmental conditions.",
    },
    {
      name: "Nurse Lakshmi",
      role: "Head Nurse, NICU",
      image: "/placeholder.svg?height=400&width=400",
      description: "Leads the nursing team in the NICU with extensive experience in neonatal care and management.",
    },
    {
      name: "Nurse Ravi",
      role: "Head Nurse, PICU",
      image: "/placeholder.svg?height=400&width=400",
      description: "Oversees nursing care in the PICU with specialized training in pediatric critical care.",
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl">
            Meet the dedicated professionals who provide exceptional care for children and newborns at AIMS Hospitals.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Medical Professionals
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expert Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our team of experienced pediatric specialists is dedicated to providing the highest quality care for
              children and newborns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-neumorphic overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Collaborative Care</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At AIMS Hospitals, we believe in a team-based approach to pediatric healthcare. Our specialists work
              together to provide comprehensive care for each child.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Medical Team Collaboration"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Multidisciplinary Approach</h3>
                  <p className="text-gray-700">
                    Our team includes specialists from various fields of pediatric medicine who collaborate to provide
                    comprehensive care for complex conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Regular Case Discussions</h3>
                  <p className="text-gray-700">
                    Our medical team holds regular meetings to discuss complex cases and develop optimal treatment plans
                    for our patients.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                  <p className="text-gray-700">
                    Our team members regularly participate in continuing education and training to stay updated with the
                    latest advancements in pediatric medicine.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Family-Centered Care</h3>
                  <p className="text-gray-700">
                    We involve families in the care process, providing education and support to help them understand and
                    participate in their child's treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary-blue mb-4">
              Support Staff
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Team Behind the Scenes</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              In addition to our medical professionals, our support staff plays a crucial role in ensuring the smooth
              operation of our hospital and the comfort of our patients and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-neumorphic text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Nursing Staff"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Nursing Staff</h3>
              <p className="text-gray-700">
                Our dedicated nurses provide round-the-clock care for our patients with compassion and expertise.
              </p>
            </div>

            <div className="card-neumorphic text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Administrative Staff"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Administrative Staff</h3>
              <p className="text-gray-700">
                Our administrative team ensures smooth operations and a seamless experience for patients and families.
              </p>
            </div>

            <div className="card-neumorphic text-center p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Paramedical Staff"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Paramedical Staff</h3>
              <p className="text-gray-700">
                Our technicians and paramedical staff provide essential support for diagnostic and therapeutic
                procedures.
              </p>
            </div>

            <div className="card-neumorphic text-center p-6">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Support Services"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Support Services</h3>
              <p className="text-gray-700">
                Our housekeeping, security, and maintenance staff ensure a clean, safe, and comfortable environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8">
              We are always looking for talented and dedicated professionals to join our team. If you are passionate
              about pediatric healthcare and want to make a difference in children's lives, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary-blue font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Contact Us About Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


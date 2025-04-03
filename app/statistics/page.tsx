import StatisticsChart from "@/components/statistics-chart";

export default function StatisticsPage() {
  // NICU Admission Breakdown
  const nicuData = {
    labels: [
      "HMD",
      "Sepsis",
      "TTN",
      "Perinatal Hypoxia/Meconium Aspirations",
      "Surgery-related",
    ],
    datasets: [
      {
        label: "Percentage of Admissions",
        data: [35, 35, 22, 5, 3],
        backgroundColor: [
          "rgba(30, 136, 229, 0.7)",
          "rgba(67, 160, 71, 0.7)",
          "rgba(126, 87, 194, 0.7)",
          "rgba(38, 166, 154, 0.7)",
          "rgba(255, 152, 0, 0.7)",
        ],
        borderColor: [
          "rgba(30, 136, 229, 1)",
          "rgba(67, 160, 71, 1)",
          "rgba(126, 87, 194, 1)",
          "rgba(38, 166, 154, 1)",
          "rgba(255, 152, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Preterm Baby Weight Distribution
  const weightData = {
    labels: ["<1 kg", "1-1.5 kg", "1.5-2 kg"],
    datasets: [
      {
        label: "Percentage of Preterm Babies",
        data: [18, 22, 60],
        backgroundColor: "rgba(30, 136, 229, 0.7)",
        borderColor: "rgba(30, 136, 229, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Survival Rates
  const survivalData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "NICU Survival Rate (%)",
        data: [97, 97.5, 98, 98.5, 99, 99],
        backgroundColor: "rgba(30, 136, 229, 0.2)",
        borderColor: "rgba(30, 136, 229, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "PICU Survival Rate (%)",
        data: [88, 88.5, 89, 89.5, 90, 90],
        backgroundColor: "rgba(67, 160, 71, 0.2)",
        borderColor: "rgba(67, 160, 71, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "MV Survival Rate (%)",
        data: [94, 94.5, 95, 95.5, 96, 96.9],
        backgroundColor: "rgba(126, 87, 194, 0.2)",
        borderColor: "rgba(126, 87, 194, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="pt-16 md:pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 md:py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
              Statistics & Data
            </h1>
            <p className="text-sm md:text-xl max-w-3xl mx-auto">
              Explore our hospital's performance metrics and patient outcomes.
              These statistics reflect our commitment to excellence in pediatric
              and neonatal care.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              {/* NICU Admission Breakdown */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">
                  NICU Admission Breakdown
                </h2>
                <p className="text-gray-700 text-sm md:text-base text-center md:text-left mb-6">
                  Our NICU treats a variety of conditions in newborns. The chart
                  below shows the distribution of admissions by primary
                  diagnosis.
                </p>
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-md">
                    <StatisticsChart
                      type="pie"
                      title="NICU Admissions by Diagnosis"
                      data={nicuData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: true,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Preterm Baby Weight Distribution */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">
                  Preterm Baby Weight Distribution
                </h2>
                <p className="text-gray-700 text-sm md:text-base text-center md:text-left mb-6">
                  The weight of preterm babies at birth is a critical factor in
                  their care. This chart shows the distribution of preterm
                  babies by weight category.
                </p>
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-md">
                    <StatisticsChart
                      type="bar"
                      title="Preterm Baby Weight Distribution"
                      data={weightData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Performance Indicators */}
        <section className="bg-gray-50 py-8 md:py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
              Key Performance Indicators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* KPI Cards */}
              {[
                {
                  label: "NICU Survival Rate",
                  value: "99%",
                  color: "text-primary-blue",
                },
                {
                  label: "PICU Survival Rate",
                  value: "90%",
                  color: "text-primary-green",
                },
                {
                  label: "MV Survival Rate",
                  value: "96.9%",
                  color: "text-accent-purple",
                },
                {
                  label: "Emergency Care",
                  value: "24/7",
                  color: "text-accent-teal",
                },
              ].map((item, index) => (
                <div key={index} className="card-neumorphic text-center p-4">
                  <div
                    className={`text-3xl md:text-4xl font-bold ${item.color} mb-2`}
                  >
                    {item.value}
                  </div>
                  <h3 className="text-base md:text-lg font-medium">
                    {item.label}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-2">
                    {index === 3
                      ? "Round-the-clock emergency pediatric services"
                      : `Overall survival rate for ${item.label.toLowerCase()}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6 md:p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                  Our Commitment to Excellence
                </h2>
                <p className="text-sm md:text-lg mb-6 md:mb-8">
                  At AIMS Hospitals, we are committed to providing the highest
                  quality care for children and newborns. Our statistics reflect
                  our dedication to continuous improvement in pediatric
                  healthcare.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-white text-primary-blue font-medium py-2 px-4 md:px-6 text-sm md:text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Us to Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Building2, MapPin, Users, Award, CheckCircle } from 'lucide-react';

export default function JourneylineProperties() {
  const expertiseAreas = [
    {
      icon: Building2,
      title: "Real Estate Development",
      description: "Over 40 years of experience in acquiring and developing hundreds of properties throughout America."
    },
    {
      icon: MapPin,
      title: "Site Selection",
      description: "Strategic location analysis focused on freight corridors and trucking company feedback."
    },
    {
      icon: Users,
      title: "Industry Expertise",
      description: "Deep knowledge of trucking and logistics industry needs and community requirements."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Designing efficient layouts and developing high-quality properties that meet industry standards."
    }
  ];

  const processSteps = [
    {
      phase: "PRE-DEV",
      steps: [
        "Site Selection & Feasibility Analysis",
        "Site Planning & Design",
        "Financial Modeling & Capital Planning",
        "Pre-Leasing & Business Development"
      ]
    },
    {
      phase: "DEVELOPMENT",
      steps: [
        "Project Management & Compliance",
        "Site Preparation & Paving",
        "Infrastructure & Technology",
        "Risk Mitigation"
      ]
    }
  ];

  const managementFeatures = [
    "TRUCKBAYS: Modern, Easy, and Smart Truck Parking Software",
    "Marketing & Advertising",
    "24-7 Call Center Support",
    "Facilities Management"
  ];

  return (
    <div className="min-h-screen bg-jp-blue">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logos/jp-white.png" 
              alt="Journeyline Properties Logo" 
              className="h-20 w-auto"
            />
          </div>
          <p className="body-large text-white max-w-4xl mx-auto">
            Specializing in acquiring and leasing large plots in prime locations, designing efficient layouts, and developing high-quality properties for the trucking and logistics industry.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-djh-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">
                Our Expertise
              </h2>
              <p className="body-large text-gray-300 mb-6">
                Journeyline Properties boasts extensive knowledge and experience in real estate, development, and construction for the trucking and logistics industry. With over 40 years of experience and having successfully acquired and developed hundreds of properties throughout America, we excel in designing efficient layouts and developing high-quality properties.
              </p>
              <p className="body-large text-gray-300">
                Our expertise ensures that each project is tailored to meet the unique needs of the trucking and logistics industry and the communities surrounding it, providing strategic, safe, and valuable solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="text-center p-6 bg-djh-tertiary rounded-xl shadow-lg border border-djh-accent">
                  <div className="w-16 h-16 bg-jp-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-4 text-jp-blue mb-3">
                    {area.title}
                  </h3>
                  <p className="body-small text-gray-300">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-djh-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              OUR PROCESS
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              We bring a unique perspective shaped by firsthand industry experience, combining decades of success in logistics, trucking, and commercial real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {processSteps.map((phase, index) => (
              <div key={index} className="bg-djh-tertiary rounded-lg p-6 shadow-sm border border-djh-accent">
                <div className={`px-4 py-3 rounded-lg mb-6 ${
                  phase.phase === "PRE-DEV" 
                    ? "bg-jp-blue text-white" 
                    : "bg-jp-blue text-white"
                }`}>
                  <h3 className="font-bold text-lg">{phase.phase}</h3>
                </div>
                <ul className="space-y-4">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-jp-blue mt-1 flex-shrink-0" />
                      <span className="body-medium text-gray-300">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              MANAGEMENT
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              We focus on speed-to-market to delivery capacity and supply of truck parking in a timely and economic manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-djh-tertiary rounded-lg p-8">
              <h3 className="heading-3 text-white mb-6">Our Management Services</h3>
              <ul className="space-y-4">
                {managementFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-jp-blue mt-1 flex-shrink-0" />
                    <span className="body-medium text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-djh-tertiary rounded-lg p-8">
              <h3 className="heading-3 text-white mb-6">Facilities Management</h3>
              <div className="space-y-4">
                <p className="body-medium text-gray-300">
                  Our site attendees are boots on the ground, making sure the facilities are not only functional but also up to the Riggy&apos;s standard of cleanliness and security.
                </p>
                <p className="body-medium text-gray-300">
                  Each location is serviced multiple days a week, providing preventative and emergency maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-jp-blue text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">
            Ready to Develop Your Property?
          </h2>
          <p className="body-large text-gray-200 mb-6">
            Let us help you transform underutilized land into critical truck parking infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@directjh.com"
              className="bg-white text-jp-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </a>
            <a
              href="/riggys"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-jp-blue transition-colors inline-flex items-center justify-center"
            >
              Learn About Operations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

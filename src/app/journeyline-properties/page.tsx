import { Building2, MapPin, Users, Award, CheckCircle } from 'lucide-react';

export default function JourneylineProperties() {
  const expertiseAreas = [
    {
      icon: Building2,
      title: "REAL ESTATE <span style='font-size: 0.86em'>DEVELOPMENT</span>",
      description: "Over 40 years of experience in acquiring and developing hundreds of properties throughout America."
    },
    {
      icon: MapPin,
      title: "SITE\nSELECTION",
      description: "Strategic location analysis focused on freight corridors and trucking company feedback."
    },
    {
      icon: Users,
      title: "INDUSTRY EXPERTISE",
      description: "Deep knowledge of trucking and logistics industry needs and community requirements."
    },
    {
      icon: Award,
      title: "QUALITY STANDARDS",
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-9 sm:pb-20 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: 'var(--container-bg)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-[21.6rem] h-[5.4rem] md:w-[58.8rem] md:h-[9.45rem] flex items-center justify-center">
              <img 
                src="/logos/3.png" 
                alt="Journeyline Properties Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-[12px] sm:body-large text-white max-w-4xl mx-auto">
            Specializing in acquiring and leasing large plots in prime locations, designing efficient layouts, and developing high-quality properties for the trucking and logistics industry.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="heading-2 text-center mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              OUR EXPERTISE
            </h2>
            <div className="rounded-lg p-8 shadow-sm border mb-8" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <div className="text-center">
                <p className="body-large mb-6" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  Journeyline Properties boasts extensive knowledge and experience in real estate, development, and construction for the trucking and logistics industry. With over 40 years of experience and having successfully acquired and developed hundreds of properties throughout America, we excel in designing efficient layouts and developing high-quality properties.
                </p>
                <div className="bg-jp-truckbays-accent rounded-b-lg p-6 -m-8 mt-6">
                  <p className="body-large" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                    Our expertise ensures that each project is tailored to meet the unique needs of the trucking and logistics industry and the communities surrounding it, providing strategic, safe, and valuable solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="text-center p-6 rounded-xl shadow-lg border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
                  <div className="w-16 h-16 bg-jp-truckbays-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-4 mb-3 whitespace-pre-line" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: area.title }}>
                  </h3>
                  <p className="body-small" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              OUR PROCESS
            </h2>
            <p className="body-large" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              We bring a unique perspective shaped by firsthand industry experience, combining decades of success in logistics, trucking, and commercial real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {processSteps.map((phase, index) => (
              <div key={index} className="rounded-lg p-6 shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
                <div className={`px-4 py-3 rounded-lg mb-6 ${
                  phase.phase === "PRE-DEV" 
                    ? "bg-jp-truckbays-accent text-white" 
                    : "bg-jp-truckbays-accent text-white"
                }`}>
                  <h3 className="heading-4 font-bold" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>{phase.phase}</h3>
                </div>
                <ul className="space-y-4">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <span className="body-medium mt-0.5" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              MANAGEMENT
            </h2>
            <p className="body-large" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              We focus on speed-to-market to delivery capacity and supply of truck parking in a timely and economic manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg p-8 shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <h3 className="heading-3 mb-6" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>OUR MANAGEMENT SERVICES</h3>
              <ul className="space-y-4">
                {managementFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <span className="body-medium mt-0.5" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-8 shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <h3 className="heading-3 mb-6" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>FACILITIES MANAGEMENT</h3>
              <div className="space-y-4">
                <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  Our site attendees are boots on the ground, making sure the facilities are not only functional but also up to the Riggy&apos;s standard of cleanliness and security.
                </p>
                <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  Each location is serviced multiple days a week, providing preventative and emergency maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: 'var(--bottom-section-bg)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            READY TO DEVELOP YOUR PROPERTY?
          </h2>
          <p className="body-large mb-6" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            Let us help you transform underutilized land into critical truck parking infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@directjh.com"
              className="btn-primary transition-colors duration-200 hover:!bg-blue-400 hover:!border-blue-400"
              style={{ backgroundColor: '#3B82F6', borderColor: '#3B82F6' }}
            >
              Contact Us
            </a>
            <a
              href="/riggys"
              className="btn-secondary"
            >
              Learn About Operations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

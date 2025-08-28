import { Truck, Shield, Wifi, Utensils, CheckCircle, Star } from 'lucide-react';

export default function Riggys() {
  const lotStandards = [
    {
      category: "SECURITY",
      features: [
        "8' barbed wire fencing",
        "Gates stay closed 24/7, opens via Truckbays app",
        "Site wide video monitoring",
        "Best in class lighting"
      ]
    },
    {
      category: "FEATURES",
      features: [
        "Dumpsters on-site",
        "Drivers lounge with restrooms, showers, and laundry at select locations",
        "Paved and non-paved options",
        "Demarcated & numbered",
        "Wide aisles for easy in and out"
      ]
    },
    {
      category: "SOFTWARE",
      features: [
        "Truckbays"
      ]
    }
  ];

  const propertyRequirements = [
    {
      category: "ACREAGE AND INFRASTRUCTURE",
      features: [
        "12.5+ usable acres",
        "Rectangular or square lot shape preferred for efficient layout",
        "Minimum 250ft wide",
        "Access to power, water, sewer/septic, and stormwater management"
      ]
    },
    {
      category: "ACCESS, VISIBILITY & CIRCULATION",
      features: [
        "Direct access to major highways or truck routes (≤2 miles from interstate preferred)",
        "Two points of ingress/egress for safe traffic flow and emergency access",
        "High visibility from main road or interstate",
        "Proximity to major distribution centers, logistics hubs, or high truck traffic corridors"
      ]
    }
  ];

  const amenities = [
    {
      title: "Truck Driver First Amenities",
      features: [
        "Truckers' lounge complete with a flat-screen TV, kitchen area, workstation, and free Wi-Fi at select locations",
        "Truck drivers can enjoy free showers, with towels, body wash, and shampoo provided",
        "Free laundry facilities on-site, allowing our customers to take care of laundry while driving OTR"
      ],
      icon: Utensils
    },
    {
      title: "Security Built for Truck Drivers",
      features: [
        "Gate access is app-based, using the driver's mobile number and proximity, eliminating the need for pin numbers or gate clickers",
        "Video surveillance combined with real-time monitoring provides comprehensive coverage of the property",
        "The 8' barbed wire fencing enhances security by creating a strong, deterrent barrier around the property"
      ],
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-djh-primary">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-riggys text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logos/riggys-white.png" 
              alt="Riggy's Logo" 
              className="h-20 w-auto"
            />
          </div>
          <p className="body-large text-white max-w-4xl mx-auto">
            Riggy&apos;s raises the standard for truck parking with secure, fully managed facilities designed specifically for today&apos;s drivers and fleets.
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-dark-medium">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              LOTS DESIGNED FOR TRUCK DRIVERS
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Each Riggy&apos;s location is strategically selected and thoughtfully operated, featuring wide, numbered bays, video-monitored security, on-site attendants, and proximity-based gate access. Ensuring safe, reliable, and tech-enabled parking exactly where it&apos;s needed most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 text-white mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-riggys-green mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong>SITE SELECTION:</strong> Analysis of freight corridors focused on origin and destination and trucking company feedback.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-riggys-green mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong>DESIGN FEATURES:</strong> Secure fencing, video monitoring, proximity-based gate access.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-riggys-green mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong>AMENITIES:</strong> On-site amenities, properly lit areas with wide aisles for ingress and egress.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-riggys-green mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    <strong>ENGINEERING:</strong> Designed with AutoTurn Engineering for easy maneuverability and to eliminate blind side parking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-light rounded-2xl p-8 shadow-lg border border-dark-light">
              <h3 className="heading-4 text-white mb-4">Lots Tailored for Truck Drivers</h3>
              <p className="text-gray-300 mb-6">
                Built by those who get it. Managed by those who live it.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-riggys-green rounded-full"></div>
                  <span className="text-sm text-gray-300">Wide, numbered parking bays</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-riggys-green rounded-full"></div>
                  <span className="text-sm text-gray-300">24/7 video monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-riggys-green rounded-full"></div>
                  <span className="text-sm text-gray-300">On-site attendants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-riggys-green rounded-full"></div>
                  <span className="text-sm text-gray-300">Proximity-based gate access</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-dark-light/30">
                <div className="flex items-center justify-center space-x-2">
                  <Truck className="w-5 h-5 text-riggys-green" />
                  <span className="text-sm text-riggys-green font-medium">Driver-First Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lot Standards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              THE RIGGY&apos;S STANDARD
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lot Standards */}
            <div className="bg-dark-light rounded-lg p-6 shadow-sm border border-dark-light">
              <h3 className="text-xl font-bold text-riggys-green mb-6">LOT STANDARDS</h3>
              {lotStandards.map((standard, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-semibold text-riggys-green mb-3">{standard.category}</h4>
                  <ul className="space-y-2">
                    {standard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-riggys-green mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Property Description */}
            <div className="bg-dark-light rounded-lg p-6 shadow-sm border border-dark-light">
              <h3 className="text-xl font-bold text-riggys-green mb-6">PROPERTY DESCRIPTION</h3>
              {propertyRequirements.map((requirement, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-semibold text-riggys-green mb-3">{requirement.category}</h4>
                  <ul className="space-y-2">
                    {requirement.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-riggys-green mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-dark-medium">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              OUR AMENITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-dark-light rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <amenity.icon className="w-8 h-8 text-riggys-green mr-3" />
                  <h3 className="text-xl font-bold text-white">{amenity.title}</h3>
                </div>
                <ul className="space-y-3">
                  {amenity.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-riggys-green mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-riggys-green text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Experience the Riggy&apos;s Difference
          </h2>
          <p className="text-base text-black/80 mb-6">
            Join thousands of drivers who trust Riggy&apos;s for secure, comfortable, and convenient truck parking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://riggys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-gray transition-colors inline-flex items-center justify-center"
            >
              Visit Riggy&apos;s Website
            </a>
            <a
              href="mailto:contact@directjh.com"
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

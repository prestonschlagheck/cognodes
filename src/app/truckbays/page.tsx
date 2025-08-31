import { Zap, Smartphone, Shield, CreditCard, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function Truckbays() {
  const features = [
    {
      icon: Smartphone,
      title: "EASY MANAGEMENT",
      description: "Customers can easily download our app to search and book parking spots instantly. Fleets can assign drivers availability based on their employment status."
    },
    {
      icon: Zap,
      title: "REAL-TIME RESERVATIONS",
      description: "Customers know the exact availability of parking spots in real-time."
    },
    {
      icon: Shield,
      title: "MODERN ACCESS CONTROL",
      description: "Say goodbye to pin codes, clickers, and text-to-open systems. Our advanced access control via the Truckbays app is more secure and user-friendly."
    },
    {
      icon: CreditCard,
      title: "FLEXIBLE PAYMENT OPTIONS",
      description: "We offer various payment methods including ACH, credit card, and options for monthly, daily, or NNN payments."
    }
  ];

  const appFeatures = [
    "Gate access management",
    "Real-time availability",
    "Fleet management tools",
    "Payment processing",
    "Driver assignment",
    "Reservation system"
  ];

  return (
    <div className="min-h-screen bg-page">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-9 sm:pb-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-72 h-18 md:w-[58.8rem] md:h-[9.45rem] flex items-center justify-center">
              <img 
                src="/logos/1.png" 
                alt="Truckbays Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-[12px] sm:body-large text-white max-w-4xl mx-auto">
            At Truckbays, we&apos;re revolutionizing truck parking management with innovative solutions designed for fleets and truck drivers.
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-3 text-white mb-6">
                Revolutionizing Truck Parking Management
              </h2>
              <div className="space-y-4 body-large text-gray-300">
                <p>
                  We provide seamless, reliable, and user-friendly systems for managing truck parking lots. Whether you&apos;re a fleet owner, a parking lot operator, or an individual truck driver, our platform empowers you with the tools you need to stay ahead in a fast-evolving industry.
                </p>
                <p>
                  With our innovative technology and dedication to customer satisfaction, we are driving the future of transportation logistics - one parking space at a time.
                </p>
              </div>
            </div>

            <div className="bg-[#4B5563] rounded-lg shadow-sm border border-[#4B5563]">
              <div className="bg-jp-truckbays-accent rounded-t-lg px-8 py-4">
                <h3 className="heading-4 text-white">Technology Built for the Industry</h3>
              </div>
              <div className="p-8">
                <div className="space-y-3">
                  {appFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="body-medium text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#4B5563] rounded-lg p-6 shadow-sm border border-[#4B5563]">
                <div className="w-16 h-16 bg-jp-truckbays-accent rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-4 text-white mb-3">
                  {feature.title}
                </h3>
                <p className="body-medium text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Interface Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              Smartphone App Interface
            </h2>
            <p className="body-large text-gray-300">
              Experience the future of truck parking management through our intuitive mobile application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 text-white mb-6">App Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="heading-4 text-white">Gate Access Management</p>
                    <p className="body-medium text-gray-300">Control entry and exit points directly from your phone</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="heading-4 text-white">Real-time Notifications</p>
                    <p className="body-medium text-gray-300">Stay informed about gate access and facility updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="heading-4 text-white">Payment Management</p>
                    <p className="body-medium text-gray-300">Update payment methods and manage billing easily</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="heading-4 text-white">Fleet Management</p>
                    <p className="body-medium text-gray-300">Quickly add or remove vehicles and drivers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#4B5563] rounded-2xl p-8 text-center shadow-lg border border-[#4B5563]">
              <div className="w-64 h-96 bg-white rounded-2xl mx-auto shadow-lg border-4 border-gray-300 relative">
                {/* Mock App Interface */}
                <div className="bg-gray-800 text-white p-2 rounded-t-xl text-xs text-center">
                  Truckbays App
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-blue-100 p-2 rounded text-xs">
                    <div className="font-semibold">Gate access</div>
                    <div className="text-blue-600">Entry 1</div>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs mt-1">
                      Open Gate
                    </button>
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-xs">
                    <div className="font-semibold">Change payment</div>
                    <div className="text-gray-600">Update your payment method</div>
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-xs">
                    <div className="font-semibold">Manage Fleet/Drivers</div>
                    <div className="text-gray-600">Quickly add or remove vehicles and drivers!</div>
                  </div>
                </div>
              </div>
              <p className="body-medium text-gray-300 mt-4">Mobile app interface mockup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              Benefits for Different Users
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#4B5563] rounded-lg p-6 shadow-sm border border-[#4B5563] text-center">
              <Users className="w-16 h-16 text-jp-truckbays-accent mx-auto mb-4" />
              <h3 className="heading-4 text-white mb-3">Fleet Owners</h3>
              <p className="body-medium text-gray-300">
                Manage multiple drivers, track parking usage, and streamline operations with comprehensive fleet management tools.
              </p>
            </div>

            <div className="bg-[#4B5563] rounded-lg p-6 shadow-sm border border-[#4B5563] text-center">
              <Shield className="w-16 h-16 text-jp-truckbays-accent mx-auto mb-4" />
              <h3 className="heading-4 text-white mb-3">Parking Operators</h3>
              <p className="body-medium text-gray-300">
                Increase efficiency, reduce manual work, and provide better service to drivers with automated systems.
              </p>
            </div>

            <div className="bg-[#4B5563] rounded-lg p-6 shadow-sm border border-[#4B5563] text-center">
              <Smartphone className="w-16 h-16 text-jp-truckbays-accent mx-auto mb-4" />
              <h3 className="heading-4 text-white mb-3">Individual Drivers</h3>
              <p className="body-medium text-gray-300">
                Find and reserve parking spots easily, manage payments, and access facilities with just your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: '#6A7280' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">
            Ready to Transform Your Truck Parking Operations?
          </h2>
          <p className="body-large text-gray-200 mb-6">
            Join the future of truck parking management with Truckbays technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://truckbays.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !bg-blue-600 !border-blue-600 hover:!bg-blue-500 hover:!border-blue-500 transition-colors duration-200"
            >
              Visit Truckbays Website
            </a>
            <a
              href="mailto:contact@directjh.com"
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-9 sm:pb-20 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: 'var(--container-bg)' }}>
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
          <p className="text-[12px] sm:body-large max-w-4xl mx-auto" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            At Truckbays, we&apos;re revolutionizing truck parking management with innovative solutions designed for fleets and truck drivers.
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-3 mb-6" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                REVOLUTIONIZING TRUCK PARKING MANAGEMENT
              </h2>
              <div className="space-y-4 body-large" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                <p>
                  We provide seamless, reliable, and user-friendly systems for managing truck parking lots. Whether you&apos;re a fleet owner, a parking lot operator, or an individual truck driver, our platform empowers you with the tools you need to stay ahead in a fast-evolving industry.
                </p>
                <p>
                  With our innovative technology and dedication to customer satisfaction, we are driving the future of transportation logistics - one parking space at a time.
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <div className="bg-jp-truckbays-accent rounded-t-lg px-8 py-4">
                <h3 className="heading-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>TECHNOLOGY BUILT FOR THE INDUSTRY</h3>
              </div>
              <div className="p-8">
                <div className="space-y-3">
                  {appFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              KEY FEATURES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="rounded-lg p-6 shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
                <div className="w-16 h-16 bg-jp-truckbays-accent rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-4 mb-3" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Interface Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              SMARTPHONE APP INTERFACE
            </h2>
            <p className="body-large" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Experience the future of truck parking management through our intuitive mobile application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 mb-6" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>APP FEATURES</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-2.5 flex-shrink-0" />
                  <div className="mt-0">
                    <p className="heading-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>Gate Access Management</p>
                    <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>Control entry and exit points directly from your phone</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-2.5 flex-shrink-0" />
                  <div className="mt-0">
                    <p className="heading-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>Real-time Notifications</p>
                    <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>Stay informed about gate access and facility updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-2.5 flex-shrink-0" />
                  <div className="mt-0">
                    <p className="heading-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>Payment Management</p>
                    <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>Update payment methods and manage billing easily</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-jp-truckbays-accent mt-2.5 flex-shrink-0" />
                  <div className="mt-0">
                    <p className="heading-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>Fleet Management</p>
                    <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>Quickly add or remove vehicles and drivers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl text-center shadow-lg border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <div className="w-full h-[21.6rem] sm:h-[36rem] mx-auto flex items-end justify-center">
                <img 
                  src="/logos/phonegraphic.png" 
                  alt="Truckbays Mobile App Interface" 
                  className="w-[95.7%] sm:w-[95%] h-[21.12rem] sm:h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              BENEFITS FOR DIFFERENT USERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg p-6 shadow-sm border text-center flex flex-col" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-16 h-16 text-jp-truckbays-accent" />
              </div>
              <div className="text-center">
                <h3 className="heading-4 mb-3" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: 'FLEET<br>OWNERS' }}></h3>
                <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  Manage multiple drivers, track parking usage, and streamline operations with comprehensive fleet management tools.
                </p>
              </div>
            </div>

            <div className="rounded-lg p-6 shadow-sm border text-center flex flex-col" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-16 h-16 text-jp-truckbays-accent" />
              </div>
              <div className="text-center">
                <h3 className="heading-4 mb-3" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>PARKING OPERATORS</h3>
                <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  Increase efficiency, reduce manual work, and provide better service to drivers with automated systems.
                </p>
              </div>
            </div>

            <div className="rounded-lg p-6 shadow-sm border text-center flex flex-col" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-16 h-16 text-jp-truckbays-accent" />
              </div>
              <div className="text-center">
                <h3 className="heading-4 mb-3" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>INDIVIDUAL DRIVERS</h3>
                <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  Find and reserve parking spots easily, manage payments, and access facilities with just your phone.
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
            READY TO TRANSFORM YOUR TRUCK PARKING OPERATIONS?
          </h2>
          <p className="body-large mb-6" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
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

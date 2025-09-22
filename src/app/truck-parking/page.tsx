import { AlertTriangle, Users, Shield, Clock, TrendingUp } from 'lucide-react';

export default function TruckParking() {
  const driverStats = [
    {
      icon: Users,
      stat: "1:11",
      description: "parking space for every truck driver in the US"
    },
    {
      icon: Clock,
      stat: "56m",
      description: "average time drivers spend looking for parking daily"
    },
    {
      icon: TrendingUp,
      stat: "12%",
      description: "of driver's annual income lost to parking search"
    },
    {
      icon: AlertTriangle,
      stat: "88%",
      description: "of drivers feel unsafe during mandatory rest breaks"
    }
  ];

  const nationalStats = [
    {
      number: "76,180",
      description: "individuals injured in truck-related crashes in 2022",
      note: "71% were occupants of other vehicles"
    },
    {
      number: "5,370",
      description: "deaths were attributed to truck accidents in 2022 across the U.S",
      note: "Many involving trucks parked on shoulders"
    },
    {
      number: "70%+",
      description: "of US truck drivers park in unauthorized areas weekly",
      note: "Due to lack of designated parking availability"
    }
  ];

  const texasStats = [
    {
      number: "2,315",
      description: "crashes involving parked trucks in Texas (2013-2017)"
    },
    {
      number: "138",
      description: "deaths from parked truck crashes in Texas (2013-2017)"
    },
    {
      number: "997",
      description: "injuries from parked truck crashes in Texas (2013-2017)"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-9 sm:pb-20 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: 'var(--container-bg)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-1 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            WHY TRUCK PARKING?
          </h1>
          <p className="text-[12px] sm:body-large max-w-4xl mx-auto" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            Understanding the critical need for secure, accessible truck parking infrastructure from both driver and community perspectives.
          </p>
        </div>
      </section>

      {/* Driver's Perspective Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              A TRUCK DRIVER&apos;S PERSPECTIVE
            </h2>
            <p className="body-large" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              The daily challenges faced by truck drivers highlight the urgent need for better parking infrastructure.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {driverStats.map((item, index) => (
              <div key={index} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-button-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                    {item.stat}
                  </div>
                </div>
                <p className="body-medium leading-relaxed" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Driver Quote */}
          <div className="rounded-lg p-8 shadow-sm border relative" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
            <blockquote className="body-large italic mb-4" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              &quot;There&apos;s nothing worse than pulling into a city at night and then trying to find a place to park. Sometimes you have to depend on your delivery time and how much drive time you have on your clock to work with. I avoid it if I can.&quot;
            </blockquote>
            <p className="font-semibold absolute bottom-4 right-6" style={{ color: 'var(--djh-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>- ALAN, TRUCK DRIVER</p>
          </div>
        </div>
      </section>

      {/* Community Perspective Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              A COMMUNITY PERSPECTIVE
            </h2>
            <p className="body-large" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              The impact of inadequate truck parking extends beyond drivers to affect entire communities and road safety.
            </p>
          </div>

          {/* National Statistics - Prominent Display */}
          <div className="mb-6">
            <div className="rounded-lg p-8 shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <p className="text-sm font-medium text-center mb-2" style={{ color: '#02862A', fontFamily: 'Poppins, Arial, sans-serif' }}>2022 STATISTICS</p>
              <h3 className="heading-3 mb-6 text-center" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>US TRUCK PARKING CRISIS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nationalStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#02862A', fontFamily: 'Poppins, Arial, sans-serif' }}>
                      {stat.number}
                    </div>
                    <p className="body-medium mb-2" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                      {stat.description}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--djh-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Community Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-lg p-8 shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <h3 className="heading-3 mb-6" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>TEXAS STATISTICS</h3>
              <div className="space-y-4">
                {texasStats.map((stat, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl font-bold w-20 flex-shrink-0" style={{ color: '#02862A', fontFamily: 'Poppins, Arial, sans-serif' }}>
                      {stat.number}
                    </div>
                    <p className="body-medium ml-5" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif', marginTop: '3px' }}>
                      {stat.description.replace(/\((\d{4}-\d{4})\)/, '')}
                      {stat.description.includes('(2013-2017)') && (
                        <span className="text-xs" style={{ color: 'var(--djh-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}> (2013-2017)</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg p-8 shadow-sm border" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
              <h3 className="heading-3 mb-6" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>SAFETY CONCERNS</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-button-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                    Sleep deprivation could be a factor in up to <strong>40%</strong> of all semi-truck accidents
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-button-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                    <strong>96%</strong> of truckers have admittedly parked in areas not designated for trucks
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-button-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="body-medium" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                    <strong>70%</strong> of drivers have had to violate Hours of Service to find parking
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bottom-section-bg)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            THE SOLUTION: SECURE, MANAGED TRUCK PARKING
          </h2>
          <p className="body-large mb-6" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            DJH is addressing these critical issues by developing secure, tech-enabled, fully managed parking solutions in high-demand freight corridors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/journeyline-properties"
              className="btn-primary"
            >
              Learn About Our Properties
            </a>
            <a
              href="/riggys"
              className="btn-secondary"
            >
              Explore Riggy&apos;s Facilities
            </a>
            <a
              href="https://www.linkedin.com/company/direct-journeyline-holdings-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center"
            >
              <img 
                src="/logos/Linkedin-logo-white-png-wordmark-icon-horizontal-900x233.png" 
                alt="LinkedIn" 
                className="w-20 h-5 object-contain"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

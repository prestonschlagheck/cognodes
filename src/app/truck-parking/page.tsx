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

  const communityStats = [
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
    },
    {
      number: "60%+",
      description: "of Texas truck drivers park in unauthorized locations weekly"
    }
  ];

  return (
    <div className="min-h-screen bg-page">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-9 sm:pb-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-1 mb-6">
            WHY TRUCK PARKING?
          </h1>
          <p className="text-[12px] sm:body-large text-gray-200 max-w-4xl mx-auto">
            Understanding the critical need for secure, accessible truck parking infrastructure from both driver and community perspectives.
          </p>
        </div>
      </section>

      {/* Driver's Perspective Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              A TRUCK DRIVER&apos;S PERSPECTIVE
            </h2>
            <p className="body-large text-gray-300">
              The daily challenges faced by truck drivers highlight the urgent need for better parking infrastructure.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {driverStats.map((item, index) => (
              <div key={index} className="p-8 bg-[#4B5563] rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-button-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {item.stat}
                  </div>
                </div>
                <p className="body-medium text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Driver Quote */}
          <div className="bg-[#4B5563] rounded-lg p-8 shadow-sm border border-[#4B5563] relative">
            <blockquote className="body-large text-gray-200 italic mb-4">
              &quot;There&apos;s nothing worse than pulling into a city at night and then trying to find a place to park. Sometimes you have to depend on your delivery time and how much drive time you have on your clock to work with. I avoid it if I can.&quot;
            </blockquote>
            <p className="text-gray-300 font-semibold absolute bottom-4 right-6">- ALAN, TRUCK DRIVER</p>
          </div>
        </div>
      </section>

      {/* Community Perspective Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              A COMMUNITY PERSPECTIVE
            </h2>
            <p className="body-large text-gray-300">
              The impact of inadequate truck parking extends beyond drivers to affect entire communities and road safety.
            </p>
          </div>

          {/* Community Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#4B5563] rounded-lg p-8 shadow-sm border border-[#4B5563]">
              <h3 className="heading-3 text-white mb-6">Texas Statistics</h3>
              <div className="space-y-4">
                {communityStats.map((stat, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl font-bold text-white w-20 flex-shrink-0">
                      {stat.number}
                    </div>
                    <p className="body-medium text-white ml-5">
                      {stat.description.replace(/\((\d{4}-\d{4})\)/, '')}
                      {stat.description.includes('(2013-2017)') && (
                        <span className="text-xs text-gray-400"> (2013-2017)</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#4B5563] rounded-lg p-8 shadow-sm border border-[#4B5563]">
              <h3 className="heading-3 text-white mb-6">Safety Concerns</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-button-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="body-medium text-gray-300">
                    Sleep deprivation could be a factor in up to <strong>40%</strong> of all semi-truck accidents
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-button-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <p className="body-medium text-gray-300">
                    <strong>96%</strong> of truckers have admittedly parked in areas not designated for trucks
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-button-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="body-medium text-gray-300">
                    <strong>70%</strong> of drivers have had to violate Hours of Service to find parking
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="heading-3 text-white mb-6">
              The Solution: Secure, Managed Truck Parking
            </h3>
            <p className="body-large text-gray-300 max-w-4xl mx-auto mb-8">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

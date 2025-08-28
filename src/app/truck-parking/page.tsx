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
      stat: "56 min",
      description: "average time drivers spend looking for parking daily"
    },
    {
      icon: TrendingUp,
      stat: "12%",
              description: "of driver&apos;s annual income lost searching for parking"
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
    <div className="min-h-screen bg-djh-primary">
      {/* Hero Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
            WHY TRUCK PARKING?
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
            Understanding the critical need for secure, accessible truck parking infrastructure from both driver and community perspectives.
          </p>
        </div>
      </section>

      {/* Driver's Perspective Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-djh-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              A TRUCK DRIVER&apos;S PERSPECTIVE
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              The daily challenges faced by truck drivers highlight the urgent need for better parking infrastructure.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {driverStats.map((item, index) => (
              <div key={index} className="text-center p-6 bg-djh-tertiary rounded-lg">
                              <div className="w-16 h-16 bg-djh-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {item.stat}
              </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Driver Quote */}
          <div className="bg-djh-tertiary rounded-2xl p-8 text-center shadow-lg border border-djh-accent">
            <blockquote className="text-lg text-gray-200 italic mb-4">
              &quot;There&apos;s nothing worse than pulling into a city at night and then trying to find a place to park. Sometimes you have to depend on your delivery time and how much drive time you have on your clock to work with. I avoid it if I can.&quot;
            </blockquote>
            <p className="text-gray-500 font-semibold">- Alan, Truck Driver</p>
          </div>
        </div>
      </section>

      {/* Community Perspective Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-djh-primary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              A COMMUNITY PERSPECTIVE
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              The impact of inadequate truck parking extends beyond drivers to affect entire communities and road safety.
            </p>
          </div>

          {/* Community Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-djh-tertiary rounded-lg p-6 shadow-sm border border-djh-accent">
              <h3 className="text-xl font-bold text-djh-accent mb-4">Texas Statistics</h3>
              <div className="space-y-4">
                {communityStats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                                      <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                    <p className="text-sm text-gray-300">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-djh-tertiary rounded-lg p-6 shadow-sm border border-djh-accent">
              <h3 className="text-xl font-bold text-djh-accent mb-4">Safety Concerns</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-djh-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Sleep deprivation could be a factor in up to <strong>40%</strong> of all semi-truck accidents
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-djh-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    <strong>96%</strong> of truckers have admittedly parked in areas not designated for trucks
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-djh-accent mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <strong>70%</strong> have had to violate Hours of Service to find parking
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="heading-3 text-white mb-4">
              The Solution: Secure, Managed Truck Parking
            </h3>
            <p className="body-large text-gray-300 max-w-3xl mx-auto mb-8">
              DJH is addressing these critical issues by developing secure, tech-enabled, fully managed parking solutions in high-demand freight corridors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/journeyline-properties"
                className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Learn About Our Properties
              </a>
              <a
                href="/riggys"
                className="border-2 border-gray-500 text-gray-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-500 hover:text-white transition-colors inline-flex items-center justify-center shadow-lg"
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

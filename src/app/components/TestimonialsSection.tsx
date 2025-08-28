import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Since using Truckbays, we've seen a significant decrease in our time to manage gate access for our drivers at the lot. Very easy to use for us and the drivers.",
      author: "JULIAN C.",
      role: "FLEET MANAGER",
      rating: 5,
      featured: true
    },
    {
      quote: "Nice clean facility and quiet. The manager she is so awesome. The showers were absolutely clean. This was the best place ever to stay. Drivers if you're in San Antonio this is the place to stay. It's worth the money.",
      author: "Michael Proctor",
      location: "San Antonio, TX",
      rating: 5,
      featured: false
    },
    {
      quote: "The staff was friendly and helpful, offering clear instructions and assistance when needed. I appreciated the extra amenities, like restrooms and a lounge area for drivers, which were clean and well-maintained.",
      author: "Andre S.",
      location: "San Antonio, TX",
      rating: 5,
      featured: false
    },
    {
      quote: "I love the parking. I love the fact you can reserve and manage parking online. You do not need deal with phone calls to reserve spot. Big spot numbers and green lines are top notch. Just keep that way guys! 👋👋👋",
      author: "Domagoj Kerestes",
      location: "Houston, TX",
      rating: 5,
      featured: false
    },
    {
      quote: "Very Safe place to park. Active surveillance cameras to protect your equipment / truck and detour theft. Remote entry of auto-open security gate through app on your phone that recognizes you for entry and exit.",
      author: "Sincere Roby",
      location: "Houston, TX",
      rating: 5,
      featured: false
    },
    {
      quote: "With Truckbays, we manage the entire operation while giving our tenants the best parking experience. You'll stop taking a hundred calls and feel in control.",
      author: "RYAN B.",
      role: "NTP",
      rating: 5,
      featured: true
    }
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
            OUR CUSTOMERS SAY IT BEST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 shadow-sm border border-gray-600 ${
                testimonial.featured ? 'bg-gray-600 text-white' : 'bg-gray-700'
              }`}
            >
              {testimonial.featured && (
                <div className="text-2xl text-white mb-3">&quot;</div>
              )}
              
              <p className={`text-sm leading-relaxed mb-3 ${
                testimonial.featured ? 'text-white' : 'text-gray-300'
              }`}>
                {testimonial.quote}
              </p>

              {/* Rating Stars */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      testimonial.featured ? 'text-white' : 'text-yellow-400'
                    } fill-current`}
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className={`${
                testimonial.featured ? 'text-white' : 'text-white'
              }`}>
                <p className="font-semibold text-sm">
                  {testimonial.author}
                </p>
                {testimonial.role && (
                  <p className="text-xs opacity-80">{testimonial.role}</p>
                )}
                {testimonial.location && (
                  <p className="text-xs opacity-80">{testimonial.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([]);

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonials(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [index] // Only allow one card to be open at a time
    );
  };

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
      author: "Michael P.",
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
      quote: "I love the parking. I love the fact you can reserve and manage parking online. You do not need deal with phone calls to reserve spot. Big spot numbers and green lines are top notch. Just keep that way guys!",
      author: "Domagoj K.",
      location: "Houston, TX",
      rating: 5,
      featured: false
    },
    {
      quote: "Very Safe place to park. Active surveillance cameras to protect your equipment / truck and detour theft. Remote entry of auto-open security gate through app on your phone that recognizes you for entry and exit.",
      author: "Sincere R.",
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
    <section className="section-spacious" style={{ backgroundColor: 'var(--page-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="heading-2" style={{ color: 'var(--djh-white)' }}>
            OUR CUSTOMERS SAY IT BEST
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center md:items-stretch">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg p-7 shadow-sm min-w-[360px] md:min-w-0 w-full md:w-auto md:relative ${
                testimonial.featured 
                  ? 'text-white' 
                  : 'text-white'
              } ${index > 0 ? 'md:mt-0 -mt-11' : ''}`}
              style={{
                backgroundColor: 'var(--container-bg)',
                borderColor: 'var(--djh-dark-gray)',
                boxShadow: '0 -3.6px 12px -2.4px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Mobile Compact View */}
              <div className="md:hidden cursor-pointer" onClick={() => toggleTestimonial(index)}>
                {/* Author Info and Rating - Always Visible */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="font-semibold body-medium uppercase" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                      {testimonial.author}
                    </p>
                    {testimonial.role && (
                      <p className="body-small opacity-80 uppercase" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>{testimonial.role}</p>
                    )}
                    {testimonial.location && (
                      <p className="body-small opacity-80 uppercase" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>{testimonial.location}</p>
                    )}
                  </div>
                  
                  {/* Star Rating - Top Right */}
                  <div className="flex items-center space-x-1 ml-4 mt-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Simple Arrow Toggle Button - Right Aligned, Close to Stars */}
                <div className="flex justify-end -mt-9 mb-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTestimonial(index);
                    }}
                    className="text-white hover:text-white/80 transition-all duration-300 transform"
                  >
                    <div className={`transition-transform duration-300 ${
                      expandedTestimonials.includes(index) ? 'rotate-180' : ''
                    }`}>
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </button>
                </div>



                {/* Full Review - Expandable */}
                {expandedTestimonials.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    {testimonial.featured && (
                      <div className="text-3xl text-white mb-3">&quot;</div>
                    )}
                    <p className="body-medium leading-relaxed mb-3" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                      {testimonial.quote}
                    </p>
                  </div>
                )}
              </div>

              {/* Desktop Full View - Unchanged */}
              <div className="hidden md:block md:flex-1">
                {testimonial.featured && (
                  <div className="text-3xl text-white mb-4">&quot;</div>
                )}
                
                <p className="body-medium leading-relaxed mb-4 md:mb-[115px]" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                  {testimonial.quote}
                </p>

                {/* Author Info - Pushed to bottom */}
                <div className={`md:absolute md:bottom-[12px] md:left-7 md:right-7 ${
                  testimonial.featured ? 'text-white' : 'text-white'
                }`}>
                  {/* Rating Stars - Above author info */}
                  <div className="flex items-center mb-3 mt-7">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  
                  <p className="font-semibold body-medium uppercase" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
                    {testimonial.author}
                  </p>
                  {testimonial.role && (
                    <p className="body-small opacity-80 uppercase" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>{testimonial.role}</p>
                  )}
                  {testimonial.location && (
                    <p className="body-small opacity-80 uppercase md:mb-[3px]" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>{testimonial.location}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

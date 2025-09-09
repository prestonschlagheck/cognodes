import TeamMemberCard from '../components/TeamMemberCard';

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Ken Parent",
      title: "Chief Executive Officer",
      image: "/placeholder-avatar.jpg", // Replace with actual image
      bio: "Ken Parent brings significant managerial and operational experience, including over 20 years at Pilot Flying J. From 2014 to 2020, he served as President of Pilot Flying J, overseeing all company functions and strategic initiatives that led to significant growth. His previous background includes roles at Mobil Oil and PepsiCo, where he gained multi-unit experience and deep knowledge of the fuel and retail industries. He also serves as Vice-Chairman of Westrock Coffee and is on the boards of BJ's Wholesale, Hollywood Feed, and Parker's Convenience Stores. Ken holds a Master of Business Administration and a bachelor's degree in Marketing from San Diego State University."
    },
    {
      name: "David Olson",
      title: "Chief Operating Officer",
      image: "/placeholder-avatar.jpg", // Replace with actual image
      bio: "David co-founded Riggy's Truck Parking in 2021 and oversees company-wide operations, construction, asset performance, and growth strategy for their network of secure truck parking facilities. He brings 15 years of heavy industrial and energy experience, including work on U.S. Army Corps of Engineers infrastructure, GE Power projects, and $400 million EPC oil and gas projects. He held project manager roles at Fagen Inc, The Ross Group, GE Power, and SOFEC. David was raised by an over-the-road trucker and married into another trucking family, which gives him firsthand empathy for drivers. He earned a bachelor's degree in Construction Management from Bemidji State University."
    },
    {
      name: "Cory Schupp",
      title: "Chief Financial Officer",
      image: "/placeholder-avatar.jpg", // Replace with actual image
      bio: "Cory Schupp serves as Chief Financial Officer, responsible for all financial-related activities. Most recently, he was Vice President, Finance at Pilot Travel Centers, leading credit, procurement, accounts receivable, risk, and Pilot self-distribution. He joined Pilot in 2011 and has served in various finance roles supporting operations, financial planning and analysis, and mergers and acquisitions. Before Pilot, Cory was a Senior Director at Alvarez & Marsal for over 11 years, where he developed creative financial, operational, and strategic solutions for clients facing business challenges across diverse industries including energy, logistics, manufacturing, health care, and public education. Cory holds a Master of Business Administration from the University of Tennessee and a bachelor's degree in psychology from Duquesne University."
    },
    {
      name: "Adrian Rodriguez",
      title: "Chief Technology Officer",
      image: "/placeholder-avatar.jpg", // Replace with actual image
      bio: "Adrian is a product innovator and entrepreneur with over a decade of experience in truck parking operations and logistics. Adrian is the Founder of Truckbays, where he leads product vision, design, and technical execution for the platform. Before launching Truckbays, Adrian spent more than 10 years developing and managing one of the largest truck parking facilities in the U.S. This operational foundation shaped his approach to building intuitive, tech-driven solutions for the truck parking industry. Earlier in his career, Adrian was a product designer at SwagUp, where he contributed to the company's rapid growth."
    },
    {
      name: "David Hughes",
      title: "Chief Strategy Officer",
      image: "/placeholder-avatar.jpg", // Replace with actual image
      bio: "David serves as Chief Strategy Officer and is responsible for building strategies related to site development, property management, and technology. David will oversee all sales and marketing activities. Most recently, David was Sr. Vice President, Sales at Pilot Flying J where he led 230 team members focused on growing and maintaining a customer base of over 80,000 direct fleet customers. David joined Pilot in 2012 and previously served as President of Pilot Logistics and Transportation. Prior to joining Pilot, David spent 15 years in various positions in the trucking industry including Senior Vice President and Treasurer of Covenant Transportation Group and Chief Financial officer of Star Transportation. David holds a Master of Business Administration and a Bachelor of Business Administration from East Tennessee State University."
    },
    {
      name: "Brad Butcher",
      title: "Real Estate & Development Executive",
      image: "/placeholder-avatar.jpg", // Replace with actual image
      bio: "Brad will serve as Real Estate & Development Executive and will be involved in leading all Real Estate & Development activities for the company. With over 30 years of experience working in a variety of retail, commercial, and industrial real estate & development roles including truck stop-travel center, convenient store and self-storage site selection, contract negotiations, project management, and development, Brad will be at the center of all development activities. Brad's career has included employment, consulting, and representation of a variety of national and regional retail, commercial, and industrial companies including Pilot Travel Centers, Loves Travel Centers, Road Ranger Truck Stops, Dollar General, Public Storage and Weigel's. Brad holds a Bachelor's degree in Business Management from The University of Tennessee Chattanooga and has held a Real Estate License for over 25 years."
    },
    {
      name: "Jason Fogle",
      title: "Real Estate & Development/Sales Executive",
      image: "/placeholder-avatar.jpg", // Replace with actual image
      bio: "Jason has worked at Pilot Flying J for over 10 years in a variety of roles including operations, sales, and primarily real estate. His site selection and development efforts as Sr. Real Estate Manager have been instrumental in fueling growth and creating the largest travel center network. He also served in a similar capacity for RaceTrac's development of travel center locations from 2020-2022. In addition, Jason's real estate background includes three years at Amazon working to identify, acquire, and develop data center campuses, warehouses, and support infrastructure in North America. Jason holds a bachelor's degree in biology from the University of Memphis, a dual JD/MBA from the Cecil C. Humphrey's School of Law and Fogelman College of Business, and later a LL.M. in Real Property Development from The University of Miami School of Law as a Merit Scholar."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-9 sm:pb-20 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: 'var(--container-bg)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-1 mb-4" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            OUR TEAM
          </h1>
          <p className="text-[12px] sm:body-large max-w-4xl mx-auto" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            Meet the experienced professionals who are transforming truck parking infrastructure across the nation.
          </p>
        </div>
      </section>

      {/* Team Members List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.slice(0, -1).map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
            {/* Last team member spans full width */}
            <div className="md:col-span-2">
              <TeamMemberCard member={teamMembers[teamMembers.length - 1]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

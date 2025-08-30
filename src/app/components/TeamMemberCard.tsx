interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {

  return (
    <div className="card-standard overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        {/* Image and Basic Info - Left Side */}
        <div className="md:w-1/3 p-9 text-center md:text-left">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-button-primary rounded-full flex items-center justify-center mx-auto md:mx-0 mb-7">
            <span className="text-white font-bold text-3xl md:text-4xl">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          <h3 className="heading-4 text-white mb-3">
            {member.name}
          </h3>
          <p className="body-medium text-gray-400 font-semibold">
            {member.title}
          </p>
        </div>

        {/* Bio Section - Right Side */}
        <div className="md:w-2/3 p-9 border-t md:border-t-0 md:border-l border-[#4B5563]/30">
          <p className="body-medium text-gray-300 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

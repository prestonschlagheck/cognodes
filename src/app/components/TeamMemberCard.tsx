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
    <div className="bg-dark-light rounded-lg shadow-sm border border-dark-light overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        {/* Image and Basic Info - Left Side */}
        <div className="md:w-1/3 p-6 text-center md:text-left">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-500 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
            <span className="text-white font-bold text-xl md:text-2xl">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {member.name}
          </h3>
          <p className="text-gray-500 font-semibold text-sm">
            {member.title}
          </p>
        </div>

        {/* Bio Section - Right Side */}
        <div className="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-dark-light/30">
          <p className="text-sm text-gray-300 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

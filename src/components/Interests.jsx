import { 
  CodeBracketIcon, 
  LightBulbIcon, 
  RocketLaunchIcon, 
  PuzzlePieceIcon,
  WrenchIcon,
  UserGroupIcon,
  BookOpenIcon,
  SparklesIcon,
  TrophyIcon,
  StarIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Interests = () => {
  const interests = [
    { 
      icon: <CodeBracketIcon className="h-6 w-6 text-[#7AE2CF]" />,
      text: "Crafting beautiful and interactive frontends that are intuitive to use"
    },
    { 
      icon: <SparklesIcon className="h-6 w-6 text-[#7AE2CF]" />,
      text: "Building real-world applications from scratch with passion"
    },
    { 
      icon: <WrenchIcon className="h-6 w-6 text-[#7AE2CF]" />,
      text: "Solving tricky bugs as rewarding challenges to overcome"
    },
    { 
      icon: <LightBulbIcon className="h-6 w-6 text-[#7AE2CF]" />,
      text: "Understanding how things work under the hood in systems"
    }
  ];

  const achievements = [
    { icon: <TrophyIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "5000+ FOLLOWERS ON LINKEDIN" },
    { icon: <CodeBracketIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "40+ GITHUB PROJECTS" },
    { icon: <PuzzlePieceIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "PROBLEM SOLVING AND DSA" },
    { icon: <RocketLaunchIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "HIGHLY INTERESTED IN FULL STACK PROJECTS" },
    { icon: <AcademicCapIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "ATTENDED HACKATHONS & CODING EVENTS" },
    { icon: <WrenchIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "HANDS-ON WITH LINUX" },
    { icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "EXCELLENT COMMUNICATION SKILLS" },
    { icon: <BookOpenIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "CONSISTENTLY LEARNING NEW TECH" },
    { icon: <StarIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "OPEN SOURCE CONTRIBUTIONS" },
    { icon: <UserGroupIcon className="h-6 w-6 text-[#7AE2CF]" />, text: "STRONG NETWORKING MINDSET" }
  ];

  return (
    <section id="interests" className="relative w-full pt-16 pb-24 bg-gradient-to-b from-[#06202B] to-[#040D12]">
      {/* Remove top gradient overlay since Projects already ends with #06202B */}
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#077A7D] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#7AE2CF] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Tightened spacing */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Interests column */}
          <div className="lg:w-1/2">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7AE2CF] to-[#93B1A6] mb-3">
                My Passions
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#7AE2CF] to-[#077A7D] mb-4"></div>
              <p className="text-lg text-[#F5EEDD]/80">
                The driving forces behind my work as a developer
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="relative group rounded-xl p-5 bg-[#06202B]/80 border border-[#077A7D]/30 hover:border-[#7AE2CF]/50 transition-all duration-300"
                >
                  <div className="flex space-x-4 items-start">
                    <div className="p-3 rounded-lg bg-[#183D3D]/50 border border-[#5C8374]/30">
                      {interest.icon}
                    </div>
                    <p className="text-[#F5EEDD] flex-1">
                      {interest.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements column */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7AE2CF] to-[#93B1A6] mb-3">
                My Milestones
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#7AE2CF] to-[#077A7D] mb-4"></div>
              <p className="text-lg text-[#F5EEDD]/80">
                Key accomplishments showcasing my growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="rounded-xl p-4 bg-[#06202B]/80 border border-[#077A7D]/30 hover:border-[#7AE2CF]/50 transition-colors duration-300"
                >
                  <div className="flex space-x-3 items-center">
                    <div className="p-2 rounded-md bg-[#183D3D]/50 border border-[#5C8374]/30">
                      {achievement.icon}
                    </div>
                    <p className="text-sm md:text-base text-[#F5EEDD]">
                      {achievement.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
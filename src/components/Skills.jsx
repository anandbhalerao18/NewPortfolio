import { CodeBracketSquareIcon, CpuChipIcon, ServerStackIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const skillCategories = [
    {
      icon: <CodeBracketSquareIcon className="h-6 w-6 text-[#7AE2CF]" />,
      title: "LANGUAGES",
      skills: ["C", "C++", "JavaScript", "Python", "Java (OOP)", "Go", "Shell Scripting", "HTML/CSS"]
    },
    {
      icon: <CpuChipIcon className="h-6 w-6 text-[#7AE2CF]" />,
      title: "LIB / FRAMEWORKS",
      skills: ["Node.js", "React.js", "Next.js", "Express.js", "Tailwind CSS", "Django", "Flask", "Bootstrap"]
    },
    {
      icon: <ServerStackIcon className="h-6 w-6 text-[#7AE2CF]" />,
      title: "DATABASE",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <CommandLineIcon className="h-6 w-6 text-[#7AE2CF]" />,
      title: "TOOLS",
      skills: ["Arch Linux", "Neovim", "Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="relative w-full py-20 bg-gradient-to-b from-[#183D3D] to-[#06202B] overflow-hidden">
      {/* Seamless gradient transition */}
      <div className="absolute -top-1 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-[#183D3D] z-10"></div>
      
      {/* Decorative SVG elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0L120 60L60 120L0 60L60 0Z" stroke="#7AE2CF" strokeWidth="2" strokeDasharray="8 4"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="75" r="70" stroke="#5C8374" strokeWidth="2" strokeDasharray="10 5"/>
        </svg>
      </div>
      
      {/* Floating dots decoration */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-[#7AE2CF] opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-[#5C8374] opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-20">
        {/* Title section - More elegant and free-flowing */}
        <div className="mb-16 relative">
          <div className="flex items-start">
            <div className="relative mt-3 mr-4 hidden sm:block">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#7AE2CF] to-[#5C8374]"></div>
              <div className="absolute -left-1 -top-1 w-3 h-3 rounded-full bg-[#7AE2CF]"></div>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7AE2CF] to-[#F5EEDD] inline-block">
                Skills
                <span className="text-[#7AE2CF] ml-2">.</span>
              </h2>
              <p className="text-xl text-[#F5EEDD]/90 mt-3 max-w-2xl leading-relaxed">
                Technologies I <span className="text-[#7AE2CF] font-medium">master</span> to craft exceptional digital experiences
              </p>
            </div>
          </div>
          
          {/* Animated underline */}
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#7AE2CF] to-transparent"></div>
        </div>

        {/* Skills grid - Enhanced glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="relative rounded-2xl p-6 border border-[#5C8374]/20 hover:border-[#7AE2CF]/40 transition-all duration-300 hover:scale-[1.02] group bg-[#06202B]/60 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-[#183D3D]/50 mr-3 border border-[#5C8374]/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#7AE2CF]">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="h-2 w-2 bg-[#7AE2CF] rounded-full mr-3 animate-pulse" style={{ animationDelay: `${skillIndex * 0.1}s` }}></div>
                    <p className="text-lg text-[#F5EEDD]/90 group-hover:text-[#F5EEDD] transition-colors duration-300">{skill}</p>
                  </div>
                ))}
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl border border-[#7AE2CF]/0 group-hover:border-[#7AE2CF]/30 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AE2CF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
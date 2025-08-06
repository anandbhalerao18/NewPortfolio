import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon, 
  ServerIcon, 
  CpuChipIcon, 
  CommandLineIcon, 
  EyeIcon, 
  LockClosedIcon, 
  ShieldCheckIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "FULL STACK URL SHORTENER",
      description: "A complete URL shortening service with analytics dashboard",
      github: "https://github.com/anandbhalerao18/url-shortner",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_just-built-a-full-stack-url-shortener-activity-7349144899276963841-hl-8",
      icon: <ServerIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "DNS RESOLVER APP",
      description: "Full-stack application to resolve and visualize DNS records",
      github: "https://github.com/anandbhalerao18/dns-resolver-app",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_just-launched-a-full-stack-dns-resolver-activity-7348423645062488065-A6Nk",
      icon: <CpuChipIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["Next.js", "Express", "DNS"]
    },
    {
      title: "GTA 6 LANDING PAGE",
      description: "Immersive 3D landing page concept for GTA VI",
      github: "https://github.com/anandbhalerao18/GTA-Six-frontend",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_reactjs-frontenddevelopment-3ddesign-activity-7342882970472538112-7GN6",
      icon: <EyeIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["React", "Three.js", "Tailwind"]
    },
    {
      title: "GO HTTP SERVER",
      description: "High-performance HTTP server implementation in Go",
      github: "https://github.com/anandbhalerao18/Basic-GoLang-Server",
      demo: null,
      icon: <CommandLineIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["Go", "Net/HTTP"]
    },
    {
      title: "STOCK SCRAPER",
      description: "Automated stock data scraper with visualization",
      github: "https://github.com/anandbhalerao18/stock-scraper",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_golang-webscraping-datavisualization-activity-7273421398511886336-0MSH",
      icon: <CodeBracketIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["Go", "Colly", "Matplotlib"]
    },
    {
      title: "SYSTEM MEMORY MONITOR",
      description: "C program for real-time system memory monitoring",
      github: "https://github.com/anandbhalerao18/sys-mem-watch",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_cprogramming-linuxtools-systemmonitoring-activity-7349364806170152960-SPRC",
      icon: <CpuChipIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["C", "Linux"]
    },
    {
      title: "PASSWORD GENERATOR",
      description: "Secure password generator with complexity controls",
      github: "https://github.com/anandbhalerao18/PassGenrator",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_react-reactjs-webdevelopment-activity-7356686533896167424-RUTe",
      icon: <LockClosedIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["React", "Crypto API"]
    },
    {
      title: "GITHUB PROFILE VIEWER",
      description: "Application to search and view GitHub profiles",
      github: "https://github.com/anandbhalerao18/ReactRoutingPro",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_reactjs-frontenddevelopment-webdev-activity-7357383773702840320-ufOq",
      icon: <CodeBracketIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["React", "GitHub API"]
    },
    {
      title: "AUTH VAULT",
      description: "Secure authentication system using Context API",
      github: "https://github.com/anandbhalerao18/ReactContextAPIPro",
      demo: "https://www.linkedin.com/posts/anand-bhalerao-636570280_reactjs-frontenddevelopment-websecurity-activity-7357525801652600832-D-mr",
      icon: <ShieldCheckIcon className="h-5 w-5 text-[#7AE2CF]" />,
      tech: ["React", "Context API", "JWT"]
    }
  ];

  const handleLinkClick = (url, type) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="relative w-full py-24 bg-gradient-to-b from-[#183D3D] to-[#06202B] overflow-hidden">
      {/* Seamless transition */}
      <div className="absolute -top-1 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-[#183D3D] z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-20">
        {/* Title section */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7AE2CF] to-[#93B1A6] mb-4">
              Project Portfolio
            </h2>
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#7AE2CF] to-transparent"></div>
          </div>
          <p className="text-xl text-[#F5EEDD]/80 mx-auto max-w-2xl">
            A collection of my technical implementations and creative solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#06202B]/70 backdrop-blur-sm border border-[#077A7D]/30 hover:border-[#7AE2CF]/50 transition-all duration-500 hover:scale-[1.015]"
            >
              {/* Project content */}
              <div className="p-7 space-y-5">
                {/* Icon and buttons */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-[#183D3D]/50 border border-[#5C8374]/30 group-hover:bg-[#183D3D]/70 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    {project.demo && (
                      <button
                        onClick={() => handleLinkClick(project.demo, 'demo')}
                        className="px-3 py-2 rounded-lg bg-[#183D3D]/40 hover:bg-[#7AE2CF]/10 border border-[#5C8374]/30 hover:border-[#7AE2CF]/40 transition-all duration-300 flex items-center space-x-1.5"
                        aria-label="View Demo"
                      >
                        <PlayCircleIcon className="h-4 w-4 text-[#7AE2CF]" />
                        <span className="text-xs text-[#7AE2CF]">Demo</span>
                      </button>
                    )}
                    <button
                      onClick={() => handleLinkClick(project.github, 'github')}
                      className="px-3 py-2 rounded-lg bg-[#183D3D]/40 hover:bg-[#7AE2CF]/10 border border-[#5C8374]/30 hover:border-[#7AE2CF]/40 transition-all duration-300 flex items-center space-x-1.5"
                      aria-label="View Code"
                    >
                      <CodeBracketIcon className="h-4 w-4 text-[#7AE2CF]" />
                      <span className="text-xs text-[#7AE2CF]">Code</span>
                    </button>
                  </div>
                </div>

                {/* Title and description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#F5EEDD] group-hover:text-[#7AE2CF] transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#F5EEDD]/80 group-hover:text-[#F5EEDD]/90 transition-colors duration-300 text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#183D3D]/40 text-[#7AE2CF] border border-[#5C8374]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effects */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#7AE2CF]/0 group-hover:border-[#7AE2CF]/10 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AE2CF] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating decor elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#077A7D] rounded-full mix-blend-overlay filter blur-3xl"
          style={{
            animation: "float-slow 15s ease-in-out infinite"
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#7AE2CF] rounded-full mix-blend-overlay filter blur-3xl"
          style={{
            animation: "float-slow 15s ease-in-out infinite 2s"
          }}
        ></div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
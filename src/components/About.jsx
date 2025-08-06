import { CodeBracketIcon, LightBulbIcon, RocketLaunchIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section id="about" className="relative w-full pt-32 bg-gradient-to-b from-[#040D12] to-[#183D3D]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#5C8374] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#93B1A6] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-12"> {/* Reduced bottom padding */}
        {/* Content wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8"> {/* Reduced gap */}
          {/* Text content */}
          <div className="w-full lg:w-1/2 space-y-6"> {/* Reduced spacing */}
            <div className="space-y-4"> {/* Reduced spacing */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7AE2CF] to-[#F5EEDD] leading-tight">
                Hello, I'm <span className="text-[#7AE2CF]">Anand</span>
              </h2>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#5C8374] to-[#183D3D]"></div>
              
              <p className="text-xl sm:text-2xl text-[#F5EEDD] leading-relaxed">
                A passionate developer building digital experiences that matter
              </p>
            </div>

            <div className="space-y-4"> {/* Reduced spacing */}
              <div className="flex items-start space-x-4">
                <RocketLaunchIcon className="flex-shrink-0 h-6 w-6 text-[#7AE2CF] mt-1" />
                <p className="text-lg text-[#F5EEDD]">
                  Curious learner with a love for solving problems through code
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <LightBulbIcon className="flex-shrink-0 h-6 w-6 text-[#7AE2CF] mt-1" />
                <p className="text-lg text-[#F5EEDD]">
                  Believe in growth through consistency and learning from failures
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <PuzzlePieceIcon className="flex-shrink-0 h-6 w-6 text-[#7AE2CF] mt-1" />
                <p className="text-lg text-[#F5EEDD]">
                  Approach every challenge with enthusiasm and focus
                </p>
              </div>
            </div>
          </div>

          {/* Visual/content card */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-[#183D3D]/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-[#5C8374]/30 shadow-2xl overflow-hidden"> {/* Reduced padding */}
              <CodeBracketIcon className="absolute top-6 right-6 h-8 w-8 text-[#5C8374]/20" /> {/* Smaller icons */}
              <LightBulbIcon className="absolute bottom-6 left-6 h-8 w-8 text-[#5C8374]/20" /> {/* Smaller icons */}
              
              <div className="space-y-4"> {/* Reduced spacing */}
                <h3 className="text-2xl font-bold text-[#F5EEDD]"> {/* Slightly smaller heading */}
                  My Journey
                </h3>
                
                <p className="text-base text-[#F5EEDD] leading-relaxed"> {/* Slightly smaller text */}
                  My technology journey began with simple interests that grew into a dedication to problem-solving and innovation. I enjoy challenges that push my thinking while staying grounded.
                </p>
                
                <p className="text-base text-[#F5EEDD] leading-relaxed"> {/* Slightly smaller text */}
                  Whether developing something new or improving existing projects, I approach each task with a focus on growth and excellence. I value teamwork, discipline, and continuous learning.
                </p>
                
                <div className="pt-3 border-t border-[#5C8374]/30"> {/* Reduced padding */}
                  <p className="text-[#7AE2CF] font-medium">
                    Always seeking to become a better version of myself
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
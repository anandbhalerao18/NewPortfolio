import { useState, useEffect, useRef } from 'react';
import { 
  DocumentTextIcon,
  PhoneIcon,
  CurrencyDollarIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon,
  XMarkIcon,
  Bars3Icon
} from './SocialIcons';

const Navbar = ({ onUpiClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+91 9421380780';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:bhalerao1895@gmail.com';
  };

  const handleResumeClick = () => {
    window.open('/resume1.pdf', '_blank', 'noopener,noreferrer');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#040D12] shadow-lg py-2' : 'bg-[#040D12]/95 py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-gradient-to-br from-[#5C8374] to-[#183D3D]">
                <svg
                  className="h-6 w-6 text-[#93B1A6]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#93B1A6] tracking-tight">
                Anand Bhalerao
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/anand-bhalerao-636570280/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#5C8374]/30"
            >
              <LinkedinIcon className="h-5 w-5 mr-2 text-[#5C8374] group-hover:text-[#93B1A6]" />
              LinkedIn
            </a>
            <a
              href="https://github.com/anandbhalerao18"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#5C8374]/30"
            >
              <GithubIcon className="h-5 w-5 mr-2 text-[#5C8374] group-hover:text-[#93B1A6]" />
              GitHub
            </a>
            <a
              href="https://x.com/AnandBhaleraooo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#5C8374]/30"
            >
              <TwitterIcon className="h-5 w-5 mr-2 text-[#5C8374] group-hover:text-[#93B1A6]" />
              Twitter
            </a>
            <button
              onClick={handleResumeClick}
              className="group flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#5C8374]/30"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2 text-[#5C8374] group-hover:text-[#93B1A6]" />
              Resume
            </button>
            <button
              onClick={handleCall}
              className="group flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#5C8374]/30"
            >
              <PhoneIcon className="h-5 w-5 mr-2 text-[#5C8374] group-hover:text-[#93B1A6]" />
              Call Me
            </button>
            <button
              onClick={handleEmail}
              className="group flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#5C8374]/30"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2 text-[#5C8374] group-hover:text-[#93B1A6]" />
              Email Me
            </button>
            <button
              onClick={onUpiClick}
              className="group flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#5C8374]/30"
            >
              <CurrencyDollarIcon className="h-5 w-5 mr-2 text-[#5C8374] group-hover:text-[#93B1A6]" />
              Pay Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#93B1A6] hover:bg-[#183D3D] focus:outline-none transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden absolute w-full bg-[#040D12] shadow-xl rounded-b-lg border-t border-[#183D3D]"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            {[
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anand-bhalerao-636570280/', icon: LinkedinIcon },
              { name: 'GitHub', href: 'https://github.com/anandbhalerao18', icon: GithubIcon },
              { name: 'Twitter', href: 'https://x.com/AnandBhaleraooo', icon: TwitterIcon },
              { name: 'Resume', onClick: handleResumeClick, icon: DocumentTextIcon },
              { name: 'Call Me', onClick: handleCall, icon: PhoneIcon },
              { name: 'Email Me', onClick: handleEmail, icon: EnvelopeIcon },
              { name: 'Support Me', onClick: onUpiClick, icon: CurrencyDollarIcon },
            ].map((item) => (
              <button
                key={item.name}
                onClick={item.onClick ? item.onClick : () => window.open(item.href, '_blank')}
                className="w-full flex items-center px-4 py-3 rounded-lg text-base font-semibold text-[#93B1A6] hover:bg-[#183D3D]/60 hover:backdrop-blur-sm transition-colors duration-300 border border-transparent hover:border-[#5C8374]/30"
              >
                <item.icon className="h-5 w-5 mr-3 text-[#5C8374]" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
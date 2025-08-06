import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0D0D12] text-[#FFFFFF] border-t border-[#1A1A23]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Branding */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-[#7DF9FF]">Anand Bhalerao</h2>
            <p className="text-[#A0A0A0]">
              Full Stack Developer | UI/UX Enthusiast
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/anandbhalerao18" Replace with your GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7DF9FF] hover:text-[#FFD300] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anand-bhalerao-636570280/" // Replace with your LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7DF9FF] hover:text-[#FFD300] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:bhalerao1895@gmail.com"
                className="text-[#7DF9FF] hover:text-[#FFD300] transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-[#7DF9FF]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-[#A0A0A0] hover:text-[#FFD300] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#A0A0A0] hover:text-[#FFD300] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[#A0A0A0] hover:text-[#FFD300] transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#A0A0A0] hover:text-[#FFD300] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-[#7DF9FF]">Get in Touch</h3>
            <div className="space-y-2 text-[#A0A0A0]">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#7DF9FF]" />
                <a
                  href="mailto:bhalerao1895@gmail.com"
                  className="hover:text-[#FFD300] transition-colors"
                >
                  bhalerao1895@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-[#7DF9FF]" />
                <a
                  href="tel:+9421380780"
                  className="hover:text-[#FFD300] transition-colors"
                >
                  +91 9421380780
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A1A23] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A0A0A0] text-sm">
            © {new Date().getFullYear()} Anand Bhalerao. All rights reserved.
          </p>
          <p className="text-[#A0A0A0] text-sm mt-4 md:mt-0">
            Crafted with <span className="text-[#FFD300]">♥</span> by Anand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'hackathons', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-blue-700 transition-colors"
          >
            Dimple Sri
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`transition-colors hover:text-slate-950 ${
                activeSection === 'about' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, 'skills')}
              className={`transition-colors hover:text-slate-950 ${
                activeSection === 'skills' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`transition-colors hover:text-slate-950 ${
                activeSection === 'projects' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              Projects
            </a>
            <a
              href="#hackathons"
              onClick={(e) => scrollToSection(e, 'hackathons')}
              className={`transition-colors hover:text-slate-950 ${
                activeSection === 'hackathons' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              Hackathons & Ideathons
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`transition-colors hover:text-slate-950 ${
                activeSection === 'contact' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap"
            >
              Let's Connect
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-md">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Projects
          </a>
          <a
            href="#hackathons"
            onClick={(e) => scrollToSection(e, 'hackathons')}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Hackathons & Ideathons
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Contact
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/dimple-sri-nutalapati-635755434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-xs text-slate-600 px-3 py-2 hover:bg-slate-50 rounded-md"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href="https://github.com/nutalapatidimplesri9-collab/dimple-sri-python"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-xs text-slate-600 px-3 py-2 hover:bg-slate-50 rounded-md"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

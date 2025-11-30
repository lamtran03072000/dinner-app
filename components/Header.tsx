
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Utensils } from 'lucide-react';

interface HeaderProps {
  onRegister: () => void;
  onNavigate: (view: any) => void;
  currentView: string;
}

interface NavLink {
  name: string;
  href: string;
  view?: string; 
  subItems?: { name: string; href: string; view?: string }[];
}

const Header: React.FC<HeaderProps> = ({ onRegister, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, link: NavLink | { name: string; href: string; view?: string }) => {
    // 1. Handle View Navigation
    if (link.view) {
      e.preventDefault();
      onNavigate(link.view);
      setMobileMenuOpen(false);
      return;
    }

    // 2. Handle Anchor Scrolling
    if (link.href.startsWith('#')) {
      e.preventDefault();
      const targetId = link.href.substring(1);
      
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          // Offset for fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      };

      if (currentView !== 'home') {
        onNavigate('home');
        // Wait for home view to render before scrolling
        setTimeout(scrollToElement, 100);
      } else {
        scrollToElement();
      }
      setMobileMenuOpen(false);
    }
  };

  const navLinks: NavLink[] = [
    { name: 'Giải pháp SMEs', href: '#sme-solutions' },
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'Về chúng tôi', href: '#about-us' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
           <div className="bg-primary text-white p-1.5 rounded-lg">
             <Utensils size={24} />
           </div>
           <div className="text-2xl font-extrabold text-secondary tracking-tight">
             Dinner App
           </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative cursor-pointer py-2">
              <a 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`flex items-center gap-1 font-medium text-sm hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
              >
                {link.name}
                {link.subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </a>

              {/* Dropdown Menu */}
              {link.subItems && (
                <div className="absolute top-full left-0 pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    {link.subItems.map((sub) => (
                      <a 
                        key={sub.name}
                        href={sub.href}
                        onClick={(e) => handleLinkClick(e, sub)}
                        className="block px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-primary text-gray-700 text-sm font-medium transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Phone size={18} />
            <span>1900 xxxx</span>
          </div>
          <button 
            onClick={onRegister}
            className="bg-primary hover:bg-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Dùng thử miễn phí
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4 lg:hidden max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 pb-2">
              <a 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link)}
                className="text-gray-800 font-bold block mb-2"
              >
                {link.name}
              </a>
              {link.subItems && (
                <div className="pl-4 space-y-3 mb-2 border-l-2 border-gray-100 ml-1">
                  {link.subItems.map(sub => (
                    <a 
                      key={sub.name} 
                      href={sub.href}
                      onClick={(e) => handleLinkClick(e, sub)}
                      className="block text-gray-600 text-sm"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onRegister();
            }}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold"
          >
            Đăng ký ngay
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Menu', page: 'menu' },
    { name: 'Locations', page: 'locations' },
    { name: 'Order Online', page: 'order' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#4A2C2A] text-[#F5E6D3] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Coffee className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#2D5016] rounded-full" />
            </div>
            <div>
              <div className="text-[1.5rem] leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
                Brew & Bloom
              </div>
              <div className="text-[0.7rem] tracking-wider opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                COFFEE ROASTERS
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`relative pb-1 transition-colors ${
                  currentPage === link.page
                    ? 'text-[#D4AF37]'
                    : 'text-[#F5E6D3] hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
                {currentPage === link.page && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </button>
            ))}
            <Button
              onClick={() => onNavigate('order')}
              className="bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full px-6"
            >
              Order Ahead
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded ${
                  currentPage === link.page
                    ? 'bg-[#2D5016] text-[#D4AF37]'
                    : 'text-[#F5E6D3] hover:bg-[#5a3a38]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

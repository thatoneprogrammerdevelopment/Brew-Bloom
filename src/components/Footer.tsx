import { Coffee, Instagram, Facebook, Twitter, MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#4A2C2A] text-[#F5E6D3] pt-16 pb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-[#D4AF37]" />
              <div className="text-[1.25rem]" style={{ fontFamily: 'Pacifico, cursive' }}>
                Brew & Bloom
              </div>
            </div>
            <p className="text-[#F5E6D3]/80 mb-4">
              Artisanal coffee roasters dedicated to sustainability, quality, and community since 2019.
            </p>
            <div className="flex gap-4">
              <button className="hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="hover:text-[#D4AF37] transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-[#D4AF37]">Hours</h3>
            <div className="space-y-2 text-[#F5E6D3]/80">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Monday - Friday: 6:00 AM - 8:00 PM</div>
                  <div>Saturday: 7:00 AM - 9:00 PM</div>
                  <div>Sunday: 7:00 AM - 7:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[#D4AF37]">Contact</h3>
            <div className="space-y-3 text-[#F5E6D3]/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(503) 555-BREW</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@brewandbloom.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Portland, Oregon</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[#D4AF37]">Quick Links</h3>
            <div className="space-y-2 text-[#F5E6D3]/80">
              <button className="block hover:text-[#D4AF37] transition-colors">Bloom Rewards</button>
              <button className="block hover:text-[#D4AF37] transition-colors">Careers</button>
              <button className="block hover:text-[#D4AF37] transition-colors">Wholesale</button>
              <button className="block hover:text-[#D4AF37] transition-colors">Sustainability</button>
              <button className="block hover:text-[#D4AF37] transition-colors">Press</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F5E6D3]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[#F5E6D3]/60">
          <p>&copy; 2025 Brew & Bloom Coffee Roasters. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-[#D4AF37] transition-colors">Privacy Policy</button>
            <button className="hover:text-[#D4AF37] transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

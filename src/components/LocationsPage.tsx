import { MapPin, Clock, Wifi, Car, Home, Calendar, Phone } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LocationsPageProps {
  onNavigate: (page: string) => void;
}

interface Location {
  name: string;
  address: string;
  phone: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  amenities: string[];
  image: string;
  isOpen: boolean;
  events?: string[];
}

export function LocationsPage({ onNavigate }: LocationsPageProps) {
  const locations: Location[] = [
    {
      name: 'Downtown',
      address: '123 SW Morrison Street, Portland, OR 97204',
      phone: '(503) 555-2701',
      hours: {
        weekday: '6:00 AM - 8:00 PM',
        saturday: '7:00 AM - 9:00 PM',
        sunday: '7:00 AM - 7:00 PM',
      },
      amenities: ['WiFi', 'Outdoor Seating', 'Meeting Rooms', 'Parking'],
      image: 'https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc2MjYzMjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOpen: true,
      events: ['Live Music Fridays 7pm', 'Latte Art Workshop Nov 15']
    },
    {
      name: 'Pearl District',
      address: '456 NW 13th Avenue, Portland, OR 97209',
      phone: '(503) 555-2702',
      hours: {
        weekday: '6:30 AM - 7:00 PM',
        saturday: '7:00 AM - 8:00 PM',
        sunday: '7:30 AM - 6:00 PM',
      },
      amenities: ['WiFi', 'Drive-Thru', 'Outdoor Seating'],
      image: 'https://images.unsplash.com/photo-1620260714969-60878ca7a389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwb3V0ZG9vciUyMHNlYXRpbmd8ZW58MXx8fHwxNzYyNjMyMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOpen: true,
      events: ['Coffee Cupping Nov 12']
    },
    {
      name: 'Hawthorne',
      address: '789 SE Hawthorne Blvd, Portland, OR 97214',
      phone: '(503) 555-2703',
      hours: {
        weekday: '6:00 AM - 9:00 PM',
        saturday: '6:30 AM - 10:00 PM',
        sunday: '7:00 AM - 8:00 PM',
      },
      amenities: ['WiFi', 'Outdoor Seating', 'Parking', 'Live Music'],
      image: 'https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc2MjYzMjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOpen: true,
      events: ['Open Mic Night Thursdays 8pm', 'Book Club Nov 20']
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'drive-thru':
        return <Car className="w-4 h-4" />;
      case 'outdoor seating':
        return <Home className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'meeting rooms':
        return <Home className="w-4 h-4" />;
      case 'live music':
        return <Calendar className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F5E6D3] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#4A2C2A] to-[#2D5016] text-[#F5E6D3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[3rem] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            Our Locations
          </h1>
          <p className="text-[1.1rem] text-[#F5E6D3]/90 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Three welcoming spaces across Portland where community gathers over exceptional coffee
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2D5016]/10 to-[#4A2C2A]/10 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-[#2D5016]" />
              <h2 className="text-[1.5rem] text-[#4A2C2A]" style={{ fontFamily: 'Pacifico, cursive' }}>
                Find Us in Portland
              </h2>
            </div>
            <div className="bg-white/50 rounded-xl h-[400px] flex items-center justify-center">
              <div className="text-center text-[#4A2C2A]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                <MapPin className="w-16 h-16 mx-auto mb-4 text-[#2D5016]" />
                <p>Interactive map showing all three locations</p>
                <p className="text-[0.9rem] mt-2">Downtown • Pearl District • Hawthorne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-[300px] lg:h-auto">
                    <ImageWithFallback
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    {location.isOpen && (
                      <Badge className="absolute top-4 left-4 bg-[#2D5016] text-[#F5E6D3] border-0">
                        Open Now
                      </Badge>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <h3 className="text-[2rem] text-[#4A2C2A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                      {location.name}
                    </h3>

                    {/* Address */}
                    <div className="flex items-start gap-3 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <MapPin className="w-5 h-5 text-[#2D5016] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[#4A2C2A]">{location.address}</p>
                        <button className="text-[#2D5016] hover:text-[#3a6b1c] text-[0.9rem] mt-1">
                          Get Directions →
                        </button>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Phone className="w-5 h-5 text-[#2D5016]" />
                      <a href={`tel:${location.phone}`} className="text-[#4A2C2A] hover:text-[#2D5016]">
                        {location.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-[#2D5016]" />
                        <h4 className="text-[#4A2C2A]">Hours</h4>
                      </div>
                      <div className="ml-7 text-[0.9rem] text-[#4A2C2A]/80 space-y-1">
                        <div>Monday - Friday: {location.hours.weekday}</div>
                        <div>Saturday: {location.hours.saturday}</div>
                        <div>Sunday: {location.hours.sunday}</div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="text-[#4A2C2A] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.amenities.map((amenity) => (
                          <Badge
                            key={amenity}
                            className="bg-[#F5E6D3] text-[#4A2C2A] border border-[#4A2C2A]/20 hover:bg-[#4A2C2A]/10"
                          >
                            <span className="mr-1">{getAmenityIcon(amenity)}</span>
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Events */}
                    {location.events && location.events.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-5 h-5 text-[#2D5016]" />
                          <h4 className="text-[#4A2C2A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Upcoming Events
                          </h4>
                        </div>
                        <div className="ml-7 space-y-2">
                          {location.events.map((event, i) => (
                            <div
                              key={i}
                              className="text-[0.9rem] text-[#4A2C2A]/80"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              • {event}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        onClick={() => onNavigate('order')}
                        className="bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full flex-1"
                      >
                        Order from this Location
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4A2C2A] to-[#2D5016] text-[#F5E6D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[2.5rem] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            Can't Decide?
          </h2>
          <p className="text-[1.1rem] text-[#F5E6D3]/90 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Each location has its own unique charm. We invite you to visit all three and find your favorite spot!
          </p>
          <Button
            onClick={() => onNavigate('order')}
            className="bg-[#D4AF37] text-[#4A2C2A] hover:bg-[#c9a02f] rounded-full px-8 py-6"
          >
            Order Online & Choose Your Location
          </Button>
        </div>
      </section>
    </div>
  );
}

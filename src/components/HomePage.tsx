import { ArrowRight, Award, Leaf, Users, Instagram, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Input } from './ui/input';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-[#F5E6D3]">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-[#4A2C2A] to-[#2D5016] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjI2MTg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Latte art"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="bg-[#D4AF37] text-[#4A2C2A] mb-4 border-0 px-4 py-1">
              Limited Time Only ✨
            </Badge>
            <h1 className="text-[3.5rem] text-[#F5E6D3] mb-6 leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
              Spring Bloom Lavender Latte
            </h1>
            <p className="text-[1.1rem] text-[#F5E6D3]/90 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Handcrafted with organic lavender syrup, locally sourced honey, and our signature espresso blend. A floral delight that captures the essence of spring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => onNavigate('order')}
                className="bg-[#D4AF37] text-[#4A2C2A] hover:bg-[#c9a02f] px-8 py-6 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Order Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('menu')}
                variant="outline"
                className="border-2 border-[#F5E6D3] text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#4A2C2A] px-8 py-6 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloom Rewards Banner */}
      <section className="bg-[#2D5016] text-[#F5E6D3] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="text-[1.1rem]">Join Bloom Rewards</div>
                <div className="text-[0.9rem] text-[#F5E6D3]/80">Earn 1 point per $1 spent • Free drink at 100 points</div>
              </div>
            </div>
            <Button className="bg-[#D4AF37] text-[#4A2C2A] hover:bg-[#c9a02f] rounded-full px-8">
              Sign Up Free
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#2D5016] text-[#F5E6D3] mb-4 border-0">Our Story</Badge>
              <h2 className="text-[2.5rem] text-[#4A2C2A] mb-6 leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
                Rooted in Passion, Blooming with Flavor
              </h2>
              <div className="space-y-4 text-[#4A2C2A]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>
                  Founded in 2019 by coffee enthusiasts Emma and Rafael, Brew & Bloom was born from a simple belief: exceptional coffee should honor both the farmers who grow it and the planet we share.
                </p>
                <p>
                  We travel directly to coffee-growing regions, building relationships with farmers who share our commitment to sustainable agriculture. Every bean is hand-selected, then roasted in small batches at our Portland roastery to unlock its unique flavor profile.
                </p>
                <p>
                  Today, we're proud to serve our community from three locations, each one a gathering place for connection, creativity, and of course, exceptional coffee.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Leaf className="w-8 h-8 text-[#2D5016] mx-auto mb-2" />
                  <div className="text-[1.25rem] text-[#4A2C2A]">100%</div>
                  <div className="text-[0.85rem] text-[#4A2C2A]/70">Sustainable</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-[#2D5016] mx-auto mb-2" />
                  <div className="text-[1.25rem] text-[#4A2C2A]">15+</div>
                  <div className="text-[0.85rem] text-[#4A2C2A]/70">Farm Partners</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#2D5016] mx-auto mb-2" />
                  <div className="text-[1.25rem] text-[#4A2C2A]">10K+</div>
                  <div className="text-[0.85rem] text-[#4A2C2A]/70">Rewards Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642682982263-29b1b8061aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmb3VuZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNjMyMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Founders"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#4A2C2A] text-[#F5E6D3] p-6 rounded-xl shadow-xl max-w-[250px]">
                <p className="text-[0.9rem] italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "Every cup tells a story of farmers, artisans, and community coming together."
                </p>
                <div className="text-[0.85rem] text-[#D4AF37] mt-2">— Emma & Rafael, Founders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-[#F5E6D3] to-[#e8d9c0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[2.5rem] text-[#4A2C2A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
              Roaster's Choice
            </h2>
            <p className="text-[#4A2C2A]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hand-selected favorites from our master roasters, showcasing exceptional beans from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626376010399-a82e5ce6de37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZyUyMGJlYW5zfGVufDF8fHx8MTc2MjU4NTAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ethiopian Yirgacheffe"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-[#4A2C2A] border-0">
                  <Star className="w-3 h-3 mr-1" /> Roaster's Choice
                </Badge>
              </div>
              <div className="p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <h3 className="text-[1.25rem] text-[#4A2C2A] mb-2">Ethiopian Yirgacheffe</h3>
                <p className="text-[0.9rem] text-[#4A2C2A]/70 mb-4">
                  Floral notes with bright citrus acidity. Light roast.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[1.1rem] text-[#4A2C2A]">$18.99/lb</span>
                  <Button 
                    onClick={() => onNavigate('order')}
                    className="bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full"
                  >
                    Order
                  </Button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1607618421926-b72c6a99c342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBiYXJpc3RhfGVufDF8fHx8MTc2MjU4NjQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="House Blend"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-[#4A2C2A] border-0">
                  <Star className="w-3 h-3 mr-1" /> Roaster's Choice
                </Badge>
              </div>
              <div className="p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <h3 className="text-[1.25rem] text-[#4A2C2A] mb-2">Bloom House Blend</h3>
                <p className="text-[0.9rem] text-[#4A2C2A]/70 mb-4">
                  Balanced & smooth with chocolate notes. Medium roast.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[1.1rem] text-[#4A2C2A]">$15.99/lb</span>
                  <Button 
                    onClick={() => onNavigate('order')}
                    className="bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full"
                  >
                    Order
                  </Button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587663939437-9f9f1e8c9f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZCUyMGJyZXd8ZW58MXx8fHwxNzYyNjEyMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cold Brew Reserve"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-[#4A2C2A] border-0">
                  <Star className="w-3 h-3 mr-1" /> Roaster's Choice
                </Badge>
              </div>
              <div className="p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <h3 className="text-[1.25rem] text-[#4A2C2A] mb-2">Cold Brew Reserve</h3>
                <p className="text-[0.9rem] text-[#4A2C2A]/70 mb-4">
                  Smooth, low acidity. Perfect for cold brewing. Dark roast.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[1.1rem] text-[#4A2C2A]">$17.99/lb</span>
                  <Button 
                    onClick={() => onNavigate('order')}
                    className="bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full"
                  >
                    Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-6 h-6 text-[#4A2C2A]" />
              <h2 className="text-[2rem] text-[#4A2C2A]" style={{ fontFamily: 'Pacifico, cursive' }}>
                @brewandbloomcoffee
              </h2>
            </div>
            <p className="text-[#4A2C2A]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join our community of coffee lovers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                <ImageWithFallback
                  src={i % 2 === 0 
                    ? "https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc2MjYzMjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    : "https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjI2MTg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  }
                  alt={`Instagram post ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-[#4A2C2A] to-[#2D5016] text-[#F5E6D3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[2.5rem] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            Stay in the Blend
          </h2>
          <p className="text-[1.1rem] text-[#F5E6D3]/90 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get the latest on new roasts, seasonal drinks, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-[#4A2C2A] border-0 rounded-full px-6 py-6 flex-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <Button className="bg-[#D4AF37] text-[#4A2C2A] hover:bg-[#c9a02f] rounded-full px-8 py-6">
              Subscribe
            </Button>
          </div>
          <p className="text-[0.85rem] text-[#F5E6D3]/60 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}

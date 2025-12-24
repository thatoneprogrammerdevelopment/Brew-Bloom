import { useState } from 'react';
import { Star, Milk, Wheat, Nut } from 'lucide-react';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

interface MenuPageProps {
  onNavigate: (page: string) => void;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  sizes?: string[];
  isFavorite?: boolean;
  isNew?: boolean;
  allergens?: string[];
  roastLevel?: 'light' | 'medium' | 'dark';
}

export function MenuPage({ onNavigate }: MenuPageProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const espressoBar: MenuItem[] = [
    { 
      name: 'Classic Espresso', 
      description: 'Rich, bold single origin espresso', 
      price: '$3.50', 
      sizes: ['Single', 'Double'],
      allergens: [],
      isFavorite: true 
    },
    { 
      name: 'Cappuccino', 
      description: 'Espresso with steamed milk and foam', 
      price: '$4.50', 
      sizes: ['8oz', '12oz', '16oz'],
      allergens: ['dairy'],
      isFavorite: true 
    },
    { 
      name: 'Flat White', 
      description: 'Velvety microfoam with double espresso', 
      price: '$4.75', 
      sizes: ['8oz', '12oz'],
      allergens: ['dairy'] 
    },
    { 
      name: 'Caramel Macchiato', 
      description: 'Vanilla, espresso, steamed milk, caramel drizzle', 
      price: '$5.25', 
      sizes: ['12oz', '16oz', '20oz'],
      allergens: ['dairy'] 
    },
    { 
      name: 'Mocha', 
      description: 'Rich chocolate, espresso, steamed milk, whipped cream', 
      price: '$5.50', 
      sizes: ['12oz', '16oz', '20oz'],
      allergens: ['dairy'] 
    },
  ];

  const pourOver: MenuItem[] = [
    { 
      name: 'Ethiopian Yirgacheffe', 
      description: 'Floral notes with bright citrus acidity', 
      price: '$5.00',
      roastLevel: 'light',
      allergens: [] 
    },
    { 
      name: 'Colombian Supremo', 
      description: 'Balanced with caramel sweetness', 
      price: '$4.50',
      roastLevel: 'medium',
      allergens: [] 
    },
    { 
      name: 'Sumatra Mandheling', 
      description: 'Full-bodied with earthy, herbal notes', 
      price: '$5.50',
      roastLevel: 'dark',
      allergens: [] 
    },
  ];

  const coldBrew: MenuItem[] = [
    { 
      name: 'Classic Cold Brew', 
      description: 'Smooth, low acidity, 18-hour steeped', 
      price: '$4.50', 
      sizes: ['12oz', '16oz', '20oz'],
      allergens: [],
      isFavorite: true 
    },
    { 
      name: 'Vanilla Sweet Cream Cold Brew', 
      description: 'Cold brew topped with house-made vanilla cream', 
      price: '$5.50', 
      sizes: ['12oz', '16oz', '20oz'],
      allergens: ['dairy'] 
    },
    { 
      name: 'Nitro Cold Brew', 
      description: 'Nitrogen-infused for creamy texture', 
      price: '$5.75', 
      sizes: ['12oz', '16oz'],
      allergens: [] 
    },
  ];

  const seasonal: MenuItem[] = [
    { 
      name: 'Spring Bloom Lavender Latte', 
      description: 'Organic lavender syrup, honey, espresso, steamed milk', 
      price: '$6.25', 
      sizes: ['12oz', '16oz', '20oz'],
      allergens: ['dairy'],
      isNew: true,
      isFavorite: true 
    },
    { 
      name: 'Honey Cinnamon Cold Foam', 
      description: 'Cold brew with honey cinnamon cold foam', 
      price: '$6.00', 
      sizes: ['16oz', '20oz'],
      allergens: ['dairy'],
      isNew: true 
    },
  ];

  const food: MenuItem[] = [
    { 
      name: 'Butter Croissant', 
      description: 'From our partner bakery, fresh daily', 
      price: '$3.50',
      allergens: ['wheat', 'dairy'] 
    },
    { 
      name: 'Almond Biscotti', 
      description: 'Perfect for dipping, gluten-free option available', 
      price: '$2.75',
      allergens: ['nuts', 'wheat'] 
    },
    { 
      name: 'Avocado Toast', 
      description: 'Smashed avocado, microgreens, everything bagel seasoning', 
      price: '$7.50',
      allergens: ['wheat'] 
    },
    { 
      name: 'Blueberry Muffin', 
      description: 'House-made with local blueberries', 
      price: '$4.25',
      allergens: ['wheat', 'dairy'] 
    },
  ];

  const getAllergenIcon = (allergen: string) => {
    switch (allergen) {
      case 'dairy': return <Milk className="w-4 h-4" />;
      case 'wheat': return <Wheat className="w-4 h-4" />;
      case 'nuts': return <Nut className="w-4 h-4" />;
      default: return null;
    }
  };

  const getRoastIndicator = (level?: 'light' | 'medium' | 'dark') => {
    if (!level) return null;
    const fills = level === 'light' ? 1 : level === 'medium' ? 2 : 3;
    return (
      <div className="flex gap-1 items-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-4 rounded ${i <= fills ? 'bg-[#4A2C2A]' : 'bg-[#4A2C2A]/20'}`}
          />
        ))}
        <span className="text-[0.75rem] text-[#4A2C2A]/70 ml-1 capitalize">{level}</span>
      </div>
    );
  };

  const renderMenuItems = (items: MenuItem[]) => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setSelectedItem(item)}
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[1.1rem] text-[#4A2C2A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.name}
                </h3>
                {item.isFavorite && (
                  <Badge className="bg-[#D4AF37] text-[#4A2C2A] border-0 text-[0.7rem]">
                    <Star className="w-3 h-3 mr-1" /> Barista's Pick
                  </Badge>
                )}
                {item.isNew && (
                  <Badge className="bg-[#2D5016] text-[#F5E6D3] border-0 text-[0.7rem]">
                    New!
                  </Badge>
                )}
              </div>
              <p className="text-[0.9rem] text-[#4A2C2A]/70 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.description}
              </p>
              <div className="flex items-center gap-4">
                {item.roastLevel && getRoastIndicator(item.roastLevel)}
                {item.allergens && item.allergens.length > 0 && (
                  <div className="flex gap-2 items-center text-[#4A2C2A]/50">
                    {item.allergens.map((allergen) => (
                      <div key={allergen} title={allergen}>
                        {getAllergenIcon(allergen)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[1.25rem] text-[#4A2C2A] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.price}
              </div>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('order');
                }}
                className="bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full"
                size="sm"
              >
                Order
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#F5E6D3] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[3rem] text-[#4A2C2A] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            Our Menu
          </h1>
          <p className="text-[1.1rem] text-[#4A2C2A]/70 max-w-2xl mx-auto mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every drink is crafted with care using our signature espresso and single-origin beans
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[0.85rem]" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="flex items-center gap-2 text-[#4A2C2A]/70">
              <Milk className="w-4 h-4" /> Dairy
            </div>
            <div className="flex items-center gap-2 text-[#4A2C2A]/70">
              <Wheat className="w-4 h-4" /> Gluten
            </div>
            <div className="flex items-center gap-2 text-[#4A2C2A]/70">
              <Nut className="w-4 h-4" /> Nuts
            </div>
            <span className="text-[#4A2C2A]/50">|</span>
            <span className="text-[#4A2C2A]/70">Ask about milk alternatives (oat, almond, soy)</span>
          </div>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="espresso" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-transparent mb-8 h-auto">
            <TabsTrigger
              value="espresso"
              className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full py-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Espresso Bar
            </TabsTrigger>
            <TabsTrigger
              value="pourover"
              className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full py-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Pour Over
            </TabsTrigger>
            <TabsTrigger
              value="coldbrew"
              className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full py-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Cold Brew
            </TabsTrigger>
            <TabsTrigger
              value="seasonal"
              className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full py-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Seasonal ✨
            </TabsTrigger>
            <TabsTrigger
              value="food"
              className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full py-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Food
            </TabsTrigger>
          </TabsList>

          <TabsContent value="espresso">{renderMenuItems(espressoBar)}</TabsContent>
          <TabsContent value="pourover">{renderMenuItems(pourOver)}</TabsContent>
          <TabsContent value="coldbrew">{renderMenuItems(coldBrew)}</TabsContent>
          <TabsContent value="seasonal">{renderMenuItems(seasonal)}</TabsContent>
          <TabsContent value="food">{renderMenuItems(food)}</TabsContent>
        </Tabs>

        {/* Customization Info */}
        <div className="mt-12 bg-gradient-to-r from-[#4A2C2A] to-[#2D5016] rounded-2xl p-8 text-[#F5E6D3]">
          <h3 className="text-[1.5rem] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            Make it Yours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div>
              <h4 className="text-[#D4AF37] mb-2">Milk Alternatives</h4>
              <p className="text-[0.9rem] text-[#F5E6D3]/80">Oat (+$0.75) • Almond (+$0.75) • Soy (+$0.50)</p>
            </div>
            <div>
              <h4 className="text-[#D4AF37] mb-2">Customizations</h4>
              <p className="text-[0.9rem] text-[#F5E6D3]/80">Extra Shot (+$1) • Sugar-free options • Hot or Iced</p>
            </div>
            <div>
              <h4 className="text-[#D4AF37] mb-2">Sweetness Levels</h4>
              <p className="text-[0.9rem] text-[#F5E6D3]/80">None • Light • Regular • Extra</p>
            </div>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-[#F5E6D3]">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[1.5rem] text-[#4A2C2A]" style={{ fontFamily: 'Pacifico, cursive' }}>
                  {selectedItem.name}
                </DialogTitle>
                <DialogDescription className="text-[#4A2C2A]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                {selectedItem.sizes && (
                  <div>
                    <h4 className="text-[#4A2C2A] mb-2">Available Sizes</h4>
                    <div className="flex gap-2">
                      {selectedItem.sizes.map((size) => (
                        <Badge key={size} className="bg-[#2D5016] text-[#F5E6D3] border-0">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {selectedItem.allergens && selectedItem.allergens.length > 0 && (
                  <div>
                    <h4 className="text-[#4A2C2A] mb-2">Contains</h4>
                    <div className="flex gap-2">
                      {selectedItem.allergens.map((allergen) => (
                        <div key={allergen} className="flex items-center gap-1 text-[#4A2C2A]/70">
                          {getAllergenIcon(allergen)}
                          <span className="capitalize text-[0.9rem]">{allergen}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <Button
                  onClick={() => {
                    setSelectedItem(null);
                    onNavigate('order');
                  }}
                  className="w-full bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full mt-4"
                >
                  Add to Order - {selectedItem.price}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

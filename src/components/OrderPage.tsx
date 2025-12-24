import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Star, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface OrderPageProps {
  onNavigate: (page: string) => void;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isFavorite?: boolean;
  sizes?: string[];
  customizations?: {
    milk?: string[];
    sweetness?: string[];
    temperature?: string[];
    extras?: { name: string; price: number }[];
  };
}

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedMilk?: string;
  selectedSweetness?: string;
  selectedTemperature?: string;
  selectedExtras?: string[];
}

export function OrderPage(_props: OrderPageProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('downtown');
  const [customization, setCustomization] = useState({
    size: '',
    milk: 'whole',
    sweetness: 'regular',
    temperature: 'hot',
    extras: [] as string[],
  });

  const products: Product[] = [
    {
      id: '1',
      name: 'Spring Bloom Lavender Latte',
      description: 'Organic lavender syrup, honey, espresso, steamed milk',
      price: 6.25,
      image: 'https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjI2MTg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Seasonal',
      isFavorite: true,
      sizes: ['12oz', '16oz', '20oz'],
      customizations: {
        milk: ['Whole', 'Oat (+$0.75)', 'Almond (+$0.75)', 'Soy (+$0.50)'],
        sweetness: ['None', 'Light', 'Regular', 'Extra'],
        temperature: ['Hot', 'Iced'],
        extras: [
          { name: 'Extra Shot', price: 1.0 },
          { name: 'Extra Lavender', price: 0.5 },
          { name: 'Whipped Cream', price: 0.5 },
        ],
      },
    },
    {
      id: '2',
      name: 'Classic Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: 4.50,
      image: 'https://images.unsplash.com/photo-1607618421926-b72c6a99c342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBiYXJpc3RhfGVufDF8fHx8MTc2MjU4NjQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Espresso',
      isFavorite: true,
      sizes: ['8oz', '12oz', '16oz'],
      customizations: {
        milk: ['Whole', 'Oat (+$0.75)', 'Almond (+$0.75)', 'Soy (+$0.50)'],
        sweetness: ['None', 'Light', 'Regular', 'Extra'],
        temperature: ['Hot', 'Iced'],
        extras: [
          { name: 'Extra Shot', price: 1.0 },
          { name: 'Vanilla Syrup', price: 0.5 },
          { name: 'Caramel Drizzle', price: 0.5 },
        ],
      },
    },
    {
      id: '3',
      name: 'Classic Cold Brew',
      description: 'Smooth, low acidity, 18-hour steeped',
      price: 4.50,
      image: 'https://images.unsplash.com/photo-1587663939437-9f9f1e8c9f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZCUyMGJyZXd8ZW58MXx8fHwxNzYyNjEyMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Cold Brew',
      isFavorite: true,
      sizes: ['12oz', '16oz', '20oz'],
      customizations: {
        milk: ['None', 'Whole', 'Oat (+$0.75)', 'Almond (+$0.75)', 'Soy (+$0.50)'],
        sweetness: ['None', 'Light', 'Regular', 'Extra'],
        temperature: ['Iced'],
        extras: [
          { name: 'Vanilla Syrup', price: 0.5 },
          { name: 'Sweet Cream', price: 0.75 },
        ],
      },
    },
    {
      id: '4',
      name: 'Butter Croissant',
      description: 'From our partner bakery, fresh daily',
      price: 3.50,
      image: 'https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cmllcyUyMGJha2VyeSUyMGNyb2lzc2FudHxlbnwxfHx8fDE3NjI2MzIzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Food',
    },
    {
      id: '5',
      name: 'Ethiopian Yirgacheffe',
      description: 'Floral notes with bright citrus acidity. Light roast.',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1626376010399-a82e5ce6de37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZyUyMGJlYW5zfGVufDF8fHx8MTc2MjU4NTAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Beans',
    },
  ];

  const addToCart = () => {
    if (!selectedProduct) return;

    const newItem: CartItem = {
      ...selectedProduct,
      quantity: 1,
      selectedSize: customization.size || selectedProduct.sizes?.[0],
      selectedMilk: customization.milk,
      selectedSweetness: customization.sweetness,
      selectedTemperature: customization.temperature,
      selectedExtras: customization.extras,
    };

    setCart([...cart, newItem]);
    setSelectedProduct(null);
    resetCustomization();
  };

  const resetCustomization = () => {
    setCustomization({
      size: '',
      milk: 'whole',
      sweetness: 'regular',
      temperature: 'hot',
      extras: [],
    });
  };

  const updateQuantity = (index: number, delta: number) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const removeItem = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      let itemPrice = item.price;
      
      // Add milk alternative cost
      if (item.selectedMilk?.includes('Oat') || item.selectedMilk?.includes('Almond')) {
        itemPrice += 0.75;
      } else if (item.selectedMilk?.includes('Soy')) {
        itemPrice += 0.5;
      }
      
      // Add extras cost
      if (item.selectedExtras && item.customizations?.extras) {
        item.selectedExtras.forEach((extraName) => {
          const extra = item.customizations?.extras?.find((e) => e.name === extraName);
          if (extra) itemPrice += extra.price;
        });
      }
      
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const getEstimatedPickupTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="bg-[#F5E6D3] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#4A2C2A] to-[#2D5016] text-[#F5E6D3] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[3rem] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            Order Online
          </h1>
          <p className="text-[1.1rem] text-[#F5E6D3]/90 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Order ahead & skip the line
          </p>

          {/* Location & Pickup Time */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex items-center gap-3 bg-[#F5E6D3] text-[#4A2C2A] px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5" />
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="pearl">Pearl District</SelectItem>
                  <SelectItem value="hawthorne">Hawthorne</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 text-[#F5E6D3]/90" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Clock className="w-4 h-4" />
              <span className="text-[0.9rem]">Estimated pickup: {getEstimatedPickupTime()}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="favorites" className="w-full">
              <TabsList className="grid w-full grid-cols-4 gap-2 bg-transparent mb-6 h-auto">
                <TabsTrigger
                  value="favorites"
                  className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Heart className="w-4 h-4 mr-2" /> Favorites
                </TabsTrigger>
                <TabsTrigger
                  value="drinks"
                  className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Drinks
                </TabsTrigger>
                <TabsTrigger
                  value="food"
                  className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Food
                </TabsTrigger>
                <TabsTrigger
                  value="beans"
                  className="bg-white data-[state=active]:bg-[#4A2C2A] data-[state=active]:text-[#F5E6D3] rounded-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Beans
                </TabsTrigger>
              </TabsList>

              <TabsContent value="favorites">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.filter((p) => p.isFavorite).map((product) => (
                    <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="drinks">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.filter((p) => p.category !== 'Food' && p.category !== 'Beans').map((product) => (
                    <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="food">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.filter((p) => p.category === 'Food').map((product) => (
                    <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="beans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.filter((p) => p.category === 'Beans').map((product) => (
                    <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <ShoppingCart className="w-5 h-5 text-[#4A2C2A]" />
                <h2 className="text-[1.5rem] text-[#4A2C2A]" style={{ fontFamily: 'Pacifico, cursive' }}>
                  Your Order
                </h2>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-[#4A2C2A]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                    {cart.map((item, index) => (
                      <div key={index} className="border-b border-[#4A2C2A]/10 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <h4 className="text-[#4A2C2A]">{item.name}</h4>
                            <div className="text-[0.8rem] text-[#4A2C2A]/60 space-y-0.5 mt-1">
                              {item.selectedSize && <div>Size: {item.selectedSize}</div>}
                              {item.selectedMilk && <div>Milk: {item.selectedMilk}</div>}
                              {item.selectedTemperature && <div>{item.selectedTemperature}</div>}
                              {item.selectedExtras && item.selectedExtras.length > 0 && (
                                <div>Add: {item.selectedExtras.join(', ')}</div>
                              )}
                            </div>
                          </div>
                          <button onClick={() => removeItem(index)} className="text-[#4A2C2A]/40 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-[#F5E6D3] rounded-full px-3 py-1">
                            <button
                              onClick={() => updateQuantity(index, -1)}
                              className="text-[#4A2C2A] hover:text-[#2D5016]"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-[#4A2C2A] w-6 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(index, 1)}
                              className="text-[#4A2C2A] hover:text-[#2D5016]"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-[#4A2C2A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="flex justify-between text-[#4A2C2A]/70">
                      <span>Subtotal</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#4A2C2A]/70">
                      <span>Tax</span>
                      <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-[#4A2C2A]/20 pt-3 flex justify-between text-[#4A2C2A]">
                      <span>Total</span>
                      <span className="text-[1.25rem]">${(getCartTotal() * 1.08).toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full py-6 mb-3">
                    Checkout
                  </Button>

                  <p className="text-center text-[0.8rem] text-[#4A2C2A]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Add a tip at checkout
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="bg-[#F5E6D3] max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[1.75rem] text-[#4A2C2A]" style={{ fontFamily: 'Pacifico, cursive' }}>
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-[#4A2C2A]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                {/* Size */}
                {selectedProduct.sizes && (
                  <div>
                    <Label className="text-[#4A2C2A] mb-3 block">Size</Label>
                    <RadioGroup
                      value={customization.size || selectedProduct.sizes[0]}
                      onValueChange={(value) => setCustomization({ ...customization, size: value })}
                    >
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProduct.sizes.map((size) => (
                          <div key={size}>
                            <RadioGroupItem value={size} id={size} className="peer sr-only" />
                            <Label
                              htmlFor={size}
                              className="flex items-center justify-center rounded-lg border-2 border-[#4A2C2A]/20 p-3 hover:border-[#2D5016] cursor-pointer peer-data-[state=checked]:border-[#2D5016] peer-data-[state=checked]:bg-[#2D5016] peer-data-[state=checked]:text-[#F5E6D3]"
                            >
                              {size}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Milk */}
                {selectedProduct.customizations?.milk && (
                  <div>
                    <Label className="text-[#4A2C2A] mb-3 block">Milk</Label>
                    <Select
                      value={customization.milk}
                      onValueChange={(value) => setCustomization({ ...customization, milk: value })}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedProduct.customizations.milk.map((milk) => (
                          <SelectItem key={milk} value={milk.toLowerCase()}>
                            {milk}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Temperature */}
                {selectedProduct.customizations?.temperature && (
                  <div>
                    <Label className="text-[#4A2C2A] mb-3 block">Temperature</Label>
                    <RadioGroup
                      value={customization.temperature}
                      onValueChange={(value) => setCustomization({ ...customization, temperature: value })}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProduct.customizations.temperature.map((temp) => (
                          <div key={temp}>
                            <RadioGroupItem value={temp.toLowerCase()} id={temp} className="peer sr-only" />
                            <Label
                              htmlFor={temp}
                              className="flex items-center justify-center rounded-lg border-2 border-[#4A2C2A]/20 p-3 hover:border-[#2D5016] cursor-pointer peer-data-[state=checked]:border-[#2D5016] peer-data-[state=checked]:bg-[#2D5016] peer-data-[state=checked]:text-[#F5E6D3]"
                            >
                              {temp}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Sweetness */}
                {selectedProduct.customizations?.sweetness && (
                  <div>
                    <Label className="text-[#4A2C2A] mb-3 block">Sweetness</Label>
                    <Select
                      value={customization.sweetness}
                      onValueChange={(value) => setCustomization({ ...customization, sweetness: value })}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedProduct.customizations.sweetness.map((sweet) => (
                          <SelectItem key={sweet} value={sweet.toLowerCase()}>
                            {sweet}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Extras */}
                {selectedProduct.customizations?.extras && (
                  <div>
                    <Label className="text-[#4A2C2A] mb-3 block">Add Extras</Label>
                    <div className="space-y-2">
                      {selectedProduct.customizations.extras.map((extra) => (
                        <div key={extra.name} className="flex items-center justify-between bg-white p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id={extra.name}
                              checked={customization.extras.includes(extra.name)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setCustomization({
                                    ...customization,
                                    extras: [...customization.extras, extra.name],
                                  });
                                } else {
                                  setCustomization({
                                    ...customization,
                                    extras: customization.extras.filter((e) => e !== extra.name),
                                  });
                                }
                              }}
                            />
                            <Label htmlFor={extra.name} className="cursor-pointer">
                              {extra.name}
                            </Label>
                          </div>
                          <span className="text-[#4A2C2A]/70">+${extra.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button onClick={addToCart} className="w-full bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full py-6">
                  Add to Cart - ${selectedProduct.price.toFixed(2)}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="relative aspect-[4/3]">
        <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.isFavorite && (
          <Badge className="absolute top-3 right-3 bg-[#D4AF37] text-[#4A2C2A] border-0">
            <Star className="w-3 h-3 mr-1" /> Popular
          </Badge>
        )}
      </div>
      <div className="p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        <h3 className="text-[1.1rem] text-[#4A2C2A] mb-2">{product.name}</h3>
        <p className="text-[0.85rem] text-[#4A2C2A]/70 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[1.1rem] text-[#4A2C2A]">${product.price.toFixed(2)}</span>
          <Button className="bg-[#2D5016] text-[#F5E6D3] hover:bg-[#3a6b1c] rounded-full" size="sm">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

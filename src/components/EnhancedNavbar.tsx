import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, ChevronDown, Heart, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/mockData';

interface SubCategory {
  name: string;
  items: string[];
}

const megaMenuData: Record<string, SubCategory[]> = {
  'Home Decor': [
    { name: 'Living Room', items: ['Wall Art', 'Cushions', 'Vases', 'Candle Holders'] },
    { name: 'Bedroom', items: ['Bedsheets', 'Curtains', 'Lamps', 'Photo Frames'] },
    { name: 'Kitchen', items: ['Serving Trays', 'Coasters', 'Placemats', 'Storage Jars'] },
  ],
  'Pottery': [
    { name: 'Tableware', items: ['Plates', 'Bowls', 'Mugs', 'Cups & Saucers'] },
    { name: 'Decorative', items: ['Vases', 'Planters', 'Sculptures', 'Diyas'] },
    { name: 'Functional', items: ['Storage Jars', 'Serving Bowls', 'Tea Sets', 'Water Jugs'] },
  ],
  'Textiles': [
    { name: 'Home Textiles', items: ['Cushion Covers', 'Bedsheets', 'Table Runners', 'Curtains'] },
    { name: 'Fashion', items: ['Scarves', 'Stoles', 'Bags', 'Pouches'] },
    { name: 'Traditional', items: ['Block Prints', 'Handloom', 'Embroidered', 'Tie-Dye'] },
  ],
};

export default function EnhancedNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout>();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const handleMenuEnter = (categoryName: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(categoryName);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => setActiveMenu(null), 100);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-card/95 backdrop-blur-glass shadow-medium' : 'bg-card'
    } border-b`}>
      <div className="container mx-auto px-4">

        {/* Main Navigation */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center shadow-soft"
            >
              <span className="text-2xl"></span>
            </motion.div>
            <span className="text-2xl font-serif font-bold text-gradient group-hover:scale-105 transition-transform">
              Decorakart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 rounded-lg hover:bg-accent transition-colors font-medium">
              Home
            </Link>
            
            {/* Mega Menu Items */}
            {categories.slice(0, 3).map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => handleMenuEnter(category.name)}
                onMouseLeave={handleMenuLeave}
              >
                <button className="px-4 py-2 rounded-lg hover:bg-accent transition-colors font-medium flex items-center gap-1">
                  {category.name} <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeMenu === category.name && megaMenuData[category.name] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-card rounded-xl shadow-xl p-6 z-50 min-w-[600px] border"
                    >
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenuData[category.name].map((subCat, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-lg mb-3 text-primary">{subCat.name}</h3>
                            <ul className="space-y-2">
                              {subCat.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    to={`/products?category=${category.name}&subcategory=${item}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Featured Product in Mega Menu */}
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex items-center gap-4 bg-accent/50 rounded-lg p-4 hover-scale cursor-pointer">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold">Featured Collection</h4>
                            <p className="text-sm text-muted-foreground">Explore our curated {category.name}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/products" className="px-4 py-2 rounded-lg hover:bg-accent transition-colors font-medium">
              All Products
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <AnimatePresence>
              {searchOpen ? (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearch}
                  className="hidden md:block"
                >
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 pr-10"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                  className="hidden md:flex hover-scale"
                >
                  <Search className="w-5 h-5" />
                </Button>
              )}
            </AnimatePresence>

            <Button variant="ghost" size="icon" className="hidden md:flex hover-scale relative group">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                0
              </span>
            </Button>

            <Link to="/auth" className="hidden md:block">
              <Button variant="ghost" size="icon" className="hover-scale">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="hover-scale">
                <ShoppingCart className="w-5 h-5" />
                <AnimatePresence>
                  {getCartCount() > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-soft"
                    >
                      {getCartCount()}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 border-t"
            >
              <form onSubmit={handleSearch} className="my-4">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              
              <div className="space-y-1">
                <Link
                  to="/"
                  className="block py-3 px-4 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.name}`}
                    className="block py-3 px-4 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/products"
                  className="block py-3 px-4 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Products
                </Link>
                <Link
                  to="/auth"
                  className="block py-3 px-4 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Account
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

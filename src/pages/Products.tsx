import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, useInView } from 'framer-motion';
import SuperHeader from '@/components/SuperHeader';
import EnhancedNavbar from '@/components/EnhancedNavbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Products() {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const productsRef = useRef(null);
  const isInView = useInView(productsRef, { once: true });

  useEffect(() => {
    let filtered = [...products];

    const category = searchParams.get('category');
    const search = searchParams.get('search');

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
    }

    setFilteredProducts(filtered);
  }, [searchParams, sortBy, priceRange]);

  const selectedCategory = searchParams.get('category');

  return (
    <>
      <Helmet>
        <title>Shop All Products - Decorakart</title>
        <meta name="description" content="Browse our complete collection of handcrafted products including home decor, pottery, textiles, jewelry and woodwork." />
      </Helmet>

      <div className="min-h-screen bg-gradient-earth">
        <SuperHeader />
        <EnhancedNavbar />

        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              {selectedCategory ? (
                <span className="text-gradient">{selectedCategory} Collection</span>
              ) : (
                <span className="text-gradient">Discover Artisan Treasures</span>
              )}
            </h1>
            <p className="text-muted-foreground text-lg">
              {filteredProducts.length} handcrafted masterpieces waiting to be discovered
            </p>
          </motion.div>

          <div className="flex gap-8">
            {/* Filters Sidebar - Desktop */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block w-64 flex-shrink-0"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24">
                <h3 className="font-serif font-bold text-xl mb-6">Filters</h3>

                {/* Price Range */}
                <div className="mb-8">
                  <Label className="text-sm font-semibold mb-4 block">Price Range</Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    step={100}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <Label className="text-sm font-semibold mb-4 block">Categories</Label>
                  <div className="space-y-2">
                    <a
                      href="/products"
                      className={`block py-2 px-3 rounded-lg transition-colors ${
                        !selectedCategory ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                      }`}
                    >
                      All Products
                    </a>
                    {categories.map((cat) => (
                      <a
                        key={cat.id}
                        href={`/products?category=${cat.name}`}
                        className={`block py-2 px-3 rounded-lg transition-colors ${
                          selectedCategory === cat.name
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent'
                        }`}
                      >
                        {cat.name}
                      </a>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6"
                  onClick={() => {
                    setPriceRange([0, 10000]);
                    window.location.href = '/products';
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Filters and Sort Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-card rounded-xl p-4 shadow-soft">
                {/* Mobile Filter Toggle */}
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>

                {/* Category Pills */}
                <div className="hidden sm:flex flex-wrap gap-2">
                  {categories.slice(0, 4).map((cat) => (
                    <a
                      key={cat.id}
                      href={`/products?category=${cat.name}`}
                      className={`px-4 py-2 rounded-full border-2 transition-all hover-scale ${
                        selectedCategory === cat.name
                          ? 'bg-primary text-primary-foreground border-primary shadow-terracotta'
                          : 'hover:border-primary'
                      }`}
                    >
                      {cat.name}
                    </a>
                  ))}
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-56 shadow-soft">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              <motion.div
                ref={productsRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-card rounded-2xl shadow-soft">
                  <p className="text-2xl font-serif text-muted-foreground mb-4">No products found</p>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
                  <Button onClick={() => window.location.href = '/products'}>
                    View All Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

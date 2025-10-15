import SuperHeader from '@/components/SuperHeader';
import EnhancedNavbar from '@/components/EnhancedNavbar';
import CreativeHero from '@/components/CreativeHero';
import EnhancedCategoryGrid from '@/components/EnhancedCategoryGrid';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import NewArrivals from '@/components/NewArrivals';
import TrendingCollection from '@/components/TrendingCollection';
import { products } from '@/data/mockData';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';
import { Sparkles, TrendingUp, Award } from 'lucide-react';

export default function Index() {
  const featuredProducts = products.filter(p => p.featured);
  const festiveProducts = products.filter(p => p.festive);
  const bestsellers = products.filter(p => p.bestseller);
  
  const festiveRef = useRef(null);
  const featuredRef = useRef(null);
  const bestsellerRef = useRef(null);
  
  const isFestiveInView = useInView(festiveRef, { once: true, amount: 0.2 });
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.2 });
  const isBestsellerInView = useInView(bestsellerRef, { once: true, amount: 0.2 });

  return (
    <>
      <Helmet>
        <title>Decorakart - Premium Indian Handicrafts & Home Decor</title>
        <meta name="description" content="Shop authentic handcrafted products from skilled Indian artisans. Discover unique home decor, pottery, textiles, jewelry and more." />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden">
        <SuperHeader />
        <EnhancedNavbar />
        <CreativeHero />
        
        <EnhancedCategoryGrid />

        <TrendingCollection />

        <NewArrivals />

        {/* Festive Special Section */}
        {festiveProducts.length > 0 && (
          <section ref={festiveRef} className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
            {/* Animated Background Patterns */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-64 h-64 opacity-10"
            >
              <Sparkles className="w-full h-full text-primary" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isFestiveInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isFestiveInView ? { opacity: 1, scale: 1 } : {}}
                  className="inline-block px-6 py-3 bg-secondary/20 text-secondary rounded-full text-sm font-bold mb-6 border-2 border-secondary/30"
                >
                  🪔 FESTIVAL SPECIAL 🪔
                </motion.span>
                
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  <span className="text-gradient bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text">
                    Diwali Collection 2025
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  Celebrate the festival of lights with our exclusive handcrafted collection
                </p>
                
                <div className="flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold">Up to 40% OFF</span>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="font-semibold">Limited Edition</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isFestiveInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {festiveProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isFestiveInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Featured Products */}
        <section ref={featuredRef} className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isFeaturedInView ? { opacity: 1, scale: 1 } : {}}
                className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
              >
                ✨ FEATURED COLLECTION ✨
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                <span className="text-gradient">Handpicked Artisan Masterpieces</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Discover our curated selection of exceptional handcrafted pieces
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isFeaturedInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bestsellers */}
        <section ref={bestsellerRef} className="py-20 bg-gradient-to-br from-muted/50 via-background to-accent/30 relative overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-96 h-96 opacity-5"
          >
            <TrendingUp className="w-full h-full text-secondary" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBestsellerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isBestsellerInView ? { opacity: 1, scale: 1 } : {}}
                className="inline-block px-6 py-3 bg-secondary/20 text-secondary rounded-full text-sm font-bold mb-6 border-2 border-secondary/30"
              >
                🏆 BESTSELLERS 🏆
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Most Loved by Our Customers
                </span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Our top-rated handcrafted treasures that customers can't stop raving about
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isBestsellerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {bestsellers.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isBestsellerInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <TestimonialsCarousel />

        {/* Trust Badges */}
        <section className="py-16 border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="font-semibold mb-2">100% Authentic</h3>
                <p className="text-sm text-muted-foreground">Genuine handcrafted products</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders above ₹999</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% secure transactions</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Support Artisans</h3>
                <p className="text-sm text-muted-foreground">Empowering local craftspeople</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Package } from 'lucide-react';
import { products } from '@/data/mockData';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export default function NewArrivals() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Get the latest 4 products (simulating new arrivals)
  const newProducts = products.slice(0, 4);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Decorative Background */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-72 h-72 opacity-10"
      >
        <Package className="w-full h-full text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 border-2 border-primary/20"
          >
            🆕 NEW ARRIVALS 🆕
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
              Fresh from Our Artisans
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover the latest handcrafted treasures, just added to our collection
          </p>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">Just Added This Week</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-medium">Limited Quantities</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {newProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                delay: 0.1 * index, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link to="/products">
            <Button size="lg" className="btn-gradient group">
              View All New Arrivals
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Star, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrendingCollection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const collections = [
    {
      title: 'Terracotta Elegance',
      subtitle: 'Handcrafted Clay Masterpieces',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800',
      tag: 'Trending',
      link: '/products?category=Pottery',
    },
    {
      title: 'Textile Treasures',
      subtitle: 'Vibrant Handloom Creations',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
      tag: 'Most Loved',
      link: '/products?category=Textiles',
    },
    {
      title: 'Artisan Jewelry',
      subtitle: 'Timeless Handcrafted Adornments',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
      tag: 'Hot',
      link: '/products?category=Jewelry',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-64 h-64 opacity-10"
      >
        <Flame className="w-full h-full text-secondary" />
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6 border-2 border-secondary/30"
          >
            <TrendingUp className="w-5 h-5" />
            <span>TRENDING COLLECTIONS</span>
            <TrendingUp className="w-5 h-5" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text">
              Shop Our Most Loved Collections
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Explore the handcrafted treasures that are making waves this season
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Link to={collection.link}>
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                    
                    {/* Tag Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                      className="absolute top-4 right-4"
                    >
                      <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-soft">
                        {collection.tag === 'Hot' && <Flame className="w-4 h-4" />}
                        {collection.tag === 'Trending' && <TrendingUp className="w-4 h-4" />}
                        {collection.tag === 'Most Loved' && <Star className="w-4 h-4 fill-current" />}
                        {collection.tag}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.4 }}
                        className="text-sm font-medium mb-2 opacity-90"
                      >
                        {collection.subtitle}
                      </motion.p>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.5 }}
                        className="text-3xl font-serif font-bold mb-4"
                      >
                        {collection.title}
                      </motion.h3>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.6 }}
                        className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-white pb-1 group-hover:gap-4 transition-all"
                      >
                        Explore Collection
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

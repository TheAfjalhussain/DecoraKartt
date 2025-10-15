import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'Handcrafted with Love',
    subtitle: 'Discover Authentic Indian Handicrafts',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1920&h=800&fit=crop',
    cta: 'Shop Collection'
  },
  {
    id: 2,
    title: 'Diwali Special Collection',
    subtitle: 'Illuminate Your Celebrations',
    image: 'https://images.unsplash.com/photo-1605823612273-8f999a3828ce?w=1920&h=800&fit=crop',
    cta: 'Explore Festive Range'
  },
  {
    id: 3,
    title: 'Artisan Treasures',
    subtitle: 'Supporting Local Craftspeople',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=1920&h=800&fit=crop',
    cta: 'Browse Now'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[400px] overflow-hidden bg-muted">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
          </div>

          <div className="relative h-[400px] container mx-auto px-4 flex items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl text-background"
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90">
                {slides[currentSlide].subtitle}
              </p>
              <Button 
                size="lg" 
                className="btn-gradient text-lg px-8 py-6"
                onClick={() => navigate('/products')}
              >
                {slides[currentSlide].cta}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-background w-8' : 'bg-background/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

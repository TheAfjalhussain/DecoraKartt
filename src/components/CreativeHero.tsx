import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import heroPremium1 from '@/assets/hero-premium-1.jpg';
import heroPremium2 from '@/assets/hero-premium-2.jpg';
import heroPremium3 from '@/assets/hero-premium-3.jpg';

const slides = [
  {
    id: 1,
    title: 'Handcrafted Excellence',
    subtitle: 'Discover Authentic Indian Handicrafts',
    description: 'Each piece tells a story of tradition, passion, and Decorakartmanship',
    image: heroPremium1,
    cta: 'Explore Collection',
    overlay: 'from-primary/85 via-primary/60 to-transparent'
  },
  {
    id: 2,
    title: 'Festival Collection 2025',
    subtitle: 'Illuminate Your Celebrations',
    description: 'Exclusive festive designs handcrafted for your special moments',
    image: heroPremium2,
    cta: 'Shop Festive Range',
    overlay: 'from-secondary/85 via-secondary/60 to-transparent'
  },
  {
    id: 3,
    title: 'Artisan Masterpieces',
    subtitle: 'Supporting Local Craftspeople',
    description: 'Every purchase directly empowers rural artisans and their families',
    image: heroPremium3,
    cta: 'Browse Collection',
    overlay: 'from-foreground/85 via-foreground/60 to-transparent'
  }
];

export default function CreativeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      }
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-muted">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax Effect */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].overlay}`} />

          {/* Animated Decorative Elements */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"
          />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="max-w-3xl text-background"
            >
              <motion.div variants={childVariants} className="mb-4">
                <span className="inline-block px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full text-sm font-medium border border-background/30">
                  ✨ New Arrival
                </span>
              </motion.div>

              <motion.h1 
                variants={childVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p 
                variants={childVariants}
                className="text-2xl md:text-3xl mb-4 text-background/95 font-medium"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.p 
                variants={childVariants}
                className="text-lg mb-8 text-background/80 max-w-xl"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div variants={childVariants} className="flex gap-4">
                <Button 
                  size="lg" 
                  className="btn-gradient text-lg px-8 py-6 hover-glow shadow-xl group"
                  onClick={() => navigate('/products')}
                >
                  {slides[currentSlide].cta}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Button>

                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20"
                  onClick={() => navigate('/products')}
                >
                  View All
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        {/* Dots Indicator */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-background' 
                  : 'w-2 bg-background/50 group-hover:bg-background/75'
              }`} />
            </button>
          ))}
        </div>

        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 flex items-center justify-center hover:bg-background/30 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-background" />
          ) : (
            <Play className="w-4 h-4 text-background" />
          )}
        </button>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 hover:bg-background/20 transition-all z-10 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-background mx-auto group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 hover:bg-background/20 transition-all z-10 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-background mx-auto group-hover:scale-110 transition-transform" />
      </button>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-background/60 text-sm"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-background/40 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-background/60 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

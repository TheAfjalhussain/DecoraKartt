import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Heart, Users, Award, Sparkles, TrendingUp, Globe } from 'lucide-react';
import EnhancedNavbar from '@/components/EnhancedNavbar';
import Footer from '@/components/Footer';

export default function About() {
  const missionRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  const stats = [
    { icon: Users, label: 'Artisans Supported', value: '5000+', color: 'text-primary' },
    { icon: Globe, label: 'Cities Reached', value: '150+', color: 'text-secondary' },
    { icon: Award, label: 'Products Crafted', value: '50000+', color: 'text-primary' },
    { icon: Heart, label: 'Happy Customers', value: '25000+', color: 'text-secondary' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Every product is genuinely handcrafted by skilled artisans using traditional techniques passed down through generations.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We empower local artisan communities by providing them with a platform to showcase their craft and earn a sustainable livelihood.',
    },
    {
      icon: Sparkles,
      title: 'Quality Excellence',
      description: 'Each piece undergoes rigorous quality checks to ensure you receive nothing but the finest handicraft products.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'We believe in sustainable practices that preserve traditional crafts while supporting artisan growth and innovation.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Decorakart | Empowering Indian Artisans</title>
        <meta name="description" content="Learn about Decorakart mission to empower Indian artisans and preserve traditional handicrafts. Discover our story, values, and impact." />
      </Helmet>

      <div className="min-h-screen">
        <EnhancedNavbar />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 opacity-5"
          >
            <Sparkles className="w-full h-full text-primary" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
              >
                OUR STORY
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  Crafting Dreams,
                </span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text">
                  Empowering Artisans
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We bridge the gap between India's talented artisans and craft lovers worldwide, 
                preserving traditional art forms while creating sustainable livelihoods.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800"
                    alt="Artisan at work"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Decora Kart is a contemporary home décor and lifestyle brand, bringing together craftsmanship, quality, and elegant design under one roof.
                  We specialize in premium handcrafted ceramic décor, kitchenware, and festive collections that blend traditional artistry with modern aesthetics.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Every product at Decora Kart is carefully curated and crafted to transform spaces into warm,
                   stylish, and meaningful homes. With a commitment to quality and detail,
                   our collections reflect timeless beauty, durability, and authenticity. </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold">100% Authentic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="font-semibold">Direct Impact</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Our <span className="text-gradient">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground">Making a difference, one craft at a time</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center mb-4 hover-scale shadow-soft`}>
                      <stat.icon className={`w-10 h-10 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Join Us in Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every purchase you make helps preserve traditional crafts and supports artisan families. 
                Be a part of something beautiful and meaningful.
              </p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-warm text-white font-semibold rounded-full shadow-soft hover-glow"
              >
                Explore Our Collection
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

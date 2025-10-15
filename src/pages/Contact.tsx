import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import EnhancedNavbar from '@/components/EnhancedNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8807403946',
      subDetails: 'Mon-Sat, 9AM-6PM',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@decorakart.com',
      subDetails: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Par Nawada, Dobra Per, Nawada',
      subDetails: 'Bihar, India, 805110',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Decorakart | Get in Touch</title>
        <meta name="description" content="Contact Decorakart for inquiries about our handcrafted products, artisan partnerships, or customer support. We're here to help!" />
      </Helmet>

      <div className="min-h-screen">
        <EnhancedNavbar />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                <span className="text-gradient">Get in Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 text-center shadow-soft hover-lift"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subDetails}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-serif font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-gradient" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="sticky top-24"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-soft">
                  <h3 className="text-2xl font-serif font-bold mb-6">Business Hours</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Monday - Saturday</p>
                        <p className="text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-muted flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Sunday</p>
                        <p className="text-muted-foreground">Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                          Browse Products
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Shipping Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Return Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
                    alt="Contact us"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

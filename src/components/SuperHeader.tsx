import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const offers = [
  "🎉 Grand Festive Sale: Up to 70% OFF + Extra 5% on online payments",
  "✨ Free Shipping on orders above ₹999 - Delivered to your doorstep",
  "🎁 500+ New Arrivals - Explore the latest handcrafted collection",
  "🪔 Exclusive handcrafted items - Limited stock available",
  "💝 Shop now and get a complimentary gift on orders above ₹2999"
];

export default function SuperHeader() {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextOffer = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevOffer = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextOffer, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-warm text-primary-foreground py-2.5 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center gap-4">
          {/* <button
            onClick={prevOffer}
            className="p-1 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous offer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button> */}

          <div className="flex-1 text-center overflow-hidden">
            <p
              className={`text-sm font-medium transition-all duration-300 ${
                isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {offers[currentOffer]}
            </p>
          </div>

          {/* <button
            onClick={nextOffer}
            className="p-1 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next offer"
          >
            <ChevronRight className="w-4 h-4" />
          </button> */}
        </div>

        {/* Offer indicators */}
        {/* <div className="flex justify-center gap-1.5 mt-2">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentOffer(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentOffer ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

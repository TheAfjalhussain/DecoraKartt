import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import SuperHeader from '@/components/SuperHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'DIWALI10') {
      setDiscount(getCartTotal() * 0.1);
      toast({
        title: "Coupon applied!",
        description: "You saved 10% with code DIWALI10",
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "Please enter a valid coupon code",
        variant: "destructive",
      });
    }
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal - discount + shipping;

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart - Decorakart</title>
        </Helmet>
        
        <div className="min-h-screen">
          <SuperHeader />
          <Navbar />
          
          <main className="container mx-auto px-4 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">Start adding beautiful handicrafts to your cart!</p>
              <Button size="lg" onClick={() => navigate('/products')} className="btn-gradient">
                Continue Shopping
              </Button>
            </motion.div>
          </main>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Shopping Cart (${cart.length} items) - Decorakart`}</title>
      </Helmet>

      <div className="min-h-screen">
        <SuperHeader />
        <Navbar />

        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-lg p-4 shadow-soft flex gap-4"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">
                        <Link to={`/product/${item.product.id}`} className="hover:text-primary">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.product.category}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-primary">
                          ₹{item.product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>

                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1 border-x min-w-[3rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-lg p-6 shadow-medium sticky top-24"
              >
                <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-secondary">
                      <span>Discount</span>
                      <span className="font-semibold">-₹{discount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Coupon */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Have a coupon?</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Try: DIWALI10</p>
                </div>

                <Button
                  size="lg"
                  className="w-full btn-gradient"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full mt-3"
                  onClick={() => navigate('/products')}
                >
                  Continue Shopping
                </Button>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

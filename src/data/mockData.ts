import { Product, Category, Testimonial, Order } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    description: 'Elegant handcrafted pieces for your home'
  },
  {
    id: '2',
    name: 'Wall Art',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=800',
    description: 'Unique artistic creations'
  },
  {
    id: '3',
    name: 'Pottery',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800',
    description: 'Traditional ceramic crafts'
  },
  {
    id: '4',
    name: 'Textiles',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
    description: 'Handwoven fabrics and more'
  },
  {
    id: '5',
    name: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    description: 'Artisan jewelry pieces'
  },
  {
    id: '6',
    name: 'Woodwork',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    description: 'Handcrafted wooden items'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Terracotta Vase Set',
    description: 'Handcrafted terracotta vases with intricate patterns. Perfect for home decor.',
    price: 2499,
    originalPrice: 3499,
    category: 'Home Decor',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800',
      'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800'
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    bestseller: true,
    tags: ['vases', 'terracotta', 'home decor']
  },
  {
    id: '2',
    name: 'Handwoven Wall Hanging',
    description: 'Beautiful macrame wall hanging made with natural cotton threads.',
    price: 1899,
    category: 'Wall Art',
    images: [
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800'
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    bestseller: true,
    tags: ['wall art', 'macrame', 'handwoven']
  },
  {
    id: '3',
    name: 'Ceramic Diya Set',
    description: 'Traditional hand-painted ceramic diyas for festive celebrations.',
    price: 899,
    originalPrice: 1299,
    category: 'Pottery',
    images: [
      'https://images.unsplash.com/photo-1604608672516-1ceb584d0535?w=800',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800'
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    festive: true,
    tags: ['diya', 'festive', 'ceramic']
  },
  {
    id: '4',
    name: 'Block Print Cushion Covers',
    description: 'Set of 4 cotton cushion covers with traditional block print designs.',
    price: 1599,
    category: 'Textiles',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800'
    ],
    rating: 4.6,
    reviews: 92,
    inStock: true,
    featured: true,
    tags: ['cushions', 'textiles', 'block print']
  },
  {
    id: '5',
    name: 'Silver Oxidized Necklace',
    description: 'Handcrafted silver oxidized necklace with tribal motifs.',
    price: 3499,
    category: 'Jewelry',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800'
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    bestseller: true,
    tags: ['jewelry', 'silver', 'necklace']
  },
  {
    id: '6',
    name: 'Wooden Serving Tray',
    description: 'Beautifully carved wooden serving tray with brass handles.',
    price: 2799,
    category: 'Woodwork',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800'
    ],
    rating: 4.8,
    reviews: 78,
    inStock: true,
    featured: true,
    tags: ['woodwork', 'serving', 'home decor']
  },
  {
    id: '7',
    name: 'Brass Rangoli Stencils',
    description: 'Set of 5 intricate brass stencils for creating beautiful rangoli designs.',
    price: 1299,
    category: 'Home Decor',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800'
    ],
    rating: 4.5,
    reviews: 45,
    inStock: true,
    festive: true,
    tags: ['brass', 'rangoli', 'festive']
  },
  {
    id: '8',
    name: 'Hand-painted Clay Pots',
    description: 'Set of 3 colorful hand-painted clay pots for plants or decoration.',
    price: 1099,
    originalPrice: 1599,
    category: 'Pottery',
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800'
    ],
    rating: 4.7,
    reviews: 103,
    inStock: true,
    featured: true,
    tags: ['pottery', 'planters', 'hand-painted']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Absolutely love the quality and craftsmanship! The terracotta vases are stunning and exactly as described.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    location: 'Mumbai, Maharashtra'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    rating: 5,
    comment: 'Great collection of authentic handicrafts. Fast delivery and excellent packaging. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    location: 'Delhi, NCR'
  },
  {
    id: '3',
    name: 'Ananya Patel',
    rating: 4,
    comment: 'Beautiful products that support local artisans. The block print cushion covers transformed my living room.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    location: 'Bangalore, Karnataka'
  },
  {
    id: '4',
    name: 'Vikram Singh',
    rating: 5,
    comment: 'The wooden serving tray is a masterpiece! Perfect gift for festive occasions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    location: 'Jaipur, Rajasthan'
  }
];

export const orders: Order[] = [
  {
    id: 'ORD001',
    customerName: 'Priya Sharma',
    email: 'priya@example.com',
    items: [
      { product: products[0], quantity: 2 },
      { product: products[3], quantity: 1 }
    ],
    total: 6597,
    status: 'delivered',
    createdAt: '2025-10-01',
    shippingAddress: '123 MG Road, Mumbai, Maharashtra 400001'
  },
  {
    id: 'ORD002',
    customerName: 'Rahul Verma',
    email: 'rahul@example.com',
    items: [
      { product: products[1], quantity: 1 }
    ],
    total: 1899,
    status: 'shipped',
    createdAt: '2025-10-10',
    shippingAddress: '456 Connaught Place, Delhi 110001'
  },
  {
    id: 'ORD003',
    customerName: 'Ananya Patel',
    email: 'ananya@example.com',
    items: [
      { product: products[4], quantity: 1 },
      { product: products[2], quantity: 3 }
    ],
    total: 6196,
    status: 'processing',
    createdAt: '2025-10-12',
    shippingAddress: '789 MG Road, Bangalore, Karnataka 560001'
  }
];

// Mascota Feliz - Premium Spanish Pet Food Store Data

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: 'dog' | 'cat';
  subcategory: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  badges?: string[];
  weight: string;
  ingredients?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
  type: 'dog' | 'cat';
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  productId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  pet: string;
  content: string;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Perros',
    slug: 'dog',
    description: 'Alimento premium para perros de todas las edades y tamaños',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    count: 42,
    type: 'dog'
  },
  {
    id: '2',
    name: 'Gatos',
    slug: 'cat',
    description: 'Nutrición especializada para felinos exigentes',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80',
    count: 36,
    type: 'cat'
  },
  {
    id: '3',
    name: 'Cachorros',
    slug: 'puppy',
    description: 'Fórmulas especiales para el crecimiento saludable',
    image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=600&q=80',
    count: 18,
    type: 'dog'
  },
  {
    id: '4',
    name: 'Snacks y Premios',
    slug: 'treats',
    description: 'Golosinas saludables para premiar a tu mascota',
    image: 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=600&q=80',
    count: 24,
    type: 'dog'
  }
];

export const products: Product[] = [
  // Dog Products
  {
    id: '1',
    name: 'Premium Pollo & Arroz Adulto',
    slug: 'premium-pollo-arroz-adulto',
    price: 45.99,
    originalPrice: 52.99,
    description: 'Alimento premium para perros adultos elaborado con pollo fresco de corral y arroz integral. Fórmula completa y equilibrada que proporciona todos los nutrientes esenciales para mantener a tu perro activo y saludable. Enriquecido con omega 3 y 6 para un pelaje brillante y una piel sana.',
    shortDescription: 'Pollo fresco de corral con arroz integral para perros adultos',
    category: 'dog',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80'
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
    badges: ['Bestseller', '-13%'],
    weight: '12 kg',
    ingredients: ['Pollo fresco (30%)', 'Arroz integral', 'Proteína de pollo deshidratada', 'Grasa de pollo', 'Pulpa de remolacha']
  },
  {
    id: '2',
    name: 'Salmón & Patata Sin Cereales',
    slug: 'salmon-patata-sin-cereales',
    price: 58.99,
    description: 'Fórmula grain-free con salmón noruego como única fuente de proteína animal. Ideal para perros con sensibilidades alimentarias. Rico en ácidos grasos omega para una salud óptima de piel y pelaje.',
    shortDescription: 'Salmón noruego sin cereales para pieles sensibles',
    category: 'dog',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
      'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80'
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    badges: ['Grain Free'],
    weight: '10 kg',
    ingredients: ['Salmón fresco (35%)', 'Patata', 'Proteína de salmón', 'Aceite de salmón', 'Guisantes']
  },
  {
    id: '3',
    name: 'Cordero Ibérico Premium',
    slug: 'cordero-iberico-premium',
    price: 62.99,
    originalPrice: 69.99,
    description: 'Elaborado con cordero ibérico criado en libertad. Una fuente de proteína hipoalergénica ideal para perros con digestión delicada. Enriquecido con hierbas mediterráneas.',
    shortDescription: 'Cordero ibérico de pastoreo para digestiones sensibles',
    category: 'dog',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80'
    ],
    rating: 4.7,
    reviews: 67,
    inStock: true,
    featured: false,
    badges: ['Premium', '-10%'],
    weight: '12 kg',
    ingredients: ['Cordero ibérico (32%)', 'Arroz', 'Avena', 'Grasa de cordero', 'Romero']
  },
  {
    id: '4',
    name: 'Paté de Ternera Gourmet',
    slug: 'pate-ternera-gourmet',
    price: 3.49,
    description: 'Delicioso paté elaborado con ternera gallega de primera calidad. Textura suave y sabor irresistible que encantará a tu perro. Sin colorantes ni conservantes artificiales.',
    shortDescription: 'Paté cremoso de ternera gallega premium',
    category: 'dog',
    subcategory: 'wet-food',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80'
    ],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: true,
    badges: ['Natural'],
    weight: '400 g',
    ingredients: ['Ternera (65%)', 'Caldo de ternera', 'Zanahorias', 'Guisantes', 'Aceite de girasol']
  },
  {
    id: '5',
    name: 'Guiso Mediterráneo',
    slug: 'guiso-mediterraneo',
    price: 4.29,
    description: 'Un festín mediterráneo con pollo, verduras frescas y aceite de oliva virgen extra. Cocinado a fuego lento para preservar todos los sabores y nutrientes.',
    shortDescription: 'Guiso casero con pollo y verduras del huerto',
    category: 'dog',
    subcategory: 'wet-food',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80'
    ],
    rating: 4.8,
    reviews: 178,
    inStock: true,
    featured: false,
    weight: '400 g',
    ingredients: ['Pollo (50%)', 'Calabacín', 'Tomate', 'Aceite de oliva', 'Romero']
  },
  {
    id: '6',
    name: 'Sticks Dentales Natural',
    slug: 'sticks-dentales-natural',
    price: 8.99,
    description: 'Snacks dentales que ayudan a reducir el sarro y mantener los dientes limpios. Elaborados con ingredientes 100% naturales y forma especial para limpiar hasta los rincones más difíciles.',
    shortDescription: 'Cuidado dental natural con cada mordisco',
    category: 'dog',
    subcategory: 'treats',
    image: 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=600&q=80'
    ],
    rating: 4.5,
    reviews: 312,
    inStock: true,
    featured: true,
    badges: ['Dental Care'],
    weight: '180 g',
    ingredients: ['Arroz', 'Glicerina vegetal', 'Menta', 'Perejil', 'Eucalipto']
  },
  {
    id: '7',
    name: 'Galletas de Manzana',
    slug: 'galletas-manzana',
    price: 6.99,
    description: 'Crujientes galletas horneadas con manzana fresca y avena. Un premio saludable bajo en calorías perfecto para el entrenamiento diario.',
    shortDescription: 'Galletas crujientes con manzana y avena',
    category: 'dog',
    subcategory: 'treats',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80'
    ],
    rating: 4.7,
    reviews: 145,
    inStock: true,
    featured: false,
    weight: '200 g',
    ingredients: ['Harina de avena', 'Manzana (15%)', 'Miel', 'Huevo', 'Canela']
  },
  {
    id: '8',
    name: 'Puppy Starter Premium',
    slug: 'puppy-starter-premium',
    price: 39.99,
    description: 'Fórmula especialmente desarrollada para cachorros en crecimiento. Con DHA para el desarrollo cerebral y calcio optimizado para huesos fuertes.',
    shortDescription: 'Nutrición completa para cachorros en crecimiento',
    category: 'dog',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80'
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    featured: true,
    badges: ['Puppy', 'DHA+'],
    weight: '8 kg',
    ingredients: ['Pollo (28%)', 'Arroz', 'Aceite de pescado', 'Huevo', 'Leche']
  },
  // Cat Products
  {
    id: '9',
    name: 'Atún & Arroz Esterilizados',
    slug: 'atun-arroz-esterilizados',
    price: 42.99,
    description: 'Fórmula especial para gatos esterilizados con control de peso. Elaborada con atún fresco del Cantábrico y L-carnitina para mantener un peso óptimo.',
    shortDescription: 'Control de peso para gatos esterilizados',
    category: 'cat',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80'
    ],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    featured: true,
    badges: ['Sterilized'],
    weight: '7 kg',
    ingredients: ['Atún fresco (25%)', 'Arroz', 'Proteína de pescado', 'L-carnitina', 'Fibra']
  },
  {
    id: '10',
    name: 'Pollo Gourmet Indoor',
    slug: 'pollo-gourmet-indoor',
    price: 38.99,
    originalPrice: 44.99,
    description: 'Especialmente formulado para gatos de interior con fibra extra para el control de bolas de pelo y menos calorías para prevenir el sobrepeso.',
    shortDescription: 'Fórmula especial para gatos de interior',
    category: 'cat',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80'
    ],
    rating: 4.6,
    reviews: 98,
    inStock: true,
    featured: true,
    badges: ['Indoor', '-13%'],
    weight: '6 kg',
    ingredients: ['Pollo (30%)', 'Arroz', 'Celulosa', 'Pulpa de remolacha', 'Psyllium']
  },
  {
    id: '11',
    name: 'Salmón Salvaje Premium',
    slug: 'salmon-salvaje-premium-cat',
    price: 52.99,
    description: 'Elaborado con salmón salvaje del Atlántico Norte. Rico en omega 3 para un pelaje brillante y sedoso. Sin cereales ni gluten.',
    shortDescription: 'Salmón salvaje sin cereales para pelaje brillante',
    category: 'cat',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80'
    ],
    rating: 4.9,
    reviews: 76,
    inStock: true,
    featured: false,
    badges: ['Grain Free', 'Omega 3'],
    weight: '5 kg',
    ingredients: ['Salmón salvaje (40%)', 'Patata', 'Guisantes', 'Aceite de salmón', 'Arándanos']
  },
  {
    id: '12',
    name: 'Mousse de Atún Delice',
    slug: 'mousse-atun-delice',
    price: 1.99,
    description: 'Exquisito mousse con textura ultra suave y sabor intenso a atún fresco. Irresistible incluso para los gatos más exigentes.',
    shortDescription: 'Mousse cremoso de atún fresco del mar',
    category: 'cat',
    subcategory: 'wet-food',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80'
    ],
    rating: 4.8,
    reviews: 289,
    inStock: true,
    featured: true,
    badges: ['Gourmet'],
    weight: '85 g',
    ingredients: ['Atún (60%)', 'Caldo de pescado', 'Tapioca', 'Aceite de girasol', 'Taurina']
  },
  {
    id: '13',
    name: 'Filetes de Pollo en Gelatina',
    slug: 'filetes-pollo-gelatina',
    price: 2.29,
    description: 'Auténticos filetes de pechuga de pollo en delicada gelatina. Sin subproductos animales, solo carne real.',
    shortDescription: 'Filetes reales de pechuga en gelatina natural',
    category: 'cat',
    subcategory: 'wet-food',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80'
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: false,
    weight: '100 g',
    ingredients: ['Pechuga de pollo (70%)', 'Gelatina natural', 'Vitaminas', 'Minerales']
  },
  {
    id: '14',
    name: 'Crujientes de Salmón',
    slug: 'crujientes-salmon',
    price: 5.99,
    description: 'Snacks crujientes con salmón real. Perfectos para premiar y estimular el olfato de tu gato. Bajos en calorías.',
    shortDescription: 'Bocaditos crujientes con salmón real',
    category: 'cat',
    subcategory: 'treats',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80'
    ],
    rating: 4.6,
    reviews: 198,
    inStock: true,
    featured: true,
    badges: ['Low Cal'],
    weight: '60 g',
    ingredients: ['Salmón (35%)', 'Arroz', 'Proteína de pescado', 'Levadura']
  },
  {
    id: '15',
    name: 'Pasta de Malta Anti-Hairball',
    slug: 'pasta-malta-hairball',
    price: 7.99,
    description: 'Pasta con malta que ayuda a eliminar las bolas de pelo de forma natural. Sabor irresistible que los gatos adoran.',
    shortDescription: 'Elimina bolas de pelo de forma natural',
    category: 'cat',
    subcategory: 'treats',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80'
    ],
    rating: 4.8,
    reviews: 267,
    inStock: true,
    featured: false,
    badges: ['Hairball'],
    weight: '100 g',
    ingredients: ['Malta (50%)', 'Aceites vegetales', 'Fibra', 'Vitamina E']
  },
  {
    id: '16',
    name: 'Kitten Starter Growth',
    slug: 'kitten-starter-growth',
    price: 34.99,
    description: 'Nutrición óptima para gatitos en crecimiento hasta 12 meses. Con DHA para el desarrollo cerebral y visual.',
    shortDescription: 'Crecimiento saludable para gatitos',
    category: 'cat',
    subcategory: 'dry-food',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80'
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    featured: true,
    badges: ['Kitten', 'DHA+'],
    weight: '4 kg',
    ingredients: ['Pollo (35%)', 'Arroz', 'Aceite de pescado', 'Huevo', 'DHA']
  }
];

export const featuredProducts = products.filter(p => p.featured);

export const reviews: Review[] = [
  {
    id: '1',
    author: 'María García',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    comment: 'Mi perro nunca había comido tan bien. El pelaje le brilla como nunca antes. Muy recomendable!',
    date: '2024-01-15',
    productId: '1'
  },
  {
    id: '2',
    author: 'Carlos Rodríguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    comment: 'Excelente calidad y mi gato lo devora. El envío fue rapidísimo.',
    date: '2024-01-12',
    productId: '9'
  },
  {
    id: '3',
    author: 'Ana Martínez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 4,
    comment: 'Buena relación calidad-precio. Mi perrita está encantada con el paté.',
    date: '2024-01-10',
    productId: '4'
  },
  {
    id: '4',
    author: 'Pablo Sánchez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    comment: 'La mejor comida para gatos que he probado. Ingredientes de primera calidad.',
    date: '2024-01-08',
    productId: '12'
  }
];

export const brands = [
  { name: 'Royal Nutrition', logo: '/brands/royal.svg' },
  { name: 'Natural Balance', logo: '/brands/natural.svg' },
  { name: 'Premium Pet', logo: '/brands/premium.svg' },
  { name: 'Healthy Paws', logo: '/brands/healthy.svg' },
  { name: 'Organic Feast', logo: '/brands/organic.svg' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Vázquez',
    pet: 'Dueña de 3 perros',
    content: 'Desde que cambié a Mascota Feliz, mis perros tienen más energía y su pelaje brilla como nunca. El servicio al cliente es excepcional.',
    rating: 5
  },
  {
    id: '2',
    name: 'Roberto Fernández',
    pet: 'Criador profesional',
    content: 'Como criador profesional, la nutrición es fundamental. Mascota Feliz ofrece la calidad que mis animales merecen.',
    rating: 5
  },
  {
    id: '3',
    name: 'Laura Jiménez',
    pet: 'Amante de los gatos',
    content: 'Mi gato es muy exigente con la comida, pero los productos de Mascota Feliz le encantan. Por fin encontré una marca de confianza.',
    rating: 5
  }
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
}

export function calculateDiscount(price: number, originalPrice?: number): number {
  if (!originalPrice) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
// Repository timestamp marker: 2025-11-03.

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, Shield, Heart, Clock, Star, ChevronLeft, ChevronRight, Check, Quote } from 'lucide-react';
import { products, categories, testimonials, formatPrice } from '@/lib/store-data';
import { ProductCard } from './product-card';
import { FadeIn, CountUp } from './transitions';
import { ProductCardSkeleton, TestimonialSkeleton } from './skeletons';
import { cn } from '@/lib/utils';

// Hero Section
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      title: 'Nutrición Premium para tu Mascota',
      subtitle: 'Alimento natural de alta calidad para perros y gatos',
      cta: 'Comprar Ahora',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80',
      link: '/categories'
    },
    {
      title: 'Nuevo: Línea Orgánica',
      subtitle: 'Ingredientes 100% naturales sin aditivos artificiales',
      cta: 'Descubrir',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=80',
      link: '/categories/dog'
    },
    {
      title: 'Cuida a tu Felino',
      subtitle: 'Fórmulas especiales para gatos de todas las edades',
      cta: 'Ver Productos',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80',
      link: '/categories/cat'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="elementor-section elementor-section-full_width elementor-section-height-full woocommerce-hero relative overflow-hidden">
      <div className="elementor-container relative h-[90vh] min-h-[600px] max-h-[900px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              'elementor-widget-wrap absolute inset-0 transition-all duration-700',
              currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="elementor-widget-container relative z-10 h-full flex items-center">
          <div className="wp-block-group container mx-auto px-4 md:px-8">
            <div className="max-w-2xl">
              <FadeIn key={currentSlide} duration={600}>
                <span className="elementor-heading-title inline-block px-4 py-1.5 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full mb-6">
                  Mascota Feliz Premium
                </span>
                <h1 className="elementor-heading-title text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-4 leading-tight text-balance">
                  {slides[currentSlide].title}
                </h1>
                <p className="elementor-widget-text-editor text-lg md:text-xl text-card/90 mb-8 max-w-lg">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={slides[currentSlide].link}
                    className="elementor-button elementor-button-primary inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:gap-3"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="elementor-button elementor-button-secondary inline-flex items-center gap-2 px-8 py-4 bg-card/20 text-card rounded-full font-medium hover:bg-card/30 transition-colors backdrop-blur-sm"
                  >
                    Conoce Más
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="elementor-swiper-button absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                currentSlide === index ? 'bg-primary w-8' : 'bg-card/50 hover:bg-card/80'
              )}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="elementor-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/30 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="elementor-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/30 transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

// Features Bar
export function FeaturesBar() {
  const features = [
    { icon: Truck, title: 'Envío Gratis', desc: 'En pedidos +50€' },
    { icon: Shield, title: 'Pago Seguro', desc: '100% protegido' },
    { icon: Heart, title: 'Calidad Premium', desc: 'Ingredientes naturales' },
    { icon: Clock, title: 'Soporte 24/7', desc: 'Siempre disponibles' }
  ];

  return (
    <section className="elementor-section elementor-section-boxed woocommerce-features-bar bg-card py-6 border-b border-border">
      <div className="elementor-container container mx-auto px-4">
        <div className="elementor-row grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="elementor-widget-icon-box flex items-center gap-3 md:gap-4">
                <div className="elementor-icon w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="elementor-icon-box-content">
                  <h4 className="elementor-icon-box-title text-sm font-semibold text-foreground">{feature.title}</h4>
                  <p className="elementor-icon-box-description text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Categories Section
export function CategoriesSection() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  return (
    <section className="elementor-section elementor-section-boxed woocommerce-categories py-16 md:py-24 bg-background">
      <div className="elementor-container container mx-auto px-4">
        <FadeIn>
          <div className="elementor-widget-heading text-center mb-12">
            <span className="elementor-heading-title text-primary text-sm font-medium uppercase tracking-wider">Explora Nuestra Tienda</span>
            <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Categorías Principales</h2>
            <p className="elementor-widget-text-editor text-muted-foreground mt-4 max-w-2xl mx-auto">
              Encuentra el alimento perfecto para tu compañero peludo. Productos de alta calidad para cada etapa de su vida.
            </p>
          </div>
        </FadeIn>

        <div className="elementor-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 100}>
              <Link href={`/categories/${category.slug}`} className="elementor-widget-image-box group block">
                <div className="woocommerce-category-card relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                  {!imagesLoaded[category.id] && (
                    <div className="absolute inset-0 bg-muted animate-pulse" />
                  )}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className={cn(
                      'object-cover transition-transform duration-500 group-hover:scale-110',
                      imagesLoaded[category.id] ? 'opacity-100' : 'opacity-0'
                    )}
                    onLoad={() => setImagesLoaded(prev => ({ ...prev, [category.id]: true }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="elementor-image-box-title text-xl font-bold text-card">{category.name}</h3>
                    <p className="elementor-image-box-description text-card/80 text-sm mt-1">{category.count} productos</p>
                    <span className="elementor-button inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Products
export function FeaturedProducts() {
  const [loading, setLoading] = useState(true);
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="elementor-section elementor-section-boxed woocommerce-featured-products py-16 md:py-24 bg-secondary/30">
      <div className="elementor-container container mx-auto px-4">
        <FadeIn>
          <div className="elementor-widget-heading text-center mb-12">
            <span className="elementor-heading-title text-primary text-sm font-medium uppercase tracking-wider">Lo Más Vendido</span>
            <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2">Productos Destacados</h2>
            <p className="elementor-widget-text-editor text-muted-foreground mt-4 max-w-2xl mx-auto">
              Descubre nuestros productos más populares, elegidos por miles de dueños de mascotas felices.
            </p>
          </div>
        </FadeIn>

        <div className="wc-block-grid wc-block-product-grid elementor-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : featuredProducts.map((product, index) => (
                <FadeIn key={product.id} delay={index * 50}>
                  <ProductCard product={product} priority={index < 4} />
                </FadeIn>
              ))
          }
        </div>

        <FadeIn delay={400}>
          <div className="elementor-widget-button text-center mt-12">
            <Link
              href="/categories"
              className="elementor-button elementor-button-primary inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:gap-3"
            >
              Ver Todos los Productos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Promo Banner
export function PromoBanner() {
  return (
    <section className="elementor-section elementor-section-full_width woocommerce-promo-banner py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1400&q=80"
          alt="Perros felices"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>
      
      <div className="elementor-container container mx-auto px-4 relative z-10">
        <div className="elementor-row grid md:grid-cols-2 gap-8 items-center">
          <FadeIn direction="left">
            <div className="elementor-widget-container">
              <span className="elementor-heading-title inline-block px-4 py-1.5 bg-card/20 text-card text-sm font-medium rounded-full mb-4">
                Oferta Especial
              </span>
              <h2 className="elementor-heading-title text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4 text-balance">
                25% de Descuento en tu Primera Compra
              </h2>
              <p className="elementor-widget-text-editor text-card/90 text-lg mb-6">
                Usa el código BIENVENIDO25 en tu primer pedido y disfruta de nutrición premium para tu mascota.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/categories"
                  className="elementor-button inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground rounded-full font-medium hover:bg-card/90 transition-colors"
                >
                  Comprar Ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={200}>
            <div className="elementor-widget-container hidden md:flex justify-end">
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-card/20">
                <div className="text-center">
                  <span className="text-6xl md:text-7xl font-bold text-card">25%</span>
                  <p className="text-card/90 text-lg mt-2">de descuento</p>
                  <div className="mt-4 pt-4 border-t border-card/20">
                    <span className="font-mono text-xl text-card bg-card/20 px-4 py-2 rounded">BIENVENIDO25</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// New Arrivals
export function NewArrivals() {
  // Get products with badges (these are our "new arrivals" for display)
  const newProducts = products.filter(p => p.badges && p.badges.length > 0).slice(0, 4);

  return (
    <section className="elementor-section elementor-section-boxed woocommerce-new-arrivals py-16 md:py-24 bg-background">
      <div className="elementor-container container mx-auto px-4">
        <div className="elementor-row grid lg:grid-cols-2 gap-8 items-center">
          <FadeIn direction="left">
            <div className="elementor-widget-container">
              <span className="elementor-heading-title text-primary text-sm font-medium uppercase tracking-wider">Recién Llegados</span>
              <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Nueva Colección Orgánica</h2>
              <p className="elementor-widget-text-editor text-muted-foreground mb-6">
                Descubre nuestra nueva línea de alimentos orgánicos certificados. Ingredientes 100% naturales, sin conservantes artificiales, para una nutrición completa y saludable.
              </p>
              <ul className="space-y-3 mb-8">
                {['Sin aditivos artificiales', 'Proteínas de alta calidad', 'Vitaminas y minerales esenciales', 'Certificación orgánica europea'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/categories"
                className="elementor-button elementor-button-primary inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:gap-3"
              >
                Explorar Colección
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="wc-block-grid grid grid-cols-2 gap-4">
            {newProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 100} direction="right">
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
export function StatsSection() {
  const stats = [
    { value: 50000, suffix: '+', label: 'Mascotas Felices' },
    { value: 150, suffix: '+', label: 'Productos' },
    { value: 98, suffix: '%', label: 'Clientes Satisfechos' },
    { value: 10, suffix: '+', label: 'Años de Experiencia' }
  ];

  return (
    <section className="elementor-section elementor-section-boxed woocommerce-stats py-16 md:py-20 bg-primary">
      <div className="elementor-container container mx-auto px-4">
        <div className="elementor-row grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="elementor-widget-counter text-center">
                <div className="elementor-counter-number-wrapper">
                  <span className="elementor-counter-number text-4xl md:text-5xl font-bold text-card">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="elementor-counter-title text-card/80 mt-2">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
export function TestimonialsSection() {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleTestimonials = 3;
  const totalSlides = Math.ceil(testimonials.length / visibleTestimonials);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (loading) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [loading, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="elementor-section elementor-section-boxed woocommerce-testimonials py-16 md:py-24 bg-secondary/30">
      <div className="elementor-container container mx-auto px-4">
        <FadeIn>
          <div className="elementor-widget-heading text-center mb-12">
            <span className="elementor-heading-title text-primary text-sm font-medium uppercase tracking-wider">Testimonios</span>
            <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2">Lo Que Dicen Nuestros Clientes</h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="elementor-testimonial-wrapper overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {loading ? (
                <div className="flex gap-6 w-full flex-shrink-0">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-2">
                      <TestimonialSkeleton />
                    </div>
                  ))}
                </div>
              ) : (
                Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex gap-6 w-full flex-shrink-0">
                    {testimonials.slice(slideIndex * visibleTestimonials, (slideIndex + 1) * visibleTestimonials).map((testimonial) => (
                      <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                        <div className="elementor-testimonial bg-card rounded-2xl p-6 h-full shadow-sm">
                          <Quote className="w-8 h-8 text-primary/20 mb-4" />
                          <p className="elementor-testimonial-content text-foreground mb-6 line-clamp-4">
                            {`"${testimonial.content}"`}
                          </p>
                          <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  'w-4 h-4',
                                  i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'
                                )}
                              />
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                              {testimonial.name?.charAt(0) || '?'}
                            </div>
                            <div>
                              <h4 className="elementor-testimonial-name font-semibold text-foreground">{testimonial.name || 'Anonymous'}</h4>
                              <p className="elementor-testimonial-job text-sm text-muted-foreground">{testimonial.pet || ''}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="elementor-swiper-button w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="elementor-swiper-button w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Newsletter
export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="elementor-section elementor-section-boxed woocommerce-newsletter py-16 md:py-24 bg-background">
      <div className="elementor-container container mx-auto px-4">
        <div className="elementor-widget-container max-w-2xl mx-auto text-center">
          <FadeIn>
            <span className="elementor-heading-title text-primary text-sm font-medium uppercase tracking-wider">Newsletter</span>
            <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Suscríbete y Ahorra
            </h2>
            <p className="elementor-widget-text-editor text-muted-foreground mb-8">
              Recibe ofertas exclusivas, consejos de nutrición y un 10% de descuento en tu próxima compra.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            {submitted ? (
              <div className="bg-primary/10 text-primary rounded-2xl p-6">
                <Check className="w-12 h-12 mx-auto mb-4" />
                <p className="font-medium">Gracias por suscribirte. Revisa tu correo para confirmar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="elementor-form flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="elementor-field flex-1 px-6 py-4 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="elementor-button elementor-button-primary px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Suscribirse
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Instagram Feed
export function InstagramSection() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  
  const instagramImages = [
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80',
    'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80',
    'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80',
    'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80'
  ];

  return (
    <section className="elementor-section elementor-section-full_width woocommerce-instagram py-16 md:py-24 bg-secondary/30">
      <div className="elementor-container container mx-auto px-4">
        <FadeIn>
          <div className="elementor-widget-heading text-center mb-12">
            <span className="elementor-heading-title text-primary text-sm font-medium uppercase tracking-wider">@MascotaFeliz</span>
            <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2">Síguenos en Instagram</h2>
          </div>
        </FadeIn>

        <div className="elementor-row grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {instagramImages.map((image, index) => (
            <FadeIn key={index} delay={index * 50}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="elementor-widget-image group block aspect-square relative rounded-xl overflow-hidden"
              >
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 bg-muted animate-pulse" />
                )}
                <Image
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className={cn(
                    'object-cover transition-transform duration-500 group-hover:scale-110',
                    imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                  )}
                  onLoad={() => setImagesLoaded(prev => ({ ...prev, [index]: true }))}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                  <Heart className="w-8 h-8 text-card opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
// Repository timestamp marker: 2025-11-03.

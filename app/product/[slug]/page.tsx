'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, ShoppingCart, Heart, Minus, Plus, Truck, Shield, RefreshCcw, Check } from 'lucide-react';
import { products, formatPrice } from '@/lib/store-data';
import { ProductCard } from '@/components/wordpress/product-card';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

const tabs = ['Descripción', 'Información Adicional', 'Valoraciones'];

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const product = products.find(p => p.slug === slug);
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  if (!product) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Producto no encontrado</h1>
          <Link href="/categories" className="text-primary hover:underline">
            Volver a la tienda
          </Link>
        </div>
      </PageTransition>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-8 woocommerce-single-product" data-elementor-type="wp-page" data-elementor-id="8">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">Tienda</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link href={`/categories/${product.category}`} className="text-muted-foreground hover:text-primary transition-colors capitalize">
                {product.category === 'dog' ? 'Perros' : 'Gatos'}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Details */}
        <section className="elementor-section woocommerce-product-details py-8 md:py-12 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="elementor-row grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Images */}
              <FadeIn direction="left">
                <div className="woocommerce-product-gallery">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-muted animate-pulse" />
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      className={cn(
                        'object-cover transition-opacity duration-300',
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      )}
                      onLoad={() => setImageLoaded(true)}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.badges?.map((badge, index) => (
                        <span
                          key={index}
                          className={cn(
                            'px-3 py-1 rounded-full text-sm font-medium',
                            badge.includes('%') || badge.includes('-')
                              ? 'bg-destructive text-destructive-foreground'
                              : 'bg-primary text-primary-foreground'
                          )}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Wishlist */}
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={cn(
                        'absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                        isWishlisted ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-primary hover:text-primary-foreground'
                      )}
                      aria-label="Añadir a favoritos"
                    >
                      <Heart className={cn('w-5 h-5', isWishlisted && 'fill-current')} />
                    </button>
                  </div>
                </div>
              </FadeIn>

              {/* Product Info */}
              <FadeIn direction="right" delay={100}>
                <div className="woocommerce-product-summary">
                  {/* Category */}
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {product.category === 'dog' ? 'Para Perros' : 'Para Gatos'}
                  </span>

                  {/* Title */}
                  <h1 className="product_title entry-title text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="woocommerce-product-rating flex items-center gap-2 mb-4">
                    <div className="star-rating flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'w-5 h-5',
                            i < Math.floor(product.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-muted text-muted'
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">
                      {product.rating} ({product.reviews} valoraciones)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="woocommerce-Price flex items-center gap-3 mb-6">
                    <span className="price text-3xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <span className="px-2 py-1 bg-destructive/10 text-destructive text-sm font-medium rounded">
                          -{discount}%
                        </span>
                      </>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="woocommerce-product-details__short-description text-muted-foreground mb-6">
                    {product.description}
                  </p>

                  {/* Weight */}
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">Peso: </span>
                    <span className="text-sm font-medium text-foreground">{product.weight}</span>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="woocommerce-cart flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                    <div className="quantity flex items-center border border-border rounded-full overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-secondary transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-secondary transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={addedToCart}
                      className={cn(
                        'single_add_to_cart_button button alt flex-1 py-4 px-8 rounded-full font-medium flex items-center justify-center gap-2 transition-all',
                        addedToCart
                          ? 'bg-green-500 text-white'
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      )}
                    >
                      {addedToCart ? (
                        <>
                          <Check className="w-5 h-5" />
                          Añadido al Carrito
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5" />
                          Añadir al Carrito
                        </>
                      )}
                    </button>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div className="flex flex-col items-center text-center">
                      <Truck className="w-6 h-6 text-primary mb-2" />
                      <span className="text-xs text-muted-foreground">Envío gratis +50€</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Shield className="w-6 h-6 text-primary mb-2" />
                      <span className="text-xs text-muted-foreground">Pago seguro</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <RefreshCcw className="w-6 h-6 text-primary mb-2" />
                      <span className="text-xs text-muted-foreground">Devolución 30 días</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="elementor-section woocommerce-tabs py-12 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              {/* Tab Navigation */}
              <div className="wc-tabs-wrapper flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      'px-6 py-3 rounded-full text-sm font-medium transition-colors',
                      activeTab === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-foreground hover:bg-primary/10'
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="woocommerce-Tabs-panel bg-card rounded-2xl p-6 md:p-8">
                {activeTab === 0 && (
                  <div className="woocommerce-product-description">
                    <h2 className="text-xl font-bold text-foreground mb-4">Descripción del Producto</h2>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <p className="text-muted-foreground mb-4">
                      Nuestro {product.name} está formulado con ingredientes de alta calidad seleccionados 
                      cuidadosamente para proporcionar una nutrición completa y equilibrada. 
                      Contiene proteínas de origen animal de primera calidad, vitaminas esenciales y 
                      minerales que apoyan la salud general de tu mascota.
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Ingredientes Principales</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Proteína animal de alta calidad (pollo, salmón o cordero)</li>
                      <li>Arroz integral y cereales seleccionados</li>
                      <li>Verduras frescas (zanahorias, guisantes)</li>
                      <li>Omega 3 y 6 para piel y pelaje saludables</li>
                      <li>Vitaminas A, D, E y complejo B</li>
                      <li>Minerales esenciales (calcio, fósforo, zinc)</li>
                    </ul>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="woocommerce-product-attributes">
                    <h2 className="text-xl font-bold text-foreground mb-4">Información Adicional</h2>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-border">
                          <th className="py-3 text-left text-muted-foreground font-medium">Peso</th>
                          <td className="py-3 text-foreground">{product.weight}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <th className="py-3 text-left text-muted-foreground font-medium">Categoría</th>
                          <td className="py-3 text-foreground">{product.category === 'dog' ? 'Perros' : 'Gatos'}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <th className="py-3 text-left text-muted-foreground font-medium">SKU</th>
                          <td className="py-3 text-foreground">MF-{product.id.toString().padStart(4, '0')}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <th className="py-3 text-left text-muted-foreground font-medium">Disponibilidad</th>
                          <td className="py-3 text-green-600 font-medium">En stock</td>
                        </tr>
                        <tr>
                          <th className="py-3 text-left text-muted-foreground font-medium">Origen</th>
                          <td className="py-3 text-foreground">España</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="woocommerce-reviews">
                    <h2 className="text-xl font-bold text-foreground mb-4">Valoraciones de Clientes</h2>
                    <div className="flex items-center gap-4 mb-8 p-4 bg-secondary/50 rounded-xl">
                      <div className="text-center">
                        <span className="text-4xl font-bold text-foreground">{product.rating}</span>
                        <div className="star-rating flex items-center justify-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                'w-4 h-4',
                                i < Math.floor(product.rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'fill-muted text-muted'
                              )}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{product.reviews} valoraciones</span>
                      </div>
                    </div>

                    {/* Sample Reviews */}
                    <div className="space-y-6">
                      {[
                        { name: 'María García', rating: 5, comment: 'Mi perro lo adora! He notado mejoras en su pelaje desde que empezamos con este alimento.' },
                        { name: 'Carlos López', rating: 5, comment: 'Excelente calidad precio. El envío fue muy rápido y el producto llegó en perfectas condiciones.' },
                        { name: 'Ana Martínez', rating: 4, comment: 'Buena relación calidad-precio. Mi gato es muy exigente pero este alimento le encanta.' }
                      ].map((review, index) => (
                        <div key={index} className="border-b border-border pb-6 last:border-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <span className="font-medium text-foreground">{review.name}</span>
                              <div className="star-rating flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={cn(
                                      'w-3 h-3',
                                      i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'
                                    )}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="elementor-section woocommerce-related py-16 bg-background">
            <div className="elementor-container container mx-auto px-4">
              <FadeIn>
                <h2 className="elementor-heading-title text-2xl font-bold text-foreground text-center mb-8">
                  Productos Relacionados
                </h2>
              </FadeIn>
              <div className="wc-block-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((relProduct, index) => (
                  <FadeIn key={relProduct.id} delay={index * 100}>
                    <ProductCard product={relProduct} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </PageTransition>
  );
}

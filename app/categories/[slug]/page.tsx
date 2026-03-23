'use client';

import { useState, useEffect, useMemo, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, SlidersHorizontal, Grid3X3, LayoutList, X } from 'lucide-react';
import { products, categories, type Product } from '@/lib/store-data';
import { ProductCard } from '@/components/wordpress/product-card';
import { ProductCardSkeleton } from '@/components/wordpress/skeletons';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { cn } from '@/lib/utils';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name' | 'newest';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        result = result.filter(p => p.badges?.includes('Nuevo')).concat(
          result.filter(p => !p.badges?.includes('Nuevo'))
        );
        break;
      default:
        result.sort((a, b) => (b.badges?.length || 0) - (a.badges?.length || 0));
    }

    return result;
  }, [categoryProducts, sortBy, priceRange]);

  if (!category) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Categoría no encontrada</h1>
          <Link href="/categories" className="text-primary hover:underline">
            Volver a la tienda
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-7 woocommerce-category" data-elementor-type="wp-page" data-elementor-id="7">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">Tienda</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{category.name}</span>
            </nav>
          </div>
        </section>

        {/* Category Header */}
        <section className="elementor-section woocommerce-archive-header relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
          </div>
          <div className="elementor-container container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="max-w-2xl">
                <h1 className="elementor-heading-title text-3xl md:text-5xl font-bold text-card mb-4">{category.name}</h1>
                <p className="elementor-widget-text-editor text-card/90 text-lg">
                  {category.description}
                </p>
                <p className="text-card/70 mt-4">{category.count} productos disponibles</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Products */}
        <section className="elementor-section woocommerce-products py-8 bg-background">
          <div className="elementor-container container mx-auto px-4">
            {/* Toolbar */}
            <div className="woocommerce-toolbar flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtros
                </button>
                <p className="woocommerce-result-count text-sm text-muted-foreground">
                  Mostrando {filteredProducts.length} productos
                </p>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="woocommerce-ordering px-4 py-2 bg-card rounded-lg text-sm text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Destacados</option>
                  <option value="newest">Más recientes</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="name">Nombre</option>
                </select>

                <div className="hidden md:flex items-center gap-1 bg-card rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      'p-2 rounded-md transition-colors',
                      viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                    aria-label="Vista de cuadrícula"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={cn(
                      'p-2 rounded-md transition-colors',
                      viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                    aria-label="Vista de lista"
                  >
                    <LayoutList className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={cn(
              'wc-block-grid wc-block-product-grid',
              viewMode === 'grid'
                ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'
                : 'flex flex-col gap-4'
            )}>
              {loading
                ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
                : filteredProducts.map((product, index) => (
                    <FadeIn key={product.id} delay={index * 30}>
                      <ProductCard product={product} priority={index < 4} />
                    </FadeIn>
                  ))
              }
            </div>

            {/* No Results */}
            {!loading && filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No se encontraron productos con los filtros seleccionados.</p>
                <button
                  onClick={() => setPriceRange([0, 100])}
                  className="text-primary hover:underline"
                >
                  Restablecer filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Other Categories */}
        <section className="elementor-section py-16 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <h2 className="elementor-heading-title text-2xl font-bold text-foreground text-center mb-8">Otras Categorías</h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.filter(c => c.slug !== slug).map((cat, index) => (
                <FadeIn key={cat.id} delay={index * 100}>
                  <Link href={`/categories/${cat.slug}`} className="group block">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                        <span className="text-card font-semibold">{cat.name}</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Filters Modal */}
        {showFilters && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-foreground/50" onClick={() => setShowFilters(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-card p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Filtros</h3>
                <button onClick={() => setShowFilters(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Precio</h4>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-primary"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                  <span>{priceRange[0]}€</span>
                  <span>{priceRange[1]}€</span>
                </div>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-3 bg-primary text-primary-foreground rounded-full font-medium"
              >
                Ver {filteredProducts.length} productos
              </button>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight, SlidersHorizontal, Grid3X3, LayoutList, X } from 'lucide-react';
import { products, categories, type Product } from '@/lib/store-data';
import { ProductCard } from '@/components/wordpress/product-card';
import { ProductCardSkeleton } from '@/components/wordpress/skeletons';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { cn } from '@/lib/utils';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name' | 'newest';

export default function CategoriesPage() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

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
        // Featured - prioritize products with badges
        result.sort((a, b) => (b.badges?.length || 0) - (a.badges?.length || 0));
    }

    return result;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-6 woocommerce-shop" data-elementor-type="wp-page" data-elementor-id="6">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Tienda</span>
            </nav>
          </div>
        </section>

        {/* Page Header */}
        <section className="elementor-section woocommerce-products-header py-12 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestra Tienda</h1>
                <p className="elementor-widget-text-editor text-muted-foreground">
                  Explora nuestra completa selección de alimentos premium para perros y gatos. 
                  Ingredientes naturales de la más alta calidad para la salud de tu mascota.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Shop Content */}
        <section className="elementor-section woocommerce-products py-8 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="elementor-row flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters - Desktop */}
              <aside className="woocommerce-sidebar hidden lg:block w-64 flex-shrink-0">
                <div className="elementor-widget-container bg-card rounded-2xl p-6 sticky top-24">
                  <h3 className="elementor-heading-title font-semibold text-foreground mb-4">Filtros</h3>
                  
                  {/* Categories Filter */}
                  <div className="woocommerce-widget-layered-nav mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Categorías</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={cn(
                          'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          selectedCategory === 'all' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-secondary text-foreground'
                        )}
                      >
                        Todos los productos
                      </button>
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.slug)}
                          className={cn(
                            'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between',
                            selectedCategory === cat.slug 
                              ? 'bg-primary text-primary-foreground' 
                              : 'hover:bg-secondary text-foreground'
                          )}
                        >
                          {cat.name}
                          <span className="text-xs opacity-70">{cat.count}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="woocommerce-widget-price-filter mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Precio</h4>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full accent-primary"
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0]}€</span>
                        <span>{priceRange[1]}€</span>
                      </div>
                    </div>
                  </div>

                  {/* Reset Filters */}
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 100]);
                      setSortBy('featured');
                    }}
                    className="w-full py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Restablecer filtros
                  </button>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="woocommerce-products-wrapper flex-1">
                {/* Toolbar */}
                <div className="woocommerce-toolbar flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowFilters(true)}
                      className="lg:hidden flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
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
                    ? 'grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'
                    : 'flex flex-col gap-4'
                )}>
                  {loading
                    ? Array.from({ length: 9 }).map((_, i) => <ProductCardSkeleton key={i} />)
                    : filteredProducts.map((product, index) => (
                        <FadeIn key={product.id} delay={index * 30}>
                          <ProductCard product={product} priority={index < 6} />
                        </FadeIn>
                      ))
                  }
                </div>

                {/* No Results */}
                {!loading && filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground mb-4">No se encontraron productos con los filtros seleccionados.</p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setPriceRange([0, 100]);
                      }}
                      className="text-primary hover:underline"
                    >
                      Ver todos los productos
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Filters Modal */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-foreground/50" onClick={() => setShowFilters(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-card p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Filtros</h3>
                <button onClick={() => setShowFilters(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Categorías</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={cn(
                      'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                      selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary text-foreground'
                    )}
                  >
                    Todos los productos
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between',
                        selectedCategory === cat.slug ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary text-foreground'
                      )}
                    >
                      {cat.name}
                      <span className="text-xs opacity-70">{cat.count}</span>
                    </button>
                  ))}
                </div>
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

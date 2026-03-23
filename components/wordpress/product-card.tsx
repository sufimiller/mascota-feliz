'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice, type Product } from '@/lib/store-data';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <article
      className="elementor-widget elementor-widget-woocommerce-product wc-block-grid__product group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="woocommerce-product-gallery relative aspect-square overflow-hidden bg-secondary">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className={cn(
            'object-cover transition-transform duration-500',
            isHovered && 'scale-110',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Badges */}
        <div className="woocommerce-product-badge absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.badges?.map((badge, index) => (
            <span
              key={index}
              className={cn(
                'onsale px-2 py-1 rounded-full text-xs font-medium',
                badge.includes('%') || badge.includes('-')
                  ? 'bg-destructive text-destructive-foreground'
                  : 'bg-primary text-primary-foreground'
              )}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Quick Actions */}
        <div
          className={cn(
            'woocommerce-product-actions absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300',
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          )}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm',
              isWishlisted
                ? 'bg-primary text-primary-foreground'
                : 'bg-card text-foreground hover:bg-primary hover:text-primary-foreground'
            )}
            aria-label="Añadir a favoritos"
          >
            <Heart className={cn('w-4 h-4', isWishlisted && 'fill-current')} />
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="w-9 h-9 rounded-full bg-card text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
            aria-label="Ver producto"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>

        {/* Add to Cart Button */}
        <div
          className={cn(
            'woocommerce-product-add-to-cart absolute bottom-0 left-0 right-0 p-3 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="add_to_cart_button ajax_add_to_cart w-full py-2.5 px-4 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Añadir al Carrito
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="woocommerce-product-details p-4">
        {/* Category */}
        <span className="woocommerce-product-category text-xs text-muted-foreground uppercase tracking-wide">
          {product.category === 'dog' ? 'Perros' : 'Gatos'}
        </span>

        {/* Title */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="woocommerce-loop-product__title text-sm font-medium text-foreground mt-1 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="woocommerce-product-rating flex items-center gap-1 mt-2">
          <div className="star-rating flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3.5 h-3.5',
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-muted text-muted'
                )}
              />
            ))}
          </div>
          <span className="woocommerce-review-link text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="woocommerce-product-price flex items-center gap-2 mt-2">
          <span className="woocommerce-Price-amount amount text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <>
              <span className="woocommerce-Price-amount text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="woocommerce-badge onsale text-xs text-destructive font-medium">
                -{discount}%
              </span>
            </>
          )}
        </div>

        {/* Weight */}
        <span className="woocommerce-product-weight text-xs text-muted-foreground mt-1 block">
          {product.weight}
        </span>
      </div>
    </article>
  );
}

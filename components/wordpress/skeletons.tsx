'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'elementor-widget elementor-widget-skeleton animate-pulse bg-muted rounded-lg',
        className
      )}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="elementor-widget elementor-widget-woocommerce-product bg-card rounded-2xl overflow-hidden">
      <Skeleton className="aspect-square w-full" />
      <div className="p-4 flex flex-col gap-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <div className="flex items-center justify-between mt-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="elementor-widget elementor-widget-woocommerce-products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="elementor-widget elementor-widget-woocommerce-product-category bg-card rounded-2xl overflow-hidden">
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="p-4 flex flex-col gap-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/3 mt-1" />
      </div>
    </div>
  );
}

export function CategoryGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="elementor-widget elementor-widget-woocommerce-product-categories grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="elementor-section elementor-section-full_width relative h-[500px] lg:h-[600px]">
      <Skeleton className="absolute inset-0 rounded-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center gap-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-16 w-96 max-w-full" />
        <Skeleton className="h-4 w-72 max-w-full" />
        <Skeleton className="h-12 w-40 rounded-full mt-4" />
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="elementor-widget elementor-widget-testimonial bg-card rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-2/3 mt-2" />
    </div>
  );
}

export function CartItemSkeleton() {
  return (
    <div className="elementor-widget elementor-widget-woocommerce-cart-item flex gap-4 p-4 bg-card rounded-xl">
      <Skeleton className="w-20 h-20 rounded-lg flex-shrink-0" />
      <div className="flex-1 flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex items-center justify-between mt-auto">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div className="elementor-section elementor-section-full_width bg-secondary py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96 max-w-full" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="elementor-widget elementor-widget-form flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-11 w-full rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      <Skeleton className="h-12 w-40 rounded-full mt-2" />
    </div>
  );
}

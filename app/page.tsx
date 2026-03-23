'use client';

import { PageTransition } from '@/components/wordpress/transitions';
import {
  HeroSection,
  FeaturesBar,
  CategoriesSection,
  FeaturedProducts,
  PromoBanner,
  NewArrivals,
  StatsSection,
  TestimonialsSection,
  NewsletterSection,
  InstagramSection
} from '@/components/wordpress/homepage-sections';

export default function HomePage() {
  return (
    <PageTransition>
      {/* WordPress/Elementor Page Structure */}
      <div className="wp-block-post-content elementor elementor-5" data-elementor-type="wp-page" data-elementor-id="5">
        <div className="elementor-inner">
          <div className="elementor-section-wrap">
            {/* Hero Slider */}
            <HeroSection />
            
            {/* Features Bar */}
            <FeaturesBar />
            
            {/* Categories */}
            <CategoriesSection />
            
            {/* Featured Products */}
            <FeaturedProducts />
            
            {/* Promo Banner */}
            <PromoBanner />
            
            {/* New Arrivals */}
            <NewArrivals />
            
            {/* Stats */}
            <StatsSection />
            
            {/* Testimonials */}
            <TestimonialsSection />
            
            {/* Newsletter */}
            <NewsletterSection />
            
            {/* Instagram */}
            <InstagramSection />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

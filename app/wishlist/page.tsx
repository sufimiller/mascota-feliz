'use client';

import Link from 'next/link';
import { ChevronRight, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';

export default function WishlistPage() {
  return (
    <PageTransition>
      <div className="wp-block-post-content elementor woocommerce-wishlist" data-elementor-type="wp-page">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Lista de Deseos</span>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="elementor-section py-16 md:py-24 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="max-w-md mx-auto text-center">
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-muted-foreground" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-4">Tu Lista de Deseos está Vacía</h1>
                <p className="text-muted-foreground mb-8">
                  Guarda tus productos favoritos haciendo clic en el icono del corazón. 
                  Así podrás encontrarlos fácilmente cuando estés listo para comprar.
                </p>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Explorar Tienda
                </Link>
              </div>
            </FadeIn>

            {/* Tips */}
            <FadeIn delay={200}>
              <div className="mt-16 max-w-2xl mx-auto">
                <h2 className="text-lg font-semibold text-foreground text-center mb-6">¿Cómo funciona?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Navega por nuestra tienda y encuentra productos que te gusten</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Haz clic en el corazón para añadir a tu lista de deseos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Vuelve cuando quieras para comprar tus favoritos</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Tag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/store-data';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { cn } from '@/lib/utils';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const shipping = subtotal >= 50 ? 0 : 4.99;
  const discount = couponDiscount;
  const total = subtotal + shipping - discount;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'BIENVENIDO25') {
      setAppliedCoupon(couponCode.toUpperCase());
      setCouponDiscount(subtotal * 0.25);
      setCouponCode('');
    } else if (couponCode.toUpperCase() === 'MASCOTA10') {
      setAppliedCoupon(couponCode.toUpperCase());
      setCouponDiscount(subtotal * 0.10);
      setCouponCode('');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
  };

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="wp-block-post-content elementor woocommerce-cart-empty" data-elementor-type="wp-page">
          <div className="container mx-auto px-4 py-24 text-center">
            <FadeIn>
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-4">Tu carrito está vacío</h1>
                <p className="text-muted-foreground mb-8">
                  Parece que aún no has añadido nada a tu carrito. Explora nuestra tienda y encuentra los mejores productos para tu mascota.
                </p>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Explorar Tienda
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-10 woocommerce-cart" data-elementor-type="wp-page" data-elementor-id="10">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Carrito</span>
            </nav>
          </div>
        </section>

        {/* Cart Content */}
        <section className="elementor-section woocommerce-cart-form py-8 md:py-12 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <h1 className="elementor-heading-title text-2xl md:text-3xl font-bold text-foreground mb-8">Tu Carrito</h1>
            </FadeIn>

            <div className="elementor-row grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <FadeIn delay={100}>
                  <div className="woocommerce-cart-form__contents bg-card rounded-2xl overflow-hidden">
                    {/* Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-secondary/50 text-sm font-medium text-muted-foreground">
                      <div className="col-span-6">Producto</div>
                      <div className="col-span-2 text-center">Precio</div>
                      <div className="col-span-2 text-center">Cantidad</div>
                      <div className="col-span-2 text-right">Subtotal</div>
                    </div>

                    {/* Items */}
                    <div className="divide-y divide-border">
                      {items.map((item, index) => (
                        <div key={item.product.id} className="woocommerce-cart-form__cart-item p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                          {/* Product */}
                          <div className="md:col-span-6 flex items-center gap-4 mb-4 md:mb-0">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                              <Image
                                src={item.product.image}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={`/product/${item.product.slug}`} className="product-name font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
                                {item.product.name}
                              </Link>
                              <p className="text-sm text-muted-foreground mt-1">{item.product.weight}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="md:hidden text-muted-foreground hover:text-destructive transition-colors"
                              aria-label="Eliminar producto"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="md:col-span-2 flex items-center justify-between md:justify-center mb-2 md:mb-0">
                            <span className="md:hidden text-sm text-muted-foreground">Precio:</span>
                            <span className="product-price text-foreground">{formatPrice(item.product.price)}</span>
                          </div>

                          {/* Quantity */}
                          <div className="md:col-span-2 flex items-center justify-between md:justify-center mb-2 md:mb-0">
                            <span className="md:hidden text-sm text-muted-foreground">Cantidad:</span>
                            <div className="quantity flex items-center border border-border rounded-full overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-2 hover:bg-secondary transition-colors"
                                aria-label="Reducir cantidad"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-2 hover:bg-secondary transition-colors"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Subtotal */}
                          <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                            <span className="md:hidden text-sm text-muted-foreground">Subtotal:</span>
                            <div className="flex items-center gap-2">
                              <span className="product-subtotal font-medium text-foreground">
                                {formatPrice(item.product.price * item.quantity)}
                              </span>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="hidden md:block text-muted-foreground hover:text-destructive transition-colors"
                                aria-label="Eliminar producto"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="p-4 bg-secondary/30 flex flex-wrap items-center justify-between gap-4">
                      <Link href="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Seguir comprando
                      </Link>
                      <button
                        onClick={clearCart}
                        className="text-sm text-destructive hover:text-destructive/80 transition-colors"
                      >
                        Vaciar carrito
                      </button>
                    </div>
                  </div>
                </FadeIn>

                {/* Coupon */}
                <FadeIn delay={200}>
                  <div className="coupon mt-6 bg-card rounded-2xl p-4 md:p-6">
                    <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5 text-primary" />
                      Código de Descuento
                    </h3>
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between bg-primary/10 rounded-lg p-3">
                        <div>
                          <span className="font-medium text-primary">{appliedCoupon}</span>
                          <span className="text-sm text-muted-foreground ml-2">(-{formatPrice(couponDiscount)})</span>
                        </div>
                        <button
                          onClick={removeCoupon}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Introduce tu código"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1 px-4 py-2 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                          onClick={handleApplyCoupon}
                          className="px-6 py-2 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
                        >
                          Aplicar
                        </button>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Prueba: BIENVENIDO25 (25% dto) o MASCOTA10 (10% dto)
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <FadeIn delay={300}>
                  <div className="cart_totals bg-card rounded-2xl p-6 sticky top-24">
                    <h2 className="text-lg font-bold text-foreground mb-6">Resumen del Pedido</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-foreground">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      
                      {discount > 0 && (
                        <div className="flex items-center justify-between text-green-600">
                          <span>Descuento</span>
                          <span>-{formatPrice(discount)}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-foreground">
                        <span>Envío</span>
                        <span className={shipping === 0 ? 'text-green-600' : ''}>
                          {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
                        </span>
                      </div>

                      {shipping > 0 && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3">
                          <Truck className="w-4 h-4" />
                          <span>Envío gratis en pedidos superiores a 50€</span>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-border pt-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-foreground">Total</span>
                        <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">IVA incluido</p>
                    </div>

                    <Link
                      href="/checkout"
                      className="wc-proceed-to-checkout block w-full py-4 bg-primary text-primary-foreground rounded-full font-medium text-center hover:bg-primary/90 transition-colors"
                    >
                      Proceder al Pago
                    </Link>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                          <line x1="1" y1="10" x2="23" y2="10"/>
                        </svg>
                        Pago 100% seguro
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
// Repository timestamp marker: 2025-11-03.

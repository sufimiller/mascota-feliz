'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/store-data';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, totalPrice, updateQuantity, removeFromCart } = useCart();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'elementor-popup-modal fixed inset-0 bg-foreground/50 z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={cn(
          'elementor-popup fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="elementor-widget elementor-widget-heading flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="elementor-heading-title text-lg font-semibold text-foreground">
              Tu Carrito
            </h2>
            <span className="text-sm text-muted-foreground">({items.length})</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="elementor-button p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="elementor-widget elementor-widget-woocommerce-cart flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="woocommerce-mini-cart__empty-message flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Tu carrito está vacío</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="elementor-button text-primary font-medium hover:underline"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <ul className="woocommerce-mini-cart cart_list product_list_widget flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="woocommerce-mini-cart-item mini_cart_item bg-secondary/50 rounded-xl p-4 transition-all duration-200 hover:bg-secondary animate-in fade-in slide-in-from-right-5"
                >
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="product-name text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="remove p-1 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                          aria-label="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.product.weight}</span>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="quantity flex items-center gap-1 bg-card rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                            aria-label="Reducir cantidad"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="woocommerce-Price-amount amount text-sm font-semibold text-primary">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="elementor-widget elementor-widget-woocommerce-cart-totals border-t border-border p-6 bg-card">
            <div className="woocommerce-mini-cart__total total flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="woocommerce-Price-amount amount text-lg font-bold text-foreground">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Envío y descuentos calculados en el checkout
            </p>
            <div className="woocommerce-mini-cart__buttons buttons flex flex-col gap-2">
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="checkout wc-forward flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Ver Carrito
              </Link>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="checkout wc-forward flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Finalizar Compra
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronRight, Lock, CreditCard, Check } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/store-data';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { cn } from '@/lib/utils';

type PaymentMethod = 'card' | 'paypal' | 'bizum';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'España',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: ''
  });

  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Tu carrito está vacío</h1>
          <Link href="/categories" className="text-primary hover:underline">
            Volver a la tienda
          </Link>
        </div>
      </PageTransition>
    );
  }

  if (orderComplete) {
    return (
      <PageTransition>
        <div className="wp-block-post-content elementor woocommerce-order-received" data-elementor-type="wp-page">
          <div className="container mx-auto px-4 py-16 md:py-24 text-center">
            <FadeIn>
              <div className="max-w-lg mx-auto">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Pedido Confirmado
                </h1>
                <p className="text-muted-foreground mb-2">
                  Gracias por tu compra. Tu pedido ha sido procesado correctamente.
                </p>
                <p className="text-muted-foreground mb-8">
                  Hemos enviado un correo de confirmación a <span className="font-medium text-foreground">{formData.email || 'tu correo'}</span>
                </p>
                
                <div className="bg-card rounded-2xl p-6 mb-8 text-left">
                  <h2 className="font-medium text-foreground mb-4">Detalles del Pedido</h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Número de pedido:</span>
                      <span className="font-medium text-foreground">#MF{Date.now().toString().slice(-8)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fecha:</span>
                      <span className="font-medium text-foreground">{new Date().toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-medium text-primary">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Método de pago:</span>
                      <span className="font-medium text-foreground capitalize">{paymentMethod === 'card' ? 'Tarjeta' : paymentMethod}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/categories"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Seguir Comprando
                  </Link>
                  <Link
                    href="/"
                    className="px-8 py-3 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Volver al Inicio
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-11 woocommerce-checkout" data-elementor-type="wp-page" data-elementor-id="11">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors">Carrito</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Checkout</span>
            </nav>
          </div>
        </section>

        {/* Checkout Content */}
        <section className="elementor-section woocommerce-checkout-content py-8 md:py-12 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <h1 className="elementor-heading-title text-2xl md:text-3xl font-bold text-foreground mb-8">Finalizar Compra</h1>
            </FadeIn>

            {/* Progress Steps */}
            <FadeIn delay={100}>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors',
                    step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                  )}>
                    1
                  </div>
                  <span className="ml-2 text-sm font-medium text-foreground">Datos de Envío</span>
                </div>
                <div className={cn(
                  'w-16 h-0.5 mx-4',
                  step >= 2 ? 'bg-primary' : 'bg-border'
                )} />
                <div className="flex items-center">
                  <div className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors',
                    step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                  )}>
                    2
                  </div>
                  <span className="ml-2 text-sm font-medium text-foreground">Pago</span>
                </div>
              </div>
            </FadeIn>

            <form onSubmit={handleSubmit}>
              <div className="elementor-row grid lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <FadeIn delay={200}>
                    {step === 1 ? (
                      <div className="woocommerce-billing-fields bg-card rounded-2xl p-6">
                        <h2 className="text-lg font-bold text-foreground mb-6">Datos de Envío</h2>
                        
                        <div className="space-y-4">
                          {/* Email */}
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                              Correo electrónico *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="tu@email.com"
                            />
                          </div>

                          {/* Name */}
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                                Nombre *
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                                Apellidos *
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                          </div>

                          {/* Phone */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                              Teléfono *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="+34 600 000 000"
                            />
                          </div>

                          {/* Address */}
                          <div>
                            <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1">
                              Dirección *
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              required
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Calle, número, piso..."
                            />
                          </div>

                          {/* City & Postal Code */}
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1">
                                Ciudad *
                              </label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                            <div>
                              <label htmlFor="postalCode" className="block text-sm font-medium text-foreground mb-1">
                                Código Postal *
                              </label>
                              <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                required
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                          </div>

                          {/* Country */}
                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-foreground mb-1">
                              País *
                            </label>
                            <select
                              id="country"
                              name="country"
                              required
                              value={formData.country}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              <option value="España">España</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Francia">Francia</option>
                              <option value="Alemania">Alemania</option>
                              <option value="Italia">Italia</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="woocommerce-checkout-payment bg-card rounded-2xl p-6">
                        <h2 className="text-lg font-bold text-foreground mb-6">Método de Pago</h2>

                        {/* Payment Methods */}
                        <div className="wc_payment_methods space-y-3 mb-6">
                          {[
                            { id: 'card', label: 'Tarjeta de Crédito/Débito', icon: CreditCard },
                            { id: 'paypal', label: 'PayPal', icon: () => <span className="text-blue-600 font-bold text-sm">PayPal</span> },
                            { id: 'bizum', label: 'Bizum', icon: () => <span className="text-purple-600 font-bold text-sm">Bizum</span> }
                          ].map((method) => (
                            <label
                              key={method.id}
                              className={cn(
                                'wc_payment_method flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors',
                                paymentMethod === method.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border hover:border-primary/50'
                              )}
                            >
                              <input
                                type="radio"
                                name="payment_method"
                                value={method.id}
                                checked={paymentMethod === method.id}
                                onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                                className="sr-only"
                              />
                              <div className={cn(
                                'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                                paymentMethod === method.id ? 'border-primary' : 'border-border'
                              )}>
                                {paymentMethod === method.id && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                )}
                              </div>
                              <method.icon className="w-5 h-5 text-muted-foreground" />
                              <span className="font-medium text-foreground">{method.label}</span>
                            </label>
                          ))}
                        </div>

                        {/* Card Details */}
                        {paymentMethod === 'card' && (
                          <div className="wc-credit-card-form space-y-4 pt-4 border-t border-border">
                            <div>
                              <label htmlFor="cardNumber" className="block text-sm font-medium text-foreground mb-1">
                                Número de Tarjeta *
                              </label>
                              <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                required
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="1234 5678 9012 3456"
                              />
                            </div>
                            <div>
                              <label htmlFor="cardName" className="block text-sm font-medium text-foreground mb-1">
                                Nombre en la Tarjeta *
                              </label>
                              <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                required
                                value={formData.cardName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="cardExpiry" className="block text-sm font-medium text-foreground mb-1">
                                  Fecha de Expiración *
                                </label>
                                <input
                                  type="text"
                                  id="cardExpiry"
                                  name="cardExpiry"
                                  required
                                  value={formData.cardExpiry}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="MM/AA"
                                />
                              </div>
                              <div>
                                <label htmlFor="cardCvc" className="block text-sm font-medium text-foreground mb-1">
                                  CVC *
                                </label>
                                <input
                                  type="text"
                                  id="cardCvc"
                                  name="cardCvc"
                                  required
                                  value={formData.cardCvc}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="123"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Back Button */}
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Volver a datos de envío
                        </button>
                      </div>
                    )}
                  </FadeIn>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <FadeIn delay={300}>
                    <div className="woocommerce-checkout-review-order bg-card rounded-2xl p-6 sticky top-24">
                      <h2 className="text-lg font-bold text-foreground mb-6">Tu Pedido</h2>

                      {/* Items */}
                      <div className="woocommerce-checkout-review-order-table space-y-4 mb-6 max-h-64 overflow-y-auto">
                        {items.map((item) => (
                          <div key={item.product.id} className="flex items-center gap-3">
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                              <Image
                                src={item.product.image}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                              />
                              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                                {item.quantity}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{item.product.name}</p>
                              <p className="text-xs text-muted-foreground">{item.product.weight}</p>
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Totals */}
                      <div className="space-y-3 mb-6 pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-foreground">
                          <span>Subtotal</span>
                          <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="flex items-center justify-between text-foreground">
                          <span>Envío</span>
                          <span className={shipping === 0 ? 'text-green-600' : ''}>
                            {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-border pt-4 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-foreground">Total</span>
                          <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">IVA incluido</p>
                      </div>

                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="place-order w-full py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Procesando...
                          </>
                        ) : step === 1 ? (
                          'Continuar al Pago'
                        ) : (
                          <>
                            <Lock className="w-4 h-4" />
                            Pagar {formatPrice(total)}
                          </>
                        )}
                      </button>

                      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Lock className="w-3 h-3" />
                        Pago seguro con encriptación SSL
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

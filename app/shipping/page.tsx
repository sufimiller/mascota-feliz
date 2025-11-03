'use client';

import Link from 'next/link';
import { ChevronRight, Truck, Clock, MapPin, Package, Shield, RefreshCcw } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';

const shippingOptions = [
  {
    icon: Truck,
    title: 'Envío Estándar',
    time: '2-4 días laborables',
    price: '4,99€',
    freeFrom: 'Gratis en pedidos +50€'
  },
  {
    icon: Clock,
    title: 'Envío Express',
    time: '24-48 horas',
    price: '9,99€',
    freeFrom: 'Gratis en pedidos +100€'
  },
  {
    icon: MapPin,
    title: 'Recogida en Punto',
    time: '3-5 días laborables',
    price: '2,99€',
    freeFrom: 'Gratis en pedidos +30€'
  }
];

export default function ShippingPage() {
  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-16" data-elementor-type="wp-page" data-elementor-id="16">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Envíos y Devoluciones</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="elementor-heading-title text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Envíos y Devoluciones
                </h1>
                <p className="text-muted-foreground text-lg">
                  Entrega rápida y segura a toda España. Envío gratuito en pedidos superiores a 50€.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="elementor-section py-12 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {shippingOptions.map((option, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 text-center h-full border border-border hover:border-primary transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-2">{option.time}</p>
                    <p className="text-xl font-bold text-primary mb-2">{option.price}</p>
                    <p className="text-sm text-green-600 font-medium">{option.freeFrom}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <section className="elementor-section py-12 md:py-16 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="bg-card rounded-2xl p-6 md:p-8 space-y-8">
                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Información de Envío
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Realizamos envíos a toda España peninsular, Baleares y Canarias. Los pedidos realizados antes de las 14:00h se procesan el mismo día laborable.
                      </p>
                      <h3 className="font-semibold text-foreground">Zonas de entrega:</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Península:</strong> 2-4 días laborables</li>
                        <li><strong>Baleares:</strong> 3-5 días laborables</li>
                        <li><strong>Canarias:</strong> 5-7 días laborables (gastos de aduana no incluidos)</li>
                        <li><strong>Ceuta y Melilla:</strong> 5-7 días laborables</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Seguimiento de Pedidos
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Una vez que tu pedido sea enviado, recibirás un email con el número de seguimiento para que puedas rastrear tu paquete en todo momento. También puedes acceder al seguimiento desde tu cuenta en nuestra web.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <RefreshCcw className="w-5 h-5 text-primary" />
                      Política de Devoluciones
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Tu satisfacción es nuestra prioridad. Si no estás conforme con tu compra, tienes 30 días desde la recepción para devolver los productos.
                      </p>
                      <h3 className="font-semibold text-foreground">Condiciones para devoluciones:</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>El producto debe estar sin abrir y en su embalaje original</li>
                        <li>Debes conservar el ticket o comprobante de compra</li>
                        <li>El producto no debe presentar daños causados por el cliente</li>
                        <li>Los productos perecederos no pueden ser devueltos una vez abiertos</li>
                      </ul>
                      <h3 className="font-semibold text-foreground mt-4">Proceso de devolución:</h3>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Contacta con nuestro servicio de atención al cliente</li>
                        <li>Recibirás una etiqueta de envío prepagada</li>
                        <li>Empaqueta el producto de forma segura</li>
                        <li>Deposita el paquete en el punto de recogida indicado</li>
                        <li>El reembolso se procesará en 14 días tras recibir el producto</li>
                      </ol>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">Cambios de Producto</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Si deseas cambiar un producto por otro diferente, te recomendamos realizar una devolución y efectuar un nuevo pedido. Así garantizamos el proceso más rápido y eficiente.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">Productos Dañados</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Si recibes un producto dañado o defectuoso, contáctanos inmediatamente con fotos del producto y el embalaje. Procederemos a enviarte un reemplazo sin coste adicional o te reembolsaremos el importe completo.
                      </p>
                    </div>
                  </section>

                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <p className="text-foreground mb-4">
                      ¿Tienes dudas sobre tu envío o devolución?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      Contactar con Soporte
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
// Repository timestamp marker: 2025-11-03.

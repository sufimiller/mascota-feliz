'use client';

import Link from 'next/link';
import { ChevronRight, RefreshCcw, Package, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';

export default function ReturnsPage() {
  return (
    <PageTransition>
      <div className="wp-block-post-content elementor" data-elementor-type="wp-page">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Devoluciones</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <RefreshCcw className="w-8 h-8 text-primary" />
                </div>
                <h1 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Política de Devoluciones
                </h1>
                <p className="text-muted-foreground text-lg">
                  En Mascota Feliz queremos que estés 100% satisfecho con tu compra. Si no es así, te lo ponemos fácil.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Process Steps */}
        <section className="elementor-section py-12 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">Proceso de Devolución</h2>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Package, title: '1. Solicita', desc: 'Contacta con nosotros en un plazo de 30 días desde la recepción' },
                { icon: RefreshCcw, title: '2. Prepara', desc: 'Empaqueta el producto en su embalaje original' },
                { icon: Clock, title: '3. Envía', desc: 'Te proporcionaremos una etiqueta de envío gratuita' },
                { icon: CheckCircle2, title: '4. Reembolso', desc: 'Procesamos el reembolso en 5-7 días hábiles' }
              ].map((step, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Details */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Condiciones de Devolución</h2>
                  
                  <div className="bg-card rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Productos Elegibles</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Productos sin abrir en su embalaje original
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Artículos en perfecto estado, sin daños ni uso
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Solicitud dentro de los 30 días desde la entrega
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Productos No Elegibles</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>- Alimentos abiertos o parcialmente consumidos</li>
                      <li>- Productos personalizados o bajo pedido especial</li>
                      <li>- Artículos dañados por mal uso del cliente</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Garantía de Satisfacción</h3>
                    <p className="text-muted-foreground mb-4">
                      Si tu mascota no acepta el alimento, te ofrecemos un cambio por otro producto o reembolso completo, incluso si el paquete está abierto (hasta un 50% consumido).
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                      Contactar Soporte <ArrowRight className="w-4 h-4" />
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

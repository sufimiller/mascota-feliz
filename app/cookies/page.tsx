'use client';

import Link from 'next/link';
import { ChevronRight, Cookie, Settings, BarChart, Shield } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';

export default function CookiesPage() {
  return (
    <PageTransition>
      <div className="wp-block-post-content elementor" data-elementor-type="wp-page">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Política de Cookies</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Cookie className="w-8 h-8 text-primary" />
                </div>
                <h1 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Política de Cookies
                </h1>
                <p className="text-muted-foreground text-lg">
                  Última actualización: Enero 2024
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="elementor-section py-12 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">Tipos de Cookies que Utilizamos</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { 
                  icon: Shield, 
                  title: 'Esenciales', 
                  desc: 'Necesarias para el funcionamiento básico del sitio web, como el carrito de compra y la autenticación.',
                  required: true
                },
                { 
                  icon: BarChart, 
                  title: 'Analíticas', 
                  desc: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio web de forma anónima.',
                  required: false
                },
                { 
                  icon: Settings, 
                  title: 'Preferencias', 
                  desc: 'Permiten recordar tus preferencias, como el idioma o la región.',
                  required: false
                }
              ].map((cookie, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <cookie.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{cookie.title}</h3>
                        {cookie.required && (
                          <span className="text-xs text-primary">Obligatorias</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{cookie.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <div className="prose prose-lg max-w-none space-y-8">
                  <div className="bg-card rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-4">¿Qué son las cookies?</h2>
                    <p className="text-muted-foreground">
                      Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                      Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para 
                      proporcionar información a los propietarios del sitio.
                    </p>
                  </div>

                  <div className="bg-card rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-4">¿Cómo utilizamos las cookies?</h2>
                    <p className="text-muted-foreground mb-4">
                      En Mascota Feliz utilizamos cookies para:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Mantener tu sesión activa mientras navegas</li>
                      <li>• Recordar los productos en tu carrito de compra</li>
                      <li>• Analizar el tráfico del sitio web de forma anónima</li>
                      <li>• Personalizar tu experiencia de navegación</li>
                      <li>• Recordar tus preferencias de cookies</li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-4">Gestionar tus preferencias</h2>
                    <p className="text-muted-foreground mb-4">
                      Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envía una cookie. 
                      Sin embargo, si desactivas las cookies, es posible que algunas partes del sitio web no funcionen correctamente.
                    </p>
                    <p className="text-muted-foreground">
                      La mayoría de los navegadores te permiten:
                    </p>
                    <ul className="mt-2 space-y-1 text-muted-foreground">
                      <li>• Ver las cookies almacenadas y eliminarlas individualmente</li>
                      <li>• Bloquear cookies de terceros</li>
                      <li>• Bloquear cookies de sitios específicos</li>
                      <li>• Bloquear todas las cookies</li>
                      <li>• Eliminar todas las cookies al cerrar el navegador</li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-4">Más información</h2>
                    <p className="text-muted-foreground">
                      Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en contactarnos a través de 
                      nuestro <Link href="/contact" className="text-primary hover:underline">formulario de contacto</Link> o 
                      enviando un email a <a href="mailto:privacidad@mascotafeliz.es" className="text-primary hover:underline">privacidad@mascotafeliz.es</a>.
                    </p>
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

'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-14" data-elementor-type="wp-page" data-elementor-id="14">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Política de Privacidad</span>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h1 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Política de Privacidad
                </h1>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Última actualización: Marzo 2024
                  </p>

                  <div className="bg-card rounded-2xl p-6 md:p-8 space-y-8">
                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">1. Información que Recopilamos</h2>
                      <p className="text-muted-foreground mb-4">
                        En Mascota Feliz, recopilamos información que usted nos proporciona directamente, como:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Información de contacto (nombre, email, teléfono, dirección)</li>
                        <li>Información de pago (datos de tarjeta de crédito procesados de forma segura)</li>
                        <li>Información de envío</li>
                        <li>Comunicaciones con nuestro equipo de soporte</li>
                        <li>Preferencias y feedback sobre nuestros productos</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">2. Cómo Usamos su Información</h2>
                      <p className="text-muted-foreground mb-4">
                        Utilizamos la información recopilada para:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Procesar y entregar sus pedidos</li>
                        <li>Enviar confirmaciones de pedido y actualizaciones de envío</li>
                        <li>Responder a sus consultas y proporcionar soporte al cliente</li>
                        <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
                        <li>Mejorar nuestros productos y servicios</li>
                        <li>Cumplir con obligaciones legales</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">3. Protección de Datos</h2>
                      <p className="text-muted-foreground">
                        Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos encriptación SSL para todas las transacciones y almacenamos los datos en servidores seguros ubicados en la Unión Europea.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">4. Cookies</h2>
                      <p className="text-muted-foreground mb-4">
                        Utilizamos cookies y tecnologías similares para:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Mantener su sesión activa mientras navega</li>
                        <li>Recordar sus preferencias</li>
                        <li>Analizar el tráfico del sitio web</li>
                        <li>Personalizar su experiencia de compra</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        Puede gestionar sus preferencias de cookies a través de su navegador.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">5. Sus Derechos</h2>
                      <p className="text-muted-foreground mb-4">
                        De acuerdo con el RGPD, usted tiene derecho a:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Acceder a sus datos personales</li>
                        <li>Rectificar datos inexactos</li>
                        <li>Solicitar la eliminación de sus datos</li>
                        <li>Oponerse al procesamiento de sus datos</li>
                        <li>Solicitar la portabilidad de sus datos</li>
                        <li>Retirar su consentimiento en cualquier momento</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">6. Compartición de Datos</h2>
                      <p className="text-muted-foreground">
                        No vendemos ni alquilamos su información personal. Compartimos datos únicamente con proveedores de servicios que nos ayudan a operar nuestro negocio (procesadores de pago, empresas de envío) y solo en la medida necesaria para proporcionar estos servicios.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">7. Retención de Datos</h2>
                      <p className="text-muted-foreground">
                        Conservamos su información personal durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Los datos de transacciones se conservan durante 5 años por requisitos fiscales.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">8. Contacto</h2>
                      <p className="text-muted-foreground mb-4">
                        Para cualquier consulta relacionada con la privacidad, puede contactarnos en:
                      </p>
                      <ul className="text-muted-foreground space-y-2">
                        <li>Email: privacidad@mascotafeliz.es</li>
                        <li>Teléfono: +34 900 123 456</li>
                        <li>Dirección: Calle Gran Vía 123, 28013 Madrid, España</li>
                      </ul>
                    </section>
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

'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-15" data-elementor-type="wp-page" data-elementor-id="15">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Términos y Condiciones</span>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h1 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Términos y Condiciones
                </h1>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Última actualización: Marzo 2024
                  </p>

                  <div className="bg-card rounded-2xl p-6 md:p-8 space-y-8">
                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">1. Aceptación de Términos</h2>
                      <p className="text-muted-foreground">
                        Al acceder y utilizar el sitio web de Mascota Feliz (mascotafeliz.es), usted acepta estar legalmente vinculado por estos términos y condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio web.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">2. Uso del Sitio Web</h2>
                      <p className="text-muted-foreground mb-4">
                        Usted se compromete a utilizar este sitio web únicamente para fines lícitos y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso del sitio por parte de otros usuarios. Queda prohibido:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Usar el sitio de manera fraudulenta o en conexión con actividades ilegales</li>
                        <li>Transmitir material que sea difamatorio, ofensivo o amenazante</li>
                        <li>Interferir con el funcionamiento del sitio web</li>
                        <li>Acceder sin autorización a nuestros sistemas informáticos</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">3. Productos y Precios</h2>
                      <p className="text-muted-foreground mb-4">
                        Todos los precios mostrados en el sitio web incluyen IVA. Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso. Los productos están sujetos a disponibilidad.
                      </p>
                      <p className="text-muted-foreground">
                        Nos esforzamos por mostrar los productos de manera precisa, pero no podemos garantizar que la visualización de colores en su dispositivo sea exacta.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">4. Proceso de Compra</h2>
                      <p className="text-muted-foreground mb-4">
                        Al realizar un pedido:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Confirma que es mayor de 18 años</li>
                        <li>Garantiza que la información proporcionada es verdadera y completa</li>
                        <li>Autoriza el cargo en el método de pago seleccionado</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        Nos reservamos el derecho de rechazar cualquier pedido por cualquier motivo.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">5. Envíos y Entregas</h2>
                      <p className="text-muted-foreground mb-4">
                        Los plazos de entrega indicados son estimaciones y pueden variar según la disponibilidad del producto y la ubicación de entrega. Mascota Feliz no será responsable de retrasos causados por circunstancias fuera de nuestro control.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Envío estándar: 2-4 días laborables</li>
                        <li>Envío express: 24-48 horas</li>
                        <li>Envío gratuito en pedidos superiores a 50€</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">6. Devoluciones y Reembolsos</h2>
                      <p className="text-muted-foreground mb-4">
                        Aceptamos devoluciones dentro de los 30 días siguientes a la recepción del pedido, siempre que:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>El producto esté sin abrir y en su embalaje original</li>
                        <li>Se presente el comprobante de compra</li>
                        <li>El producto no presente daños causados por el cliente</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        Los reembolsos se procesarán en un plazo de 14 días tras recibir el producto devuelto.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">7. Propiedad Intelectual</h2>
                      <p className="text-muted-foreground">
                        Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de Mascota Feliz o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">8. Limitación de Responsabilidad</h2>
                      <p className="text-muted-foreground">
                        Mascota Feliz no será responsable de daños indirectos, incidentales o consecuentes que resulten del uso de nuestros productos o sitio web. Nuestra responsabilidad máxima se limita al precio pagado por el producto en cuestión.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">9. Ley Aplicable</h2>
                      <p className="text-muted-foreground">
                        Estos términos y condiciones se rigen por las leyes de España. Cualquier disputa será sometida a la jurisdicción exclusiva de los tribunales de Madrid.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-foreground mb-4">10. Contacto</h2>
                      <p className="text-muted-foreground mb-4">
                        Para cualquier consulta sobre estos términos, puede contactarnos en:
                      </p>
                      <ul className="text-muted-foreground space-y-2">
                        <li>Email: legal@mascotafeliz.es</li>
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

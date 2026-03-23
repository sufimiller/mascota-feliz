'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Search, ShoppingCart, Truck, RefreshCcw, CreditCard, Dog, HelpCircle } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { cn } from '@/lib/utils';

const faqCategories = [
  {
    icon: ShoppingCart,
    title: 'Pedidos',
    faqs: [
      {
        question: '¿Cómo puedo realizar un pedido?',
        answer: 'Navega por nuestra tienda, añade los productos que desees al carrito y procede al checkout. Introduce tus datos de envío y pago, y confirma tu pedido. Recibirás un email de confirmación inmediatamente.'
      },
      {
        question: '¿Puedo modificar mi pedido después de realizarlo?',
        answer: 'Puedes modificar tu pedido dentro de las 2 primeras horas después de realizarlo, siempre que no haya sido procesado. Contacta con nuestro servicio de atención al cliente lo antes posible.'
      },
      {
        question: '¿Cómo puedo cancelar mi pedido?',
        answer: 'Si tu pedido aún no ha sido enviado, puedes cancelarlo contactando con nuestro equipo de soporte. Una vez enviado, tendrás que esperar a recibirlo y solicitar una devolución.'
      }
    ]
  },
  {
    icon: Truck,
    title: 'Envíos',
    faqs: [
      {
        question: '¿Cuánto tarda en llegar mi pedido?',
        answer: 'El envío estándar tarda 2-4 días laborables en península. Para Baleares 3-5 días y para Canarias 5-7 días. Los pedidos express se entregan en 24-48 horas.'
      },
      {
        question: '¿El envío es gratuito?',
        answer: 'Sí, el envío es gratuito para pedidos superiores a 50€ en península. Para pedidos menores, el coste es de 4,99€.'
      },
      {
        question: '¿Cómo puedo seguir mi pedido?',
        answer: 'Una vez enviado tu pedido, recibirás un email con el número de seguimiento y un enlace para rastrear tu envío en tiempo real.'
      },
      {
        question: '¿Realizan envíos a Canarias?',
        answer: 'Sí, realizamos envíos a Canarias, Ceuta y Melilla. Ten en cuenta que pueden aplicarse gastos de aduana que no están incluidos en el precio del envío.'
      }
    ]
  },
  {
    icon: RefreshCcw,
    title: 'Devoluciones',
    faqs: [
      {
        question: '¿Cuál es el plazo para devolver un producto?',
        answer: 'Dispones de 30 días desde la recepción del pedido para solicitar una devolución. El producto debe estar sin abrir y en su embalaje original.'
      },
      {
        question: '¿Cómo solicito una devolución?',
        answer: 'Contacta con nuestro servicio de atención al cliente indicando el número de pedido y el motivo de la devolución. Te enviaremos una etiqueta de envío prepagada.'
      },
      {
        question: '¿Cuándo recibiré mi reembolso?',
        answer: 'El reembolso se procesa en un plazo de 14 días desde que recibimos el producto devuelto. El dinero puede tardar 3-5 días adicionales en aparecer en tu cuenta.'
      }
    ]
  },
  {
    icon: CreditCard,
    title: 'Pagos',
    faqs: [
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal y Bizum.'
      },
      {
        question: '¿Es seguro pagar en vuestra web?',
        answer: 'Absolutamente. Utilizamos encriptación SSL y todos los pagos son procesados de forma segura. Nunca almacenamos los datos completos de tu tarjeta.'
      },
      {
        question: '¿Puedo pagar contra reembolso?',
        answer: 'Actualmente no ofrecemos la opción de pago contra reembolso. Todos los pagos deben realizarse online de forma anticipada.'
      }
    ]
  },
  {
    icon: Dog,
    title: 'Productos',
    faqs: [
      {
        question: '¿Los productos son de calidad premium?',
        answer: 'Sí, todos nuestros productos están formulados con ingredientes de alta calidad, seleccionados por veterinarios y nutricionistas especializados.'
      },
      {
        question: '¿Tienen productos para mascotas con alergias?',
        answer: 'Sí, disponemos de una línea de productos hipoalergénicos y fórmulas específicas para mascotas con intolerancias alimentarias.'
      },
      {
        question: '¿Cómo elijo el alimento adecuado para mi mascota?',
        answer: 'Puedes filtrar productos por tipo de mascota, edad y necesidades específicas. Si tienes dudas, contacta con nuestro equipo de nutricionistas que te asesorará gratuitamente.'
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-17" data-elementor-type="wp-page" data-elementor-id="17">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Preguntas Frecuentes</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="elementor-heading-title text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Preguntas Frecuentes
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  Encuentra respuestas a las preguntas más comunes sobre pedidos, envíos, devoluciones y productos.
                </p>
                
                {/* Search */}
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar en las preguntas frecuentes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="elementor-section py-12 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredCategories.length === 0 ? (
                <FadeIn>
                  <div className="text-center py-12 bg-card rounded-2xl">
                    <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No se encontraron resultados para tu búsqueda.</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-primary hover:underline"
                    >
                      Ver todas las preguntas
                    </button>
                  </div>
                </FadeIn>
              ) : (
                filteredCategories.map((category, catIndex) => (
                  <FadeIn key={catIndex} delay={catIndex * 100}>
                    <div className="bg-card rounded-2xl overflow-hidden">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 p-6 border-b border-border">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-bold text-foreground">{category.title}</h2>
                      </div>

                      {/* FAQs */}
                      <div className="divide-y divide-border">
                        {category.faqs.map((faq, faqIndex) => {
                          const key = `${catIndex}-${faqIndex}`;
                          const isExpanded = expandedItems[key];

                          return (
                            <div key={faqIndex} className="overflow-hidden">
                              <button
                                onClick={() => toggleItem(key)}
                                className="w-full p-4 md:p-6 text-left flex items-start justify-between gap-4 hover:bg-secondary/30 transition-colors"
                              >
                                <span className="font-medium text-foreground">{faq.question}</span>
                                <ChevronDown className={cn(
                                  'w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform',
                                  isExpanded && 'rotate-180'
                                )} />
                              </button>
                              <div className={cn(
                                'overflow-hidden transition-all duration-300',
                                isExpanded ? 'max-h-96' : 'max-h-0'
                              )}>
                                <p className="px-4 md:px-6 pb-4 md:pb-6 text-muted-foreground">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </FadeIn>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center bg-primary/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">¿No encuentras lo que buscas?</h2>
                <p className="text-muted-foreground mb-6">
                  Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier duda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Contactar
                  </Link>
                  <a
                    href="tel:+34900123456"
                    className="px-8 py-3 bg-card text-foreground rounded-full font-medium hover:bg-secondary transition-colors"
                  >
                    +34 900 123 456
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

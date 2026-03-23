'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, Check, MessageSquare, HelpCircle, Truck } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: ['Calle Gran Vía 123', '28013 Madrid, España']
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['+34 900 123 456', 'Lun-Vie 9:00-18:00']
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@mascotafeliz.es', 'soporte@mascotafeliz.es']
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: ['Lunes a Viernes: 9:00-18:00', 'Sábados: 10:00-14:00']
  }
];

const faqs = [
  {
    question: '¿Cuánto tarda el envío?',
    answer: 'Los pedidos se procesan en 24-48 horas. El envío estándar tarda 2-4 días laborables. Para envíos express, 24-48 horas.'
  },
  {
    question: '¿Puedo devolver un producto?',
    answer: 'Sí, aceptamos devoluciones en un plazo de 30 días desde la recepción. El producto debe estar sin abrir y en su embalaje original.'
  },
  {
    question: '¿Cómo puedo seguir mi pedido?',
    answer: 'Una vez enviado tu pedido, recibirás un email con el número de seguimiento y un enlace para rastrear tu envío en tiempo real.'
  },
  {
    question: '¿Tienen tienda física?',
    answer: 'Actualmente operamos exclusivamente online, lo que nos permite ofrecer los mejores precios y envío gratuito en pedidos superiores a 50€.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-13" data-elementor-type="wp-page" data-elementor-id="13">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Contacto</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="elementor-heading-title text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  ¿Cómo Podemos Ayudarte?
                </h1>
                <p className="text-muted-foreground text-lg">
                  Estamos aquí para resolver todas tus dudas. Contáctanos y te responderemos lo antes posible.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="elementor-section py-8 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((info, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="elementor-section py-12 md:py-16 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <FadeIn direction="left">
                <div className="bg-card rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Envíanos un Mensaje</h2>
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Mensaje Enviado</h3>
                      <p className="text-muted-foreground mb-6">
                        Gracias por contactarnos. Te responderemos en un plazo de 24-48 horas.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary hover:underline"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                            Nombre *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                            Asunto *
                          </label>
                          <select
                            id="subject"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Selecciona un asunto</option>
                            <option value="pedido">Consulta sobre pedido</option>
                            <option value="producto">Información de producto</option>
                            <option value="devolucion">Devolución</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                          Mensaje *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="¿En qué podemos ayudarte?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                      >
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>

              {/* Quick Help & Map */}
              <FadeIn direction="right" delay={100}>
                <div className="space-y-6">
                  {/* Quick Help */}
                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Ayuda Rápida</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <Link href="/categories" className="flex flex-col items-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-center">
                        <MessageSquare className="w-6 h-6 text-primary mb-2" />
                        <span className="text-sm text-foreground">Chat</span>
                      </Link>
                      <Link href="/faq" className="flex flex-col items-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-center">
                        <HelpCircle className="w-6 h-6 text-primary mb-2" />
                        <span className="text-sm text-foreground">FAQ</span>
                      </Link>
                      <Link href="/shipping" className="flex flex-col items-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-center">
                        <Truck className="w-6 h-6 text-primary mb-2" />
                        <span className="text-sm text-foreground">Envíos</span>
                      </Link>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="bg-card rounded-2xl overflow-hidden h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4232839094!2d-3.7055!3d40.4198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d5e5f3e27%3A0x5f0c3d4a5f4c5d0e!2sGran%20V%C3%ADa%2C%20Madrid!5e0!3m2!1ses!2ses!4v1635000000000!5m2!1ses!2ses"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Mascota Feliz"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="elementor-section py-12 md:py-16 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Preguntas Frecuentes</h2>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <div className="bg-card rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                    >
                      <span className="font-medium text-foreground">{faq.question}</span>
                      <ChevronRight className={cn(
                        'w-5 h-5 text-muted-foreground transition-transform',
                        expandedFaq === index && 'rotate-90'
                      )} />
                    </button>
                    <div className={cn(
                      'overflow-hidden transition-all duration-300',
                      expandedFaq === index ? 'max-h-40' : 'max-h-0'
                    )}>
                      <p className="p-4 pt-0 text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

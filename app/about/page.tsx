'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Heart, Shield, Leaf, Award, Users, Target, ArrowRight } from 'lucide-react';
import { PageTransition, FadeIn, CountUp } from '@/components/wordpress/transitions';

const values = [
  {
    icon: Heart,
    title: 'Amor por los Animales',
    description: 'Cada producto está creado pensando en el bienestar y la felicidad de tu mascota.'
  },
  {
    icon: Shield,
    title: 'Calidad Garantizada',
    description: 'Ingredientes de primera calidad, seleccionados y verificados por expertos veterinarios.'
  },
  {
    icon: Leaf,
    title: 'Natural y Sostenible',
    description: 'Comprometidos con el medio ambiente, utilizamos ingredientes naturales y envases reciclables.'
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Más de 10 años de experiencia nos avalan como líderes en nutrición premium para mascotas.'
  }
];

const team = [
  { name: 'Dr. María Fernández', role: 'Veterinaria Jefe', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'Carlos Rodríguez', role: 'Director de Calidad', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Ana García', role: 'Nutricionista Animal', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
  { name: 'Miguel Torres', role: 'Responsable de Producción', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="wp-block-post-content elementor elementor-12" data-elementor-type="wp-page" data-elementor-id="12">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Sobre Nosotros</span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="elementor-section relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1400&q=80"
              alt="Perro y gato felices"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          </div>
          <div className="elementor-container container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="max-w-2xl">
                <h1 className="elementor-heading-title text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 text-balance">
                  Nutrición Premium con Amor
                </h1>
                <p className="elementor-widget-text-editor text-lg md:text-xl text-card/90 mb-8">
                  En Mascota Feliz, creemos que cada mascota merece lo mejor. Por eso creamos alimentos de alta calidad que nutren, satisfacen y hacen felices a tus compañeros peludos.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="elementor-section py-16 md:py-24 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="elementor-row grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                    alt="Perro feliz"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={100}>
                <div>
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">Nuestra Historia</span>
                  <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                    Más de una Década de Compromiso
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Mascota Feliz nació en 2014 con una misión clara: ofrecer la mejor nutrición posible para perros y gatos en España. Fundada por un grupo de veterinarios y amantes de los animales, nuestra empresa ha crecido hasta convertirse en una referencia en alimentación premium para mascotas.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Todo comenzó cuando nuestra fundadora, la Dra. María Fernández, notó que muchos de sus pacientes sufrían problemas de salud relacionados con una alimentación de baja calidad. Decidió crear una línea de productos que combinara lo mejor de la ciencia nutricional con ingredientes naturales de primera calidad.
                  </p>
                  <p className="text-muted-foreground">
                    Hoy, más de 50.000 mascotas disfrutan de nuestros productos cada día, y seguimos comprometidos con la misma visión que nos impulsó desde el principio.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="elementor-section py-16 md:py-24 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Nuestros Valores</span>
                <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Lo Que Nos Define
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="elementor-widget-icon-box bg-card rounded-2xl p-6 h-full text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="elementor-section py-16 md:py-20 bg-primary">
          <div className="elementor-container container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 50000, suffix: '+', label: 'Mascotas Felices' },
                { value: 10, suffix: '+', label: 'Años de Experiencia' },
                { value: 150, suffix: '+', label: 'Productos' },
                { value: 98, suffix: '%', label: 'Satisfacción' }
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl font-bold text-card">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </span>
                    <p className="text-card/80 mt-2">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="elementor-section py-16 md:py-24 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="bg-card rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Misión</h3>
                  <p className="text-muted-foreground">
                    Proporcionar a cada mascota la nutrición de calidad que merece, utilizando ingredientes naturales y fórmulas científicamente desarrolladas. Creemos que una buena alimentación es la base de una vida larga y saludable.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="bg-card rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Visión</h3>
                  <p className="text-muted-foreground">
                    Ser la marca de referencia en nutrición premium para mascotas en España y Europa, reconocida por nuestra calidad, innovación y compromiso con el bienestar animal. Queremos que cada hogar con mascota confíe en Mascota Feliz.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="elementor-section py-16 md:py-24 bg-secondary/30">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Nuestro Equipo</span>
                <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Expertos en Nutrición Animal
                </h2>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card rounded-2xl overflow-hidden text-center">
                    <div className="relative aspect-square">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="elementor-section py-16 md:py-24 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="elementor-heading-title text-3xl md:text-4xl font-bold text-foreground mb-6">
                  ¿Listo para Darle lo Mejor a tu Mascota?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Explora nuestra selección de productos premium y descubre por qué miles de mascotas confían en Mascota Feliz.
                </p>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:gap-3"
                >
                  Explorar Productos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

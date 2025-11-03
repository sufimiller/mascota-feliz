import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, Award } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="elementor-section elementor-section-full_width elementor-top-section bg-foreground text-background">
      {/* Trust Badges */}
      <div className="elementor-container elementor-column-gap-default border-b border-background/10">
        <div className="elementor-widget-wrap elementor-element-populated max-w-7xl mx-auto px-4 py-8">
          <div className="elementor-widget elementor-widget-icon-box grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="elementor-icon-box-wrapper flex flex-col items-center text-center gap-3">
              <div className="elementor-icon-box-icon w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div className="elementor-icon-box-content">
                <h4 className="elementor-icon-box-title text-sm font-semibold text-background">Envío Gratis</h4>
                <p className="elementor-icon-box-description text-xs text-background/60">En pedidos +49€</p>
              </div>
            </div>
            <div className="elementor-icon-box-wrapper flex flex-col items-center text-center gap-3">
              <div className="elementor-icon-box-icon w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="elementor-icon-box-content">
                <h4 className="elementor-icon-box-title text-sm font-semibold text-background">Pago Seguro</h4>
                <p className="elementor-icon-box-description text-xs text-background/60">Encriptación SSL</p>
              </div>
            </div>
            <div className="elementor-icon-box-wrapper flex flex-col items-center text-center gap-3">
              <div className="elementor-icon-box-icon w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="elementor-icon-box-content">
                <h4 className="elementor-icon-box-title text-sm font-semibold text-background">Calidad Premium</h4>
                <p className="elementor-icon-box-description text-xs text-background/60">Ingredientes selectos</p>
              </div>
            </div>
            <div className="elementor-icon-box-wrapper flex flex-col items-center text-center gap-3">
              <div className="elementor-icon-box-icon w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div className="elementor-icon-box-content">
                <h4 className="elementor-icon-box-title text-sm font-semibold text-background">Devolución Fácil</h4>
                <p className="elementor-icon-box-description text-xs text-background/60">30 días garantía</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-widget-wrap elementor-element-populated max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="elementor-widget elementor-widget-text-editor grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="elementor-text-editor">
              <div className="wp-block-group flex items-center gap-2 mb-4">
                <div className="w-10 h-10 relative flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Mascota Feliz Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="elementor-heading-title text-lg font-bold text-background">Mascota Feliz</h3>
                  <p className="text-xs text-background/60">Nutricion Premium</p>
                </div>
              </div>
              <p className="elementor-widget-text text-sm text-background/70 mb-4 leading-relaxed">
                Tu tienda de confianza para la nutrición de tus mascotas. Productos premium elaborados con ingredientes naturales de la más alta calidad.
              </p>
              <div className="wp-block-social-links flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="wp-social-link w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="wp-social-link w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="wp-social-link w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="wp-social-link w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="elementor-text-editor">
              <h4 className="elementor-heading-title text-sm font-semibold text-background uppercase tracking-wider mb-4">
                Enlaces Rápidos
              </h4>
              <nav className="wp-block-navigation flex flex-col gap-2">
                <Link href="/" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link href="/categories" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Todas las Categorías
                </Link>
                <Link href="/categories?type=dog" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Comida para Perros
                </Link>
                <Link href="/categories?type=cat" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Comida para Gatos
                </Link>
                <Link href="/about" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
                <Link href="/contact" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </nav>
            </div>

            {/* Help */}
            <div className="elementor-text-editor">
              <h4 className="elementor-heading-title text-sm font-semibold text-background uppercase tracking-wider mb-4">
                Ayuda
              </h4>
              <nav className="wp-block-navigation flex flex-col gap-2">
                <Link href="/faq" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
                <Link href="/shipping" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Envíos y Entregas
                </Link>
                <Link href="/returns" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Devoluciones
                </Link>
                <Link href="/privacy" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="/terms" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
                <Link href="/cookies" className="wp-block-navigation-item__content text-sm text-background/70 hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="elementor-text-editor">
              <h4 className="elementor-heading-title text-sm font-semibold text-background uppercase tracking-wider mb-4">
                Contacto
              </h4>
              <div className="wp-block-group flex flex-col gap-3">
                <a href="tel:+34912345678" className="wp-block-social-link flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  +34 912 345 678
                </a>
                <a href="mailto:info@mascotafeliz.es" className="wp-block-social-link flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  info@mascotafeliz.es
                </a>
                <div className="wp-block-social-link flex items-start gap-3 text-sm text-background/70">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Calle Gran Vía 123,<br />28013 Madrid, España</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="wp-block-group mt-6">
                <h5 className="text-sm font-medium text-background mb-2">Newsletter</h5>
                <form className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="wp-block-search__input w-full px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="wp-block-button__link w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Unirse
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="elementor-container elementor-column-gap-default border-t border-background/10">
        <div className="elementor-widget-wrap elementor-element-populated max-w-7xl mx-auto px-4 py-6">
          <div className="elementor-widget elementor-widget-text-editor flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="elementor-widget-text text-sm text-background/60">
              © {currentYear} Mascota Feliz. Todos los derechos reservados.
            </p>
            <div className="wp-block-group flex items-center gap-4">
              <span className="text-xs text-background/40">Métodos de pago:</span>
              <div className="flex items-center gap-2">
                <div className="w-10 h-6 bg-background/10 rounded flex items-center justify-center text-xs font-bold text-background/60">VISA</div>
                <div className="w-10 h-6 bg-background/10 rounded flex items-center justify-center text-xs font-bold text-background/60">MC</div>
                <div className="w-10 h-6 bg-background/10 rounded flex items-center justify-center text-xs font-bold text-background/60">PP</div>
                <div className="w-10 h-6 bg-background/10 rounded flex items-center justify-center text-xs font-bold text-background/60">AP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
// Repository timestamp marker: 2025-11-03.

import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { Header } from '@/components/wordpress/header'
import { Footer } from '@/components/wordpress/footer'
import { CartDrawer } from '@/components/wordpress/cart-drawer'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Mascota Feliz - Nutrición Premium para Mascotas | Tienda Online',
  description: 'Alimento natural de alta calidad para perros y gatos. Nutrición premium con ingredientes 100% naturales. Envío gratis en pedidos +50€.',
  keywords: 'comida para perros, comida para gatos, alimento premium mascotas, nutrición natural mascotas, tienda mascotas online',
  authors: [{ name: 'Mascota Feliz' }],
  creator: 'Mascota Feliz',
  publisher: 'Mascota Feliz',
  generator: 'WordPress 6.5.2',
  applicationName: 'Mascota Feliz',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Mascota Feliz - Nutrición Premium para Mascotas',
    description: 'Alimento natural de alta calidad para perros y gatos. Ingredientes 100% naturales.',
    url: 'https://mascotafeliz.es',
    siteName: 'Mascota Feliz',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mascota Feliz - Nutrición Premium para Mascotas',
    description: 'Alimento natural de alta calidad para perros y gatos.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://raw.githubusercontent.com/sufiprog/logo/refs/heads/main/Untitled%20design.png',
    shortcut: 'https://raw.githubusercontent.com/sufiprog/logo/refs/heads/main/Untitled%20design.png',
    apple: 'https://raw.githubusercontent.com/sufiprog/logo/refs/heads/main/Untitled%20design.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#e8a4b8',
    'theme-color': '#ffffff',
    'woocommerce': 'true',
    'elementor': 'true',
    'wordpress': 'true',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        {/* WordPress/Elementor Meta Tags for disguise */}
        <meta name="generator" content="WordPress 6.5.2" />
        <meta name="generator" content="Elementor 3.21.4; features: e_optimized_assets_loading, additional_custom_breakpoints, e_swiper_latest; settings: css_print_method-external, google_font-enabled, font_display-swap" />
        <meta name="generator" content="WooCommerce 8.8.3" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//s.w.org" />
        <link rel="alternate" type="application/rss+xml" title="Mascota Feliz Feed" href="/feed/" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body 
        className="wp-site-blocks woocommerce woocommerce-page elementor-default elementor-kit-5 font-sans antialiased"
        data-elementor-device-mode="desktop"
      >
        {/* WordPress Body Classes */}
        <div id="page" className="site wp-site-blocks">
          <CartProvider>
            <Header />
            <main id="primary" className="site-main woocommerce-content">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </div>
        <Analytics />
        {/* WordPress Scripts Placeholder */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Mascota Feliz",
              "description": "Tienda online de nutrición premium para mascotas",
              "url": "https://mascotafeliz.es",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressCountry": "ES"
              }
            })
          }}
        />
      </body>
    </html>
  )
}

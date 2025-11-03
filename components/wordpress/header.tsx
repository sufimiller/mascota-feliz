'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, Search, User, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { 
      href: '/categories', 
      label: 'Categorías',
      submenu: [
        { href: '/categories?type=dog', label: 'Perros' },
        { href: '/categories?type=cat', label: 'Gatos' },
      ]
    },
    { href: '/about', label: 'Nosotros' },
    { href: '/contact', label: 'Contacto' },
  ];

  return (
    <>
      {/* WordPress-style announcement bar */}
      <div className="elementor-section elementor-section-full_width elementor-top-section bg-primary text-primary-foreground">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-widget-wrap elementor-element-populated flex items-center justify-center py-2 px-4 text-sm">
            <span className="elementor-heading-title">Envío gratis en pedidos superiores a 49€ | Entrega en 24-48h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'elementor-section elementor-section-full_width sticky top-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-card/95 backdrop-blur-md shadow-sm' 
            : 'bg-card'
        )}
      >
        <div className="elementor-container elementor-column-gap-default max-w-7xl mx-auto">
          <div className="elementor-widget-wrap elementor-element-populated flex items-center justify-between px-4 py-4 lg:py-5">
            {/* Logo */}
            <Link 
              href="/" 
              className="elementor-widget elementor-widget-theme-site-logo flex items-center gap-2 transition-transform hover:scale-105"
            >
              <div className="wp-image-logo flex items-center gap-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Mascota Feliz Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="elementor-heading-title text-lg lg:text-xl font-bold text-foreground leading-tight">
                    Mascota Feliz
                  </h1>
                  <p className="text-xs text-muted-foreground">Nutricion Premium</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="elementor-widget elementor-widget-nav-menu hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="elementor-nav-menu--main relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      'elementor-item elementor-item-anchor flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2',
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    )}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {link.submenu && (
                    <div className="elementor-nav-menu--dropdown absolute top-full left-0 mt-2 bg-card rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px]">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="elementor-sub-item block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="elementor-widget elementor-widget-icon-list flex items-center gap-2 lg:gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="elementor-icon-list-item p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5 text-foreground" />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="elementor-icon-list-item hidden sm:flex p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Lista de deseos"
              >
                <Heart className="w-5 h-5 text-foreground" />
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="elementor-icon-list-item hidden sm:flex p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Mi cuenta"
              >
                <User className="w-5 h-5 text-foreground" />
              </Link>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="elementor-icon-list-item relative p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Carrito"
              >
                <ShoppingCart className="w-5 h-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-in zoom-in duration-200">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="elementor-menu-toggle lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Menú"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={cn(
              'elementor-search-form overflow-hidden transition-all duration-300 px-4',
              isSearchOpen ? 'max-h-20 pb-4' : 'max-h-0'
            )}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="elementor-search-form__input w-full px-4 py-3 pl-12 rounded-full bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'elementor-nav-menu--dropdown lg:hidden bg-card border-t border-border overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <nav className="elementor-widget elementor-widget-nav-menu px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'elementor-item elementor-item-anchor px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary'
                  )}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 flex flex-col gap-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="elementor-sub-item px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="flex gap-4 px-4 py-3 border-t border-border mt-2">
              <Link
                href="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <Heart className="w-4 h-4" /> Favoritos
              </Link>
              <Link
                href="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <User className="w-4 h-4" /> Mi Cuenta
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
// Repository timestamp marker: 2025-11-03.

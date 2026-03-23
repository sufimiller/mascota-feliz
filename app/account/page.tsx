'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, User, Mail, Lock, Eye, EyeOff, ArrowRight, ShoppingBag } from 'lucide-react';
import { PageTransition, FadeIn } from '@/components/wordpress/transitions';
import { cn } from '@/lib/utils';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/register - in a real app this would connect to auth
    alert(isLogin ? 'Demo: Login no implementado' : 'Demo: Registro no implementado');
  };

  return (
    <PageTransition>
      <div className="wp-block-post-content elementor woocommerce-account" data-elementor-type="wp-page">
        {/* Breadcrumb */}
        <section className="elementor-section woocommerce-breadcrumb bg-secondary/50 py-4">
          <div className="elementor-container container mx-auto px-4">
            <nav className="woocommerce-breadcrumb flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Mi Cuenta</span>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="elementor-section py-12 md:py-24 bg-background">
          <div className="elementor-container container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <FadeIn>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-2xl font-bold text-foreground">
                    {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                  </h1>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="bg-card rounded-2xl p-6 md:p-8">
                  {/* Toggle */}
                  <div className="flex bg-secondary rounded-full p-1 mb-6">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={cn(
                        'flex-1 py-2.5 rounded-full text-sm font-medium transition-colors',
                        isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      Iniciar Sesión
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={cn(
                        'flex-1 py-2.5 rounded-full text-sm font-medium transition-colors',
                        !isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      Registrarse
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                          Nombre completo
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Correo electrónico
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                        Contraseña
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          required
                          value={formData.password}
                          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                          className="w-full pl-12 pr-12 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="********"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {!isLogin && (
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-1">
                          Confirmar contraseña
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="********"
                          />
                        </div>
                      </div>
                    )}

                    {isLogin && (
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-muted-foreground">Recordarme</span>
                        </label>
                        <button type="button" className="text-primary hover:underline">
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-card px-4 text-muted-foreground">o continúa con</span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-sm font-medium">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-sm font-medium">Facebook</span>
                    </button>
                  </div>
                </div>
              </FadeIn>

              {/* Guest Checkout */}
              <FadeIn delay={200}>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">¿No quieres crear una cuenta?</p>
                  <Link
                    href="/categories"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Comprar como invitado
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

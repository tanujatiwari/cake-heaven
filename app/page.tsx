"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useToast } from "./contexts/ToastContext";
import { BENTO_ITEMS, TRUSTED_AVATARS } from "./utils/constants";
import { validateNewsletterForm } from "./utils/schemas";
import { cn } from "./utils/helpers";

export default function Home() {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    
    const validation = validateNewsletterForm(email);
    if (!validation.isValid) {
      setEmailError(validation.errors.email);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      showToast("Thank you for joining our atelier! We'll keep you updated on seasonal releases.", "success");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="flex-grow">
          {/* Split-Screen Hero Section */}
          <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden reveal">
             {/* Left: High-Quality Vertical Narrative Image */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
              <div
                className="absolute inset-0 bg-cover bg-center split-image-mask"
                style={{
                  backgroundImage:
                    "url(https://domesticgothess.com/wp-content/uploads/2018/03/raspberry-coconut-and-lemon-layer-cake.jpg)",
                    // "url(https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply md:hidden" />
            </div>
            {/* Right: Warm, Text-Rich Introduction */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-margin-desktop bg-surface-container-low">
              <div className="max-w-xl space-y-stack-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-variant rounded-full text-primary">
                  <span className="material-symbols-outlined text-[18px]">temp_preferences_custom</span>
                  <span className="font-label-md text-xs uppercase tracking-widest font-semibold">Est. 1994</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                  The Art of <br /> <span className="italic font-normal">Slow Baking</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  At Cake Heaven, we believe time is our most vital ingredient. Our signature sourdough starters have been nurtured for three decades, and our pastries are laminated over forty-eight hours to achieve the perfect, honey-combed crumb.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant/80 border-l-2 border-secondary/30 pl-4">
                  We reject the rush of the modern world in favor of artisanal precision. From our hand-painted wedding cakes to the simplest butter croissant, every creation is a testament to the beauty of patient craftsmanship.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/gallery">
                    <Button variant="primary" size="lg" icon="arrow_forward" iconPosition="right">
                      Explore Menu
                    </Button>
                  </Link>
                  <Link href="/contact?type=booking">
                    <Button variant="secondary" size="lg">
                      Schedule a Meeting
                    </Button>
                  </Link>
                </div>
                
                <div className="pt-8 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {TRUSTED_AVATARS.map((avatar, idx) => (
                      <div key={idx} className="w-10 h-10 rounded-full border-2 border-surface bg-slate-200 overflow-hidden relative">
                        <img src={avatar} alt={`Customer testimonial ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-label-md text-on-surface-variant">
                    Trusted by <span className="font-bold text-primary">500+</span> regular connoisseurs
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Signature Collections Bento Grid */}
          <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto reveal">
            <div className="text-center mb-stack-lg">
              <h2 className="font-display text-3xl md:text-4xl text-primary">Our Signature Collections</h2>
              <div className="h-1 w-12 bg-secondary mx-auto mt-3" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {BENTO_ITEMS.map((item) => {
                const colSpanClass = item.colspan === 8 ? "md:col-span-8" : "md:col-span-4";
                
                if (item.image) {
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        colSpanClass,
                        "group relative overflow-hidden rounded-xl h-[350px] md:h-[400px] shadow-sm hover:shadow-md transition-all duration-300"
                      )}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-8 text-white z-10 w-full">
                        {item.badge && (
                          <span className="bg-secondary px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-3 inline-block">
                            {item.badge}
                          </span>
                        )}
                        <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
                        <p className="font-body-md text-white/80 text-sm mt-2">{item.description}</p>
                        
                        {item.actionText && (
                          <Link href={item.actionHref || "#"} className="mt-4 inline-block">
                            <Button variant="secondary" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                              {item.actionText}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                }

                // If text card
                return (
                  <div
                    key={item.id}
                    className={cn(
                      colSpanClass,
                      item.bgClass,
                      "rounded-xl p-8 flex flex-col justify-between shadow-sm border border-outline-variant/30"
                    )}
                  >
                    <div>
                      {item.icon && (
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">{item.icon}</span>
                      )}
                      <h3 className="font-display text-2xl text-primary mb-4">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">{item.description}</p>
                    </div>
                    {item.actionText && (
                      <Link href={item.actionHref || "#"} className="text-primary font-label-md flex items-center gap-2 hover:translate-x-2 transition-transform mt-6">
                        {item.actionText} <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="bg-surface-container py-stack-lg border-y border-outline-variant/20 reveal">
            <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-stack-lg">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl text-primary">A Visual Journey of Sweetness</h2>
                <div className="h-0.5 w-12 bg-secondary" />
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Browse through our curated collection of custom milestone cakes, flaky laminated pastries, and indulgent sea salt cookies. Each creation is handcrafted with love and baked daily to absolute perfection.
                </p>
                <div className="pt-4">
                  <Link href="/gallery">
                    <Button variant="primary" size="lg" icon="arrow_forward" iconPosition="right">
                      View Full Gallery
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden aspect-square shadow-lg transform translate-y-4">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80"
                    alt="Anniversary Chocolate Cake"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square shadow-lg">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80"
                    alt="Artisanal Layered Cake"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter / Contact Teaser */}
          <section className="py-24 px-margin-mobile md:px-margin-desktop text-center reveal">
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="text-secondary font-label-md text-xs uppercase tracking-[0.2em] font-semibold">Join the Atelier</span>
              <h2 className="font-display text-3xl md:text-4xl text-primary">Be the first to taste our seasonal releases.</h2>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-start max-w-lg mx-auto pt-4">
                <div className="w-full">
                  <Input
                    label="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                  />
                </div>
                <Button variant="primary" type="submit" size="md" isLoading={isSubmitting} className="w-full sm:w-auto shrink-0 py-3 px-8 mt-2 sm:mt-0">
                  Subscribe
                </Button>
              </form>
              <p className="text-[11px] text-on-surface-variant/80 font-body-md pt-4">
                By subscribing, you agree to our Privacy Policy and to receive seasonal notifications.
              </p>
            </div>
          </section>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}

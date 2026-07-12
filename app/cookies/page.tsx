"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { useToast } from "../contexts/ToastContext";
import { PRODUCTS, Product } from "../utils/constants";
import { validateNewsletterForm } from "../utils/schemas";
import { formatPrice } from "../utils/helpers";

export default function CookiesPage() {
  const { showToast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSubFilter, setActiveSubFilter] = useState("all");

  const cookies = PRODUCTS.filter((p) => p.category === "cookies");
  const filteredCookies = activeSubFilter === "all"
    ? cookies
    : cookies.filter((p) => p.subCategory === activeSubFilter);

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
      showToast("You've subscribed to the secret menu! Watch your inbox for cookies & bread drop notifications.", "success");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const featuredCookie = {
    id: "country-sourdough",
    name: "Country Sourdough Boule",
    price: 250,
    category: "cookies" as const,
    description: "36-hour slow fermented wild yeast sourdough with a dark, blistered crust and open crumb. Freshly baked at 5:00 AM daily.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200",
    tags: ["Sourdough", "Wild Yeast", "Organic", "Bestseller"]
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <header className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-16 text-center reveal">
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-6">Craft Cookies &amp; Fresh Bread</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Freshly baked sourdough boules, braided challah, and gourmet soft cookies baked from scratch every single day.
          </p>
        </header>

        {/* Featured Highlight Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 reveal">
          <div className="relative group overflow-hidden rounded-2xl shadow-ambient bg-surface-container-low h-[450px] md:h-[600px] flex items-end">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-103"
              style={{ backgroundImage: `url(${featuredCookie.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="relative p-8 md:p-12 z-20 text-white max-w-xl">
              <span className="font-label-md text-[10px] uppercase tracking-widest mb-3 inline-block opacity-80 font-bold">
                Featured Selection
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">{featuredCookie.name}</h2>
              <p className="font-body-md text-sm md:text-base opacity-90 mb-6 leading-relaxed">
                {featuredCookie.description}
              </p>
              <Button
                variant="secondary"
                className="bg-white text-primary border-white hover:bg-surface hover:text-secondary font-bold"
                onClick={() => setSelectedProduct(featuredCookie)}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Main Product Grid */}
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 reveal">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6 border-b border-outline-variant/20 pb-4">
            <div>
              <h3 className="font-display text-3xl text-primary mb-1">Our Cookies &amp; Bread</h3>
              <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
                Oven-Fresh Craft Baking
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: "All Items", value: "all" },
                { label: "Bread", value: "bread" },
                { label: "Cookies", value: "cookies" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveSubFilter(tab.value)}
                  className={`font-label-md py-1.5 px-4 rounded-full cursor-pointer transition-all border text-xs ${
                    activeSubFilter === tab.value
                      ? "bg-primary text-on-primary border-primary font-bold shadow-sm"
                      : "bg-surface text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
            {filteredCookies.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                tags={product.tags}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </main>

        {/* Newsletter Section */}
        <section className="bg-surface-container-low py-24 mt-20 border-t border-outline-variant/20 reveal">
          <div className="max-w-[700px] mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h2 className="font-display text-3xl text-primary mb-4">Join Our Secret Menu</h2>
            <p className="font-body-md text-on-surface-variant text-sm mb-10 leading-relaxed max-w-lg mx-auto">
              Get early access to seasonal collection drops and invitation-only tasting events at our boutique kitchen.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-start max-w-md mx-auto">
              <div className="w-full">
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                />
              </div>
              <Button variant="dark" type="submit" size="md" isLoading={isSubmitting} className="w-full sm:w-auto shrink-0 py-3.5 px-8 mt-2 sm:mt-0 shadow-md">
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        {/* Detail Modal */}
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct?.name}
        >
          {selectedProduct && (
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-sm">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-between items-baseline">
                <span className="bg-surface-variant text-primary text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-outline-variant/30">
                  {selectedProduct.category}
                </span>
                <span className="font-display text-2xl text-primary font-semibold">
                  {formatPrice(selectedProduct.price)}
                </span>
              </div>

              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {selectedProduct.description}
              </p>

              {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProduct.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container text-on-surface-variant text-xs px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-outline-variant/20 flex gap-4">
                <Link href={`/contact?type=order&item=${selectedProduct.id}`} className="w-full">
                  <Button variant="primary" className="w-full py-3">
                    Inquire About This Item
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Modal>
      </PageWrapper>
      <Footer />
    </>
  );
}

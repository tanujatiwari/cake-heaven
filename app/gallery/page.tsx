"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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

function GalleryContent() {
  const { showToast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryParam = searchParams.get("category");
  const selectedCategory = (categoryParam && ["cakes", "pastries", "cookies", "gifts"].includes(categoryParam))
    ? categoryParam
    : "all";

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      router.push("/gallery", { scroll: false });
    } else {
      router.push(`/gallery?category=${category}`, { scroll: false });
    }
  };

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
      showToast("You've subscribed to the secret menu! Watch your inbox for drops.", "success");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Main Product Grid */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 reveal">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6 border-b border-outline-variant/20 pb-4">
          <div>
            <h3 className="font-display text-3xl text-primary mb-1">The Full Collection</h3>
            <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
              Refined Patisserie
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {(["all", "cakes", "pastries", "cookies"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-label-md py-1 capitalize border-b-2 transition-all duration-200 cursor-pointer ${selectedCategory === cat
                  ? "text-primary border-primary font-bold"
                  : "text-on-surface-variant/80 border-transparent hover:text-primary"
                  }`}
              >
                {cat === "all" ? "All Items" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/50 mb-3">inventory_2</span>
            <p className="font-body-lg text-on-surface-variant font-medium">No items available in this category yet.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-gutter space-y-6">
            {filteredProducts.map((product, idx) => {
              const aspectRatios = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[4/3]"];
              const aspect = aspectRatios[idx % aspectRatios.length];
              return (
                <div key={product.id} className="break-inside-avoid mb-8">
                  <Card
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    tags={product.tags}
                    aspectRatio={aspect}
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Refined CTA Section */}
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

      {/* Product Detail Modal */}
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
    </>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <header className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-16 text-center reveal">
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-6">Our Curated Gallery</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A celebration of artisanal craftsmanship. Each creation is handcrafted daily using premium organic ingredients and local wildflower honey.
          </p>
        </header>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary" />
            </div>
          }
        >
          <GalleryContent />
        </Suspense>
      </PageWrapper>
      <Footer />
    </>
  );
}

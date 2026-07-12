"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { Button } from "../components/Button";
import { STORY_PILLARS } from "../utils/constants";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="flex-grow">
          {/* Section 1: Hero */}
          <section className="relative h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden reveal">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              />
              <div className="absolute inset-0 bg-primary/25 backdrop-brightness-95" />
            </div>
            <div className="relative z-10 text-center px-margin-mobile">
              <p className="font-label-md text-label-md text-surface uppercase tracking-[0.2em] mb-4 font-semibold">
                Est. 1994
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-surface text-shadow-sm max-w-3xl mx-auto leading-tight">
                The Art of <span className="italic font-normal">Patience</span> &amp; Flour
              </h1>
            </div>
          </section>

          {/* Section 2: Narrative "Our Story" */}
          <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl text-primary">Our Story</h2>
                <div className="h-1 w-12 bg-secondary mb-8" />
                
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  For over three decades, Cake Heaven has stood as a quiet sanctuary for those who appreciate the poetry of a slow fermentation and the honest weight of a handcrafted loaf. Founded in the hills by Julian Vane, our bakery operates on a singular, unwavering principle: that true quality cannot be rushed.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed italic border-l-2 border-secondary/35 pl-4">
                  &quot;The dough is a living thing,&quot; Julian often says. &quot;It breathes, it matures, and it remembers. If you treat it with respect, it rewards you with flavor that time alone can unlock.&quot;
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Our 30-year heritage is woven into every starter and every crust. We embrace the &quot;slow-bake&quot; philosophy—not as a marketing term, but as a daily meditation on the relationship between earth, hand, and oven.
                </p>
              </div>
              <div className="order-1 md:order-2 h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-lifted">
                <img
                  src="https://www.restaurants.co.za/images/news/full/image_1686309775.jpg"
                  alt="Baker kneading sourdough"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Process & Values */}
          <section className="bg-surface-container-low py-24 px-margin-mobile md:px-margin-desktop reveal">
            <div className="max-w-container-max mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">The Pillars of our Atelier</h2>
                <div className="w-16 h-[2px] bg-honey-gold mx-auto" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {STORY_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-surface shadow-sm">
                      <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                    </div>
                    <h3 className="font-display text-xl text-primary mb-4">{pillar.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: "The Atelier" (Full width quote) */}
          <section className="relative py-32 md:py-48 flex items-center justify-center text-center overflow-hidden reveal">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-fixed bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-primary/45 backdrop-blur-[1px]" />
            </div>
            <div className="relative z-10 px-margin-mobile">
              <div className="mb-8 flex justify-center">
                <span className="material-symbols-outlined text-surface text-5xl opacity-40">format_quote</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-surface italic font-normal max-w-4xl mx-auto leading-tight">
                &quot;We don&apos;t just bake; we compose <span className="font-bold not-italic">edible poetry</span>.&quot;
              </h2>
              <p className="font-label-md text-label-md text-surface uppercase mt-12 tracking-[0.3em] font-semibold">
                The Cake Heaven Promise
              </p>
            </div>
          </section>

          {/* Section 5: Call to Action */}
          <section className="py-24 px-margin-mobile flex flex-col items-center text-center reveal">
            <h3 className="font-display text-3xl text-primary mb-8">Experience the Collection</h3>
            <Link href="/gallery">
              <Button variant="primary" size="lg" icon="arrow_forward" iconPosition="right">
                VISIT OUR GALLERY
              </Button>
            </Link>
            <p className="mt-8 font-body-md text-body-md text-on-surface-variant max-w-md italic leading-relaxed">
              Discover our signature pastries, seasonal tarts, and heritage loaves.
            </p>
          </section>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}

"use client";

import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-20 reveal">
          <h1 className="font-display text-4xl text-primary mb-8 border-b border-outline-variant/35 pb-4">Terms of Service</h1>
          <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest mb-6">Last Updated: October 2024</p>
          
          <div className="space-y-6 font-body-md text-on-surface-variant text-sm leading-relaxed">
            <p>
              Welcome to Cake Heaven. By browsing our website, booking design consultations, or placing cake orders, you agree to comply with and be bound by the following terms and conditions of use.
            </p>
            
            <h2 className="font-display text-2xl text-primary pt-4">1. Order Commissions & Deposits</h2>
            <p>
              Custom cake commissions, especially wedding and milestone celebrations, require an approved design concept. A non-refundable deposit of 50% is required to secure your booking date. The remaining balance must be cleared at least 14 days before the event delivery.
            </p>

            <h2 className="font-display text-2xl text-primary pt-4">2. Consultation Bookings</h2>
            <p>
              Consultations can be booked via our interactive scheduling calendar. Standard slots last 30 minutes. If you need to reschedule or cancel a session, we kindly request a notice of at least 48 hours.
            </p>

            <h2 className="font-display text-2xl text-primary pt-4">3. Deliveries & Collections</h2>
            <p>
              We hand-deliver within Greater London and surrounding counties. While we handle all transport with the utmost care, Cake Heaven is not responsible for any damage occurring to cakes once they have been signed for at the venue delivery desk.
            </p>

            <h2 className="font-display text-2xl text-primary pt-4">4. Allergens & Dietary Requests</h2>
            <p>
              We offer dietary adaptations (e.g., gluten-free, vegan) upon special request. However, our bakery handles nuts, dairy, wheat, and eggs daily. We cannot guarantee complete absence of cross-contamination.
            </p>

            <h2 className="font-display text-2xl text-primary pt-4">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the United Kingdom.
            </p>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}

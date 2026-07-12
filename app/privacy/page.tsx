"use client";

import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-20 reveal">
          <h1 className="font-display text-4xl text-primary mb-8 border-b border-outline-variant/35 pb-4">Privacy Policy</h1>
          <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest mb-6">Last Updated: October 2024</p>
          
          <div className="space-y-6 font-body-md text-on-surface-variant text-sm leading-relaxed">
            <p>
              At Cake Heaven, we respect your privacy and are committed to protecting any personal information you provide to us when using our website, ordering custom cakes, or scheduling consultations.
            </p>
            
            <h2 className="font-display text-2xl text-primary pt-4">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us, including your name, email address, phone number, and project details (e.g., event descriptions, cake preferences) when you inquire about our products or schedule virtual/in-person tasting sessions.
            </p>

            <h2 className="font-display text-2xl text-primary pt-4">2. How We Use Your Information</h2>
            <p>
              Your information is used solely to provide and customize our baking services, respond to cake inquiries, coordinate consultations, and process your requests. If you explicitly subscribe to our seasonal newsletters, we will send you updates on custom drop releases.
            </p>

            <h2 className="font-display text-2xl text-primary pt-4">3. Information Sharing</h2>
            <p>
              We do not share, sell, rent, or trade your personal information with third parties. All consultation booking information is managed securely.
            </p>

            <h2 className="font-display text-2xl text-primary pt-4">4. Security</h2>
            <p>
              We implement industry-standard security measures to safeguard your personal details. However, please remember that no transmission method over the internet is 100% secure.
            </p>
            
            <h2 className="font-display text-2xl text-primary pt-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at hello@cakeheaven.co.
            </p>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}

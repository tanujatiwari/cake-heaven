"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { useToast } from "../contexts/ToastContext";
import { validateInquiryForm } from "../utils/schemas";
import { PRODUCTS } from "../utils/constants";
import { cn } from "../utils/helpers";

const CALENDAR_DAYS = [
  { value: 28, isCurrentMonth: false },
  { value: 29, isCurrentMonth: false },
  { value: 30, isCurrentMonth: false },
  { value: 31, isCurrentMonth: false },
  { value: 1, isCurrentMonth: true },
  { value: 2, isCurrentMonth: true },
  { value: 3, isCurrentMonth: true },
  { value: 4, isCurrentMonth: true },
  { value: 5, isCurrentMonth: true },
  { value: 6, isCurrentMonth: true },
  { value: 7, isCurrentMonth: true },
  { value: 8, isCurrentMonth: true },
  { value: 9, isCurrentMonth: true },
  { value: 10, isCurrentMonth: true },
  { value: 11, isCurrentMonth: true },
  { value: 12, isCurrentMonth: true },
  { value: 13, isCurrentMonth: true },
  { value: 14, isCurrentMonth: true },
  { value: 15, isCurrentMonth: true },
  { value: 16, isCurrentMonth: true },
  { value: 17, isCurrentMonth: true },
  { value: 18, isCurrentMonth: true },
  { value: 19, isCurrentMonth: true },
  { value: 20, isCurrentMonth: true },
  { value: 21, isCurrentMonth: true },
  { value: 22, isCurrentMonth: true },
  { value: 23, isCurrentMonth: true },
  { value: 24, isCurrentMonth: true },
];

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

function ContactFormAndCalendar() {
  const { showToast } = useToast();
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "";
  const itemId = searchParams.get("item") || "";
  const initialProduct = itemId ? PRODUCTS.find((p) => p.id === itemId) : null;
  const initialMessage = initialProduct
    ? `Hi, I would like to inquire about the custom order for the "${initialProduct.name}" (${initialProduct.category}). Please let me know the availability and pricing options.`
    : "";

  // Inquiry form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: type || (initialProduct ? "order" : ""),
    message: initialMessage,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  // Calendar booking states
  const [selectedDay, setSelectedDay] = useState<number>(6); // Oct 6th initially
  const [selectedTime, setSelectedTime] = useState<string>("02:00 PM"); // 2:00 PM initially
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);

  // Form submission handler
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setIsFormSubmitting(true);
    setTimeout(() => {
      showToast("Thank you for your message! Our chef will review and email you back within 24 hours.", "success");
      setFormData({ name: "", email: "", reason: "", message: "" });
      setIsFormSubmitting(false);
    }, 1200);
  };

  // Calendar confirmation handler
  const handleBookingConfirm = () => {
    setIsBookingSubmitting(true);
    setTimeout(() => {
      showToast(
        `Consultation booked! We've scheduled your slot on Friday, Oct ${selectedDay}th at ${selectedTime}. Check email for coordinates.`,
        "success"
      );
      setIsBookingSubmitting(false);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 reveal">
      {/* Contact Form Card */}
      <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 shadow-sm transition-all duration-300 hover:shadow-ambient">
        <h2 className="font-display text-2xl text-primary mb-6">General Inquiry</h2>
        <form onSubmit={handleInquirySubmit} className="space-y-6">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={formErrors.name}
          />
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={formErrors.email}
          />
          <Select
            label="Inquiry Type"
            options={[
              { value: "order", label: "New Order Inquiry" },
              { value: "wholesale", label: "Wholesale Partnership" },
              { value: "press", label: "Press & Media" },
              { value: "general", label: "General Feedback" },
            ]}
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            error={formErrors.reason}
          />
          
          <div className="relative group w-full">
            <textarea
              className={cn(
                "peer w-full bg-transparent border-0 border-b-2 pt-4 pb-1 font-body-md text-on-surface outline-none resize-none transition-all duration-300 focus:ring-0 focus:border-primary",
                formErrors.message ? "border-error focus:border-error" : "border-outline-variant focus:border-primary"
              )}
              placeholder=" "
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <label
              className={cn(
                "absolute left-0 top-4 text-on-surface-variant duration-300 transform origin-[0] pointer-events-none",
                "scale-75 -translate-y-6",
                "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0",
                "peer-focus:scale-75 peer-focus:-translate-y-6",
                formErrors.message ? "peer-focus:text-error text-error/80" : "peer-focus:text-primary"
              )}
            >
              Tell us about your project
            </label>
            {formErrors.message && (
              <p className="mt-1.5 text-xs text-error font-body-md font-medium">{formErrors.message}</p>
            )}
          </div>

          <Button variant="dark" type="submit" className="w-full py-4 mt-4" isLoading={isFormSubmitting}>
            Send Message
          </Button>
        </form>
      </div>

      {/* Calendar Widget Card */}
      <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary-fixed/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="font-display text-2xl text-primary">Consultation Booking</h2>
              <p className="text-on-surface-variant font-label-md text-xs mt-1">30 min virtual or in-person session</p>
            </div>
            <div>
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold tracking-widest uppercase">
                Available
              </span>
            </div>
          </div>

          {/* Calendar UI */}
          <div className="flex-grow grid grid-cols-7 gap-2 mb-8 select-none">
            {/* Days Header */}
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((dayName) => (
              <div key={dayName} className="text-center text-[10px] font-bold text-on-surface-variant/60 uppercase py-2">
                {dayName}
              </div>
            ))}
            {/* Calendar Days */}
            {CALENDAR_DAYS.map((day, idx) => {
              if (!day.isCurrentMonth) {
                return (
                  <div key={idx} className="h-12 flex items-center justify-center text-on-surface-variant/30 text-label-md">
                    {day.value}
                  </div>
                );
              }
              const isSelected = selectedDay === day.value;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedDay(day.value)}
                  className={cn(
                    "h-12 flex items-center justify-center text-label-md font-semibold rounded-lg border cursor-pointer transition-all duration-200",
                    isSelected
                      ? "bg-primary text-on-primary border-primary shadow-md"
                      : "bg-surface-container-lowest border-outline-variant/30 text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed"
                  )}
                >
                  {day.value}
                </div>
              );
            })}
          </div>

          {/* Day & Slot selectors */}
          <div className="space-y-6 pt-4 border-t border-outline-variant/20">
            <p className="text-label-md font-bold text-primary">
              Selected Date: Friday, Oct {selectedDay}th
            </p>
            <div className="flex flex-wrap gap-3">
              {TIME_SLOTS.map((time) => {
                const isActive = selectedTime === time;
                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "px-5 py-2 rounded-full border text-label-md transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-primary text-on-primary border-primary shadow-sm"
                        : "border-primary text-primary hover:bg-primary hover:text-on-primary"
                    )}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
            
            <Button
              variant="primary"
              onClick={handleBookingConfirm}
              className="w-full py-4 bg-honey-gold text-primary font-bold shadow-md"
              isLoading={isBookingSubmitting}
            >
              Confirm Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-24">
          {/* Hero Section */}
          <section className="grid lg:grid-cols-2 gap-gutter items-center mb-20 reveal">
            <div className="space-y-stack-md">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                Let’s create your dream cake together.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Whether it&apos;s a grand wedding celebration or an intimate birthday gathering, we bring artisanal precision and artisanal heart to every creation.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4 text-sm">
                <div className="flex items-center space-x-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">location_on</span>
                  <span className="font-label-md font-semibold">124 Baker St, London</span>
                </div>
                <div className="flex items-center space-x-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
                  <span className="font-label-md font-semibold">hello@cakeheaven.co</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-ambient group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200"
                alt="Multi-tiered wedding cake"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </section>

          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary" />
              </div>
            }
          >
            <ContactFormAndCalendar />
          </Suspense>

          {/* Secondary Info / FAQ Section */}
          <section className="mt-24 grid md:grid-cols-3 gap-gutter reveal">
            <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-ambient">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">cake</span>
              <h3 className="font-display text-lg text-primary mb-2 font-semibold">Tasting Kits</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Prefer to try before you talk? Order a curated selection of our seasonal flavor profiles delivered to your door.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-ambient">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">local_shipping</span>
              <h3 className="font-display text-lg text-primary mb-2 font-semibold">Delivery Area</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                We hand-deliver within Greater London and surrounding counties. Special arrangements can be made for destination events.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-ambient">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">schedule</span>
              <h3 className="font-display text-lg text-primary mb-2 font-semibold">Timeline</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                For wedding commissions, we recommend booking at least 3-6 months in advance to ensure date availability.
              </p>
            </div>
          </section>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}

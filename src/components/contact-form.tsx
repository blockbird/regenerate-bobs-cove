"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12 border border-ink/5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime/20 text-[#6da824] mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h2 className="font-display text-3xl font-normal tracking-tight text-ink">
          Message sent!
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal">
          Thank you for reaching out. A member of our volunteer team will get back to you shortly.
        </p>
        <button
          className="mt-8 rounded-full border border-ink/20 bg-transparent px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep"
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-6 rounded-2xl bg-white p-8 shadow-sm sm:p-12 border border-ink/5" onSubmit={handleSubmit}>
      <div className="mb-2">
        <h2 className="font-display text-3xl font-normal tracking-tight text-ink">
          Send us a message
        </h2>
        <p className="mt-3 text-base leading-relaxed text-charcoal">
          Fill out the form below and we'll be in touch.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            required
            className="w-full rounded-lg border border-ink/10 bg-black/5 px-4 py-3 text-base text-ink outline-none transition-all placeholder:text-ink/40 focus:border-deep/30 focus:bg-white focus:ring-2 focus:ring-deep/20"
            placeholder="Jane Doe"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-lg border border-ink/10 bg-black/5 px-4 py-3 text-base text-ink outline-none transition-all placeholder:text-ink/40 focus:border-deep/30 focus:bg-white focus:ring-2 focus:ring-deep/20"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-ink">
          Subject
        </label>
        <select
          id="subject"
          required
          className="w-full rounded-lg border border-ink/10 bg-black/5 px-4 py-3 text-base text-ink outline-none transition-all focus:border-deep/30 focus:bg-white focus:ring-2 focus:ring-deep/20"
        >
          <option value="">Select a topic...</option>
          <option value="volunteering">Volunteering</option>
          <option value="backyard-trapping">Backyard Trapping</option>
          <option value="donation">Donation</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-ink/10 bg-black/5 px-4 py-3 text-base text-ink outline-none transition-all placeholder:text-ink/40 focus:border-deep/30 focus:bg-white focus:ring-2 focus:ring-deep/20"
          placeholder="How can we help?"
        />
      </div>
      <div className="mt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  DollarSign,
  TrendingUp,
  ClipboardCheck,
  CreditCard,
  Wrench,
  ArrowDownRight,
} from "lucide-react";

export default function LandingPage() {
  const [bgUrl, setBgUrl] = useState<string | null>(null);

  const candidates = useMemo(
    () => [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
    []
  );

  useEffect(() => {
    setBgUrl(candidates[Math.floor(Math.random() * candidates.length)]);
  }, [candidates]);

  const scrollToForm = () => {
    const element = document.getElementById("form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            OwnParks - Smart Parking Solutions
          </h1>
          <p className="text-gray-200 mb-6">
            Discover and manage parking with ease.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            To Know More
          </button>
        </div>
      </section>

      {/* About Us / Stats Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <DollarSign className="mx-auto mb-2" />
            <p className="font-semibold">Affordable</p>
          </div>
          <div>
            <TrendingUp className="mx-auto mb-2" />
            <p className="font-semibold">Growth</p>
          </div>
          <div>
            <ClipboardCheck className="mx-auto mb-2" />
            <p className="font-semibold">Reliable</p>
          </div>
          <div>
            <CreditCard className="mx-auto mb-2" />
            <p className="font-semibold">Easy Payments</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-gray-100" id="form">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
          <form
            className="space-y-4"
            action="https://formspree.io/f/xldwewdd"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <a
            href="#form"
            onClick={(e) => {
              e.preventDefault();
              scrollToForm();
            }}
            className="inline-block mb-6 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Fill This Form
          </a>
          <h4 className="text-xl font-semibold mb-4">OWNPARKS TECHNOLOGIES PVT. LTD.</h4>
          <p className="mb-2">Address: 21, Knowledge Park III, Greater Noida, U.P.</p>
          <p className="mb-2">Phone: +91-9829495886</p>
          <p className="mb-4">Email: support@ownparks.com</p>
          <small>© {new Date().getFullYear()} OwnParks. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}

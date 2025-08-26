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

  const candidates = useMemo(() => {
    let fromQuery: string | null = null;
    if (typeof window !== "undefined") {
      try {
        const url = new URL(window.location.href);
        fromQuery = url.searchParams.get("bg");
      } catch (_) {
        fromQuery = null;
      }
    }
    return [
      fromQuery,
      "/assets/ownparkimg.jpg",
      "/assets/ownparkimg.jfif",
      "/assets/ownparkimg.png",
    ].filter(Boolean) as string[];
  }, []);

  useEffect(() => {
    let cancelled = false;
    const preload = (url: string) =>
      new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });

    (async () => {
      for (const url of candidates) {
        const ok = await preload(url);
        if (ok) {
          if (!cancelled) setBgUrl(url);
          break;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [candidates]);

  const backgroundImage = bgUrl
    ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${bgUrl}")`
    : `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))`;

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage }}
      aria-label="OwnParks landing background"
      data-testid="bg-container"
    >
      <header className="flex justify-between items-center p-4 text-white bg-black/40">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.webp" alt="OwnParks Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold">OwnParks</h1>
        </div>
        <a
          href="https://ownparks.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-white border border-white/30"
          data-testid="visit-main-website"
        >
          Visit Main Website
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start text-white">
          <div>
            <h2
              className="text-5xl md:text-6xl font-extrabold leading-tight"
              data-testid="hero-title"
            >
              Lease and Rent
              <span className="block text-green-300">Future of Parking</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              1500+ Parking assets available for Lease and Rent at multiple locations for you.
            </p>
            <div className="mt-4 flex items-center gap-2 text-green-300 text-lg font-medium">
              <ArrowDownRight className="text-green-400 animate-bounce" />
              <span>To Know more Fill the Form</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xldwewdd"
              method="POST"
            >
              <div>
                <label className="block mb-1 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="phone">
                  Phone No.
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Section (replacing 50.png) */}
      <section className="w-full bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">
              50+
            </p>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              PARKING ASSET LOCATION
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">
              20K+
            </p>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              PARKING "LEASE & RENT"
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">
              200
            </p>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              SPECIALIST PARTNERS
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">
              15+
            </p>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              UNIQUE SERVICES
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            Modern &amp; Advanced Technology for PARKING ASSET ALLOCATION. OWNPARKS utilizes
            modern and advanced technology for efficient parking asset allocation, enhancing
            convenience and management. Additionally, it offers various add-on services such as
            valet assistance, vehicle monitoring, and customized parking solutions to optimize
            your parking experience.
          </p>

          <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Key Features
          </h3>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center gap-4 bg-white shadow rounded-xl p-3 w-full">
              <DollarSign className="text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-lg">
                Affordable starting point: Available from just ₹4 Lacs.
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white shadow rounded-xl p-3 w-full">
              <TrendingUp className="text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-lg">
                Consistent income: Earn daily and monthly payments regularly.
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white shadow rounded-xl p-3 w-full">
              <ClipboardCheck className="text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-lg">
                Easy process: Simple and hassle-free way to secure your space.
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white shadow rounded-xl p-3 w-full">
              <CreditCard className="text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-lg">
                Reliable payments: Receive your earnings on time, every month.
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white shadow rounded-xl p-3 w-full">
              <Wrench className="text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-lg">
                Low maintenance: No worries about upkeep or additional costs.
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
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

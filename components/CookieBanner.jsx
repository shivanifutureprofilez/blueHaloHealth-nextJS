"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent";
const REASK_DAYS = 2;

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(CONSENT_KEY);

    if (!stored) {
      setIsVisible(true);
      return;
    }

    // Handle old format: "accepted"
    if (stored === "accepted") {
      initAnalytics();
      return;
    }

    try {
      const parsed = JSON.parse(stored);

      if (parsed.status === "accepted") {
        initAnalytics();
        return;
      }

      if (parsed.status === "rejected") {
        const now = Date.now();
        const twoDays = REASK_DAYS * 24 * 60 * 60 * 1000;

        if (now - parsed.timestamp > twoDays) {
          setIsVisible(true);
        }
        return;
      }

      setIsVisible(true);
    } catch (error) {
      setIsVisible(true);
    }
  }, []);

  function initAnalytics() {
    if (typeof window === "undefined") return;

    if (!window.gtag) {
      const script = document.createElement("script");
      script.src =
        "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", "G-XXXXXXX");
    }
  }

  const acceptCookies = () => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({
        status: "accepted",
        timestamp: Date.now(),
      })
    );

    initAnalytics();
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({
        status: "rejected",
        timestamp: Date.now(),
      })
    );

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-6 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          We use cookies to improve website functionality and understand how
          visitors use our site. By continuing to browse this website, you
          consent to our use of cookies.{" "}
          <Link href="/privacy/policy" className="underline">
            Learn more
          </Link>
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);

    // OPTIONAL: Trigger analytics initialization here
    // initAnalytics();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-8 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve website functionality and understand how
          visitors use our site. By continuing to browse this website, you
          consent to our use of cookies.{" "}
          <Link href="/privacy/policy" className="underline">
            Learn more
          </Link>
        </p>

        <button
          onClick={acceptCookies}
          className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

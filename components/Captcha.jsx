import React, { useEffect, useMemo, useState } from "react";

/**
 * TwoDigitCaptcha
 * A small React component that renders a 2-digit CAPTCHA as an inline SVG and
 * provides input + verification. Designed to be dropped into any Next.js/React form.
 *
 * Props:
 * - onVerify(code) -> called when user successfully verifies (optional)
 * - length (number) -> defaults to 2 (kept for extensibility)
 * - maxAttempts (number) -> how many wrong attempts allowed before lockout (optional)
 * - className (string) -> wrapper classname
 *
 * Uses Tailwind CSS classes for styling. Default export is the component.
 */

export default function Captcha({
  onVerify, CaptchaVerified,
  length = 2,
  maxAttempts = 5,
  className = "",
}) {
  const [captcha, setCaptcha] = useState(""); // the correct code
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  // Generate a random n-digit numeric string (leading zeros allowed)
  function generateCode(n) {
    let s = "";
    for (let i = 0; i < n; i++) s += Math.floor(Math.random() * 10).toString();
    return s;
  }

  // Create a brand-new captcha
  function refreshCaptcha() {
    setCaptcha(generateCode(length));
    setInput("");
    setStatus(null);
    setAttempts(0);
  }

  // lock for 30 seconds if too many attempts
  useEffect(() => {
    if (attempts >= maxAttempts) {
      const until = Date.now() + 30_000; // 30s lock
      setLockedUntil(until);
      setStatus(null);
      const timer = setTimeout(() => {
        setAttempts(0);
        setLockedUntil(null);
        refreshCaptcha();
      }, 30_000);
      return () => clearTimeout(timer);
    }
  }, [attempts, maxAttempts]);

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const CaptchaSVG = useMemo(() => {
    if (!captcha) return null;

    const width = 120;
    const height = 48;

    // randomize transforms per digit but deterministic for this render by seeding from captcha
    function rand(seed) {
      // simple LCG
      let x = 0;
      for (let i = 0; i < seed.length; i++) x = (x * 31 + seed.charCodeAt(i)) % 9973;
      return () => {
        x = (x * 1664525 + 1013904223) % 4294967296;
        return x / 4294967296;
      };
    }

    const r = rand(captcha + Date.now().toString().slice(-3));

    const chars = captcha.split("");

    const noiseLines = Array.from({ length: 3 }).map((_, i) => {
      const x1 = Math.floor(r() * width);
      const y1 = Math.floor(r() * height);
      const x2 = Math.floor(r() * width);
      const y2 = Math.floor(r() * height);
      const strokeWidth = 1 + Math.floor(r() * 2);
      return { x1, y1, x2, y2, strokeWidth };
    });

    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="captcha image"
        role="img"
        className="rounded-md border"
      >
        <rect width="100%" height="100%" fill="#f3f4f6" />

        {/* noise lines */}
        {noiseLines.map((L, i) => (
          <line
            key={i}
            x1={L.x1}
            y1={L.y1}
            x2={L.x2}
            y2={L.y2}
            strokeOpacity={0.6}
            strokeWidth={L.strokeWidth}
            stroke={"#9ca3af"}
          />
        ))}

        {/* digits */}
        {chars.map((ch, i) => {
          const x = 18 + i * 42 + (r() - 0.5) * 8; // jitter x
          const y = 28 + (r() - 0.5) * 6; // jitter y
          const rotate = Math.floor((r() - 0.5) * 30); // -15..15
          const fontSize = 28 + Math.floor(r() * 6);
          const fillOpacity = 0.9 - r() * 0.4;
          return (
            <text
              key={i}
              x={x}
              y={y}
              transform={`rotate(${rotate}, ${x}, ${y})`}
              fontFamily="Ui-monospace, SFMono-Regular, Menlo, Monaco, monospace"
              fontSize={fontSize}
              fontWeight={700}
              fillOpacity={fillOpacity}
            >
              {ch}
            </text>
          );
        })}
      </svg>
    );
    // the memo key should include captcha so it re-renders when captcha changes
  }, [captcha]);

  function handleVerify(e) {
    e.preventDefault();
    if (lockedUntil && Date.now() < lockedUntil) return;

    if (input.trim() === captcha) {
      setStatus("success");
      onVerify && onVerify(captcha);
      // refresh after success so user can't reuse it
      setTimeout(() => refreshCaptcha(), 800);
    } else {
      setStatus("error");
      setAttempts((s) => s + 1);
    }
  }

  return (
    <>
    {!CaptchaVerified ? <div className={`w-full max-w-sm ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">Enter the 2-digit code</label>

      <div className="grid grid-cols-3 ">
        <div className="select-none" aria-hidden>
          {CaptchaSVG}
        </div>

        <div className="flex-1">
          <div  className="flex gap-2 items-center">
            <input
              aria-label="captcha-input"
              value={input}
              onChange={(ev) => {
                // allow only digits and max length
                const v = ev.target.value.replace(/\D+/g, "").slice(0, length);
                setInput(v);
                setStatus(null);
              }}
              className="px-3 py-2 border rounded-md w-28 text-lg text-center placeholder:text-gray-400"
              placeholder={"__"}
              inputMode="numeric"
            />

            

            <button
              type="button"
              onClick={refreshCaptcha}
              className="px-2 py-2 rounded-md border text-sm text-gray-700"
              title="Refresh captcha"
            >
              ↻
            </button>
            <button
              onClick={handleVerify}
              disabled={lockedUntil && Date.now() < lockedUntil}
              className="px-3 py-2 rounded-md bg-green-600 text-white text-sm disabled:opacity-50"
            >
              Verify
            </button>
          </div>
         
          <div className="mt-2 text-sm">
            {status === "success" && <span className="text-green-600">Verified ✓</span>}
            {status === "error" && <span className="text-red-600">Wrong code — try again</span>}

            {attempts > 0 && attempts < maxAttempts && (
              <div className="text-xs text-gray-500 mt-1">Attempts: {attempts} / {maxAttempts}</div>
            )}

            {lockedUntil && Date.now() < lockedUntil && (
              <div className="text-xs text-red-600 mt-1">Too many attempts. Try again in 30s.</div>
            )}
          </div>
        </div>
     
      </div>
          {/* <div className="flex "> */}
               {/* <button
              onClick={handleVerify}
              disabled={lockedUntil && Date.now() < lockedUntil}
              className="px-3 py-2 rounded-md bg-green-600 text-white text-sm disabled:opacity-50"
            >
              Verify
            </button> */}
            {/* </div> */}
    </div>  : <p className="text-green-600">Captcha Verified Successfully !!</p>}
    </>
  );
}

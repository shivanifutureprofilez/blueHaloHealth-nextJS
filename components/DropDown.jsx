import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";

// Accessible, keyboard-friendly dropdown component using TailwindCSS + Framer Motion
// Props:
// - label: string | node shown on the button
// - items: array of { id, label, description? }
// - onSelect: function(item) => void
// - className: additional classes for container
// - align: "left" | "right"

export default function DropDown({
  label = "Select",
  items = [],
  children, btnclasses,menuwidth,
  onSelect = () => {},
  className = "",
  align = "left",
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    function onDocumentClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    }
    function onKeyDown(e) {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        setActiveIndex(-1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(items.length - 1, i + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) {
          handleSelect(items[activeIndex]);
        }
      }
    }

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, activeIndex, items]);

  useEffect(() => {
    if (open && activeIndex >= 0 && itemsRef.current[activeIndex]) {
      itemsRef.current[activeIndex].focus();
    }
  }, [activeIndex, open]);

  function toggleOpen() {
    setOpen((o) => !o);
    if (!open) setActiveIndex(0);
    else setActiveIndex(-1);
  }

  function handleSelect(item) {
    onSelect(item);
    setOpen(false);
    setActiveIndex(-1);
  }

  const menuAlignClasses = align === "right" ? "right-0 origin-top-right" : "left-0 origin-top-left";

  return (
    <div className={`relative inline-block text-left ${className}`} ref={containerRef}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={toggleOpen}
        className={`flex items-center ${btnclasses}`}
      > <span className="truncate">{label}</span>
        <RiArrowDropDownLine size={30} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.12 }}
            className={`absolute z-50 mt-2 ${menuwidth || "w-56"} rounded-xl bg-white ring-1 ring-black/5 shadow-lg ${menuAlignClasses}`}
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

 
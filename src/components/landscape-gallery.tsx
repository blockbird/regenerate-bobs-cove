"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  shape: string;
};

const tileSpans: Record<string, string> = {
  square: "md:col-span-4",
  tall: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-8",
  half: "md:col-span-6",
  full: "md:col-span-12",
};

export function LandscapeGallery({ items }: { items: readonly GalleryItem[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  }, [selectedIndex, items.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  }, [selectedIndex, items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {items.map((item, index) => (
          <figure
            className={[
              "group relative overflow-hidden rounded-xl bg-black/5 cursor-pointer",
              tileSpans[item.shape],
              item.shape === "tall" ? "min-h-[40rem]" : item.shape === "full" ? "aspect-[4/3]" : item.shape === "half" ? "aspect-square" : "min-h-[24rem]",
            ].join(" ")}
            key={item.src}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              alt={item.alt}
              className="object-cover object-center transition duration-700 group-hover:scale-105"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              src={item.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <figcaption className="absolute inset-x-6 bottom-6 translate-y-4 text-sm font-medium tracking-wide text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute right-4 top-4 z-[110] rounded-full bg-white/10 p-2 text-white/70 transition hover:bg-white/20 hover:text-white sm:right-8 sm:top-8 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <button 
            className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/70 transition hover:bg-white/20 hover:text-white sm:left-8 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button 
            className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/70 transition hover:bg-white/20 hover:text-white sm:right-8 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={nextImage}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className="relative h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              alt={items[selectedIndex].alt}
              className="object-contain"
              fill
              sizes="100vw"
              src={items[selectedIndex].src}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center text-white pb-10">
              <p className="text-lg font-medium">{items[selectedIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
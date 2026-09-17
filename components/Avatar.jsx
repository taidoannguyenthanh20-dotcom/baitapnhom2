"use client";

import { useState } from "react";

export default function Avatar({ src = "/avatar.png", alt = "Phùng Anh Lực", size = "large" }) {
  const [hasError, setHasError] = useState(false);

  let dimensionClasses = "w-32 h-32 sm:w-40 sm:h-40";
  let fontClasses = "text-3xl";

  if (size === "small") {
    dimensionClasses = "w-14 h-14";
    fontClasses = "text-sm";
  } else if (size === "nav") {
    dimensionClasses = "w-9 h-9";
    fontClasses = "text-[11px]";
  }

  return (
    <div
      className={`relative ${dimensionClasses} rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-300 shadow-md shadow-blue-500/20 group shrink-0`}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center border border-zinc-950">
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className={`font-black text-blue-400 ${fontClasses}`}>
            PAL
          </span>
        )}
      </div>
    </div>
  );
}

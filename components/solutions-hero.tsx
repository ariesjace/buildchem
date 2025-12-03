"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SolutionsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      <Image
        src="/images/buildchem-hero.png"
        alt="Corporate buildings"
        fill
        className="object-cover"
        quality={90}
      />

      {/* Dimming overlay */}

      {/* Content */}
    </div>
  );
}

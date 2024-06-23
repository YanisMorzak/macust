"use client";

import TemplateMac from "@/src/components/TemplateMac";
import { Configuration } from "@prisma/client";
import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

export default function DesignPreview({
  configuration,
}: {
  configuration: Configuration;
}) {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  useEffect(() => setShowConfetti(true));
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <div className="mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2">
          <TemplateMac
            className="max-w-[250px] md:max-w-full"
            imgSrc={configuration.croppedImageUrl!}
          />
        </div>
      </div>
    </>
  );
}

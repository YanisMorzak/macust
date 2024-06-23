"use client";

import TemplateMac from "@/src/components/TemplateMac";
import { MODELS } from "@/src/validators/option-validator";
import { Configuration } from "@prisma/client";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

export default function DesignPreview({
  configuration,
}: {
  configuration: Configuration;
}) {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  useEffect(() => setShowConfetti(true));

  const { model, finish, material } = configuration;

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!;

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

      <div className="mt-6 sm:col-span-9 md:row-end-1">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900">
          Your {modelLabel} Custom
        </h3>
        <div className="mt-3 flex items-center gap-1.5 text-base">
          <Check className="h-4 w-4 text-green-500" />
          In stock and ready to ship
        </div>
      </div>
    </>
  );
}

import { PRODUCT_PRICES } from "../config/products";

export const MODELS = {
  name: "models",
  options: [
    {
      label: "MacBook Air 13",
      value: "MacBookAir13",
      price: 130000,
    },
    {
      label: "MacBook Air 15",
      value: "MacBookAir15",
      price: 140000,
    },
    {
      label: "MacBook Pro 14",
      value: "MacBookPro14",
      price: 150000,
    },
    {
      label: "MacBook Pro 16",
      value: "MacBookPro16",
      price: 160000,
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Ink In Jars",
      value: "InkInJars",
      description: undefined,
      price: PRODUCT_PRICES.material.InkInJars,
    },
    {
      label: "Ink sticks",
      value: "InkSticks",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.InkStick,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;

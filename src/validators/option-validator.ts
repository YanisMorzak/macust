import { PRODUCT_PRICES } from "../config/products"

export const MODELS = {
    name: 'models',
    options: [
      {
        label: 'MacBook Air 13″',
        value: 'MacBook Air 13″',
      },
      {
        label: 'MacBook Air 15″',
        value: 'MacBook Air 15″',
      },
      {
        label: 'MacBook Pro 14″',
        value: 'MacBook Pro 14″',
      },
      {
        label: 'MacBook Pro 16″',
        value: 'MacBook Pro 16″',
      },
    ],
  } as const

  export const MATERIALS = {
    name: 'material',
    options: [
      {
        label: 'Ink In Jars',
        value: 'Ink In Jars',
        description: undefined,
        price: PRODUCT_PRICES.material.InkInJars,
      },
      {
        label: 'Ink sticks',
        value: 'Ink sticks',
        description: 'Scratch-resistant coating',
        price: PRODUCT_PRICES.material.InkStick,
      },
    ],
  } as const

  export const FINISHES = {
    name: 'finish',
    options: [
      {
        label: 'Smooth Finish',
        value: 'smooth',
        description: undefined,
        price: PRODUCT_PRICES.finish.smooth,
      },
      {
        label: 'Textured Finish',
        value: 'textured',
        description: 'Soft grippy texture',
        price: PRODUCT_PRICES.finish.textured,
      },
    ],
  } as const
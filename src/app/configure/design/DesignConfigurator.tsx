'use client'

import HandleComponent from "@/src/components/HandleComponent";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { Button } from "@/src/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu";
import { Label } from "@/src/components/ui/label";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { cn } from "@/src/lib/utils";
import { MODELS } from "@/src/validators/option-validator";
import { Check, ChevronsUpDown } from "lucide-react";
import NextImage from 'next/image'
import { useState } from "react";
import { Rnd } from 'react-rnd'

interface DesignConfiguratorProps {
    configId: string
    imageUrl: string
    imageDimensions: { width: number; height: number }
  }

export default function DesignConfigurator({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) {
    const [options, setOptions] = useState<{
        model: (typeof MODELS.options)[number]
      }>({
        model: MODELS.options[0],
      })

  return (
    <div className='relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20'>
    <div
      className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
      <div className='relative w-60 md:w-[400px] bg-opacity-50 pointer-events-none aspect-[1831/1296]'>
        <AspectRatio ratio={1831 / 1296} className='pointer-events-none relative aspect-[1831/1296] w-full'>
        <NextImage
              fill
              alt='phone image'
              src='/mac-template-2.png'
              className='pointer-events-none select-none'
            />
        </AspectRatio>
        <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[15px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]' />
      </div>
      <Rnd
         default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          className='absolute z-20 border-[2px] border-primary'
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
          >
        <div className='relative w-full h-full'>
              <NextImage
                src={imageUrl}
                fill
                alt='your image'
                className='pointer-events-none'
              />
        </div>
      </Rnd>
    </div>

    
    <div className='h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white'>
        <ScrollArea className='relative flex-1 overflow-auto'>
          <div
            aria-hidden='true'
            className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none'
          />

            <div className='px-8 pb-12 pt-8'>
                <h2 className='tracking-tight font-bold text-3xl'>
              Customize your case
                </h2>
                <div className='w-full h-px bg-zinc-200 my-6' />
                <div className='relative mt-4 h-full flex flex-col justify-between'>
                    <div className='flex flex-col gap-6'>
                    <div className='relative flex flex-col gap-3 w-full'>
                        <Label>Model</Label>
                        <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        role='combobox'
                        className='w-full justify-between'>
                        {options.model.label}
                        <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          className={cn(
                            'flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100',
                            {
                              'bg-zinc-100':
                                model.label === options.model.label,
                            }
                          )}
                          onClick={() => {
                            setOptions((prev) => ({ ...prev, model }))
                          }}>
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              model.label === options.model.label
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                    </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    </div>
    </div>
  )
}

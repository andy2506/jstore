"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { formatPrice, getCurrencySymbol } from "@/lib/money";

const PriceSection = () => {
  const [range, setRange] = React.useState<[number, number]>([50, 200]);

  const currencySymbol = getCurrencySymbol(); // e.g., "R" for en-ZA + ZAR
  const [min, max] = range;

  return (
    <Accordion type="single" collapsible defaultValue="filter-price">
      <AccordionItem value="filter-price" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Price
        </AccordionTrigger>

        <AccordionContent className="pt-4" contentClassName="overflow-visible">
          {/* Live formatted range */}
          <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(min)}</span>
            <span>—</span>
            <span>{formatPrice(max)}</span>
          </div>

          <Slider
            value={range}
            onValueChange={(v: number[]) => setRange([v[0], v[1]] as [number, number])}
            min={0}
            max={250}
            step={1}
            label={currencySymbol} 
          />

          <div className="mb-3" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriceSection;
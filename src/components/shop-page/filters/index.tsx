import React from "react";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import DressStyleSection from "@/components/shop-page/filters/DressStyleSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";
import { Button } from "@/components/ui/button";

const Filters = () => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection />
      <hr className="border-t-black/10" />
      <PriceSection />
      <hr className="border-t-black/10" />
      <ColorsSection />
      <hr className="border-t-black/10" />
      <SizeSection />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <Button
        type="button"
        className="
          w-full h-12 py-4 rounded-full text-sm font-medium
          bg-black text-white border border-transparent
          hover:bg-white hover:text-black hover:border-black
          focus:bg-white focus:text-black focus:border-black
          focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-background
          transition-colors">
          Apply Filter
      </Button>
    </>
  );
};

export default Filters;

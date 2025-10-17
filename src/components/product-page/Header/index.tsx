import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";
import { formatPrice, discountedPrice } from "@/lib/money";

const Header = ({ data }: { data: Product }) => {
  const finalPrice = discountedPrice(data.price, data.discount);
  const hasPercent = data.discount.percentage > 0;
  const hasAmount = data.discount.amount > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <PhotoSection data={data} />
      </div>

      <div>
        <h1
          className={cn(
            integralCF.className,
            "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize"
          )}
        >
          {data.title}
        </h1>

        <div className="flex items-center mb-3 sm:mb-3.5">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-50"
            size={25}
            readonly
          />
          <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
            {data.rating.toFixed(1)}
            <span className="text-black/60">/5</span>
          </span>
        </div>

        <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
          {/* final (discounted) price */}
          <span className="font-bold text-black text-2xl sm:text-[32px] num">
            {formatPrice(finalPrice)}
          </span>

          {/* original price if discounted */}
          {(hasPercent || hasAmount) && (
            <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px] num">
              {formatPrice(data.price)}
            </span>
          )}

          {/* discount badge */}
          {hasPercent ? (
            <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              -{data.discount.percentage}%
            </span>
          ) : hasAmount ? (
            <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              -{formatPrice(data.discount.amount)}
            </span>
          ) : null}
        </div>

        <p className="text-sm sm:text-base text-black/60 mb-5">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>

        <hr className="h-[1px] border-t-black/10 mb-5" />
        <ColorSelection />
        <hr className="h-[1px] border-t-black/10 my-5" />
        <SizeSelection />
        <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
        <AddToCardSection data={data} />
      </div>
    </div>
  );
};

export default Header;
import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import { formatPrice, discountedPrice } from "@/lib/money";
import { slugify } from "@/lib/slug";

type ProductCardProps = { data: Product };

const ProductCard = ({ data }: ProductCardProps) => {
  const finalPrice = discountedPrice(data.price, data.discount);
  const hasPercent = data.discount.percentage > 0;
  const hasAmount = data.discount.amount > 0;

  return (
    <Link
      href={`/shop/product/${data.id}/${slugify(data.title)}`}
      className="flex flex-col items-start aspect-auto"
    >
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
      </div>

      <strong className="text-black xl:text-xl">{data.title}</strong>

      <div className="flex items-end mb-1 xl:mb-2">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
          {data.rating.toFixed(1)}
          <span className="text-black/60">/5</span>
        </span>
      </div>

      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        <span className="font-bold text-black text-xl xl:text-2xl">
          {formatPrice(finalPrice)}
        </span>

        {(hasPercent || hasAmount) && (
          <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
            {formatPrice(data.price)}
          </span>
        )}

        {hasPercent ? (
          <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
            -{data.discount.percentage}%
          </span>
        ) : hasAmount ? (
          <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
            -{formatPrice(data.discount.amount)}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default ProductCard;
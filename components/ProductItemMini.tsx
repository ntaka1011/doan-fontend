/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { convertPrice } from "@/utils/convertPrice";

interface ProductItemMiniProps {
  product: Product;
  className?: string
}

const ProductItemMini: FC<ProductItemMiniProps> = ({ product, className }) => {
  return (
    <div className={`flex mb-[30px] w-full ${className || ""}`}>
      <Link
        href={`/product/${product.slug}`}
        className="inline-block w-auto cursor-pointer"
      >
        <img src={`${product?.thumbnail}`}
          alt="product"
          className="min-w-[100px] object-cover object-center"
        />
      </Link>
      <div className="ml-[15px] flex flex-col w-[calc(100%-100px)] pr-[15px] ">
        <Link
          href={`/product/${product.slug}`}
          className="leading-[20px] overflow-hidden max-w-full text-[#363636] hover:text-[#35c0c5] cursor-pointer whitespace-nowrap text-ellipsis mb-[10px]"
        >
          {product?.title}
        </Link>
        <div className="flex mb-[10px]">
          <p className="text-[#35c0c5] font-bold text-sm leading-5 mr-1">
            {convertPrice(product.price)}
          </p>
          {product?.original_price && (
            <p className="leading-5 text-[12px] text-slate-500 italic line-through ">
              {convertPrice(product.original_price)}
            </p>
          )}
        </div>
        <button className="outline-none border text-sm uppercase border-[#ebebeb] h-[35px] px-[10px] max-w-[120px] hover:bg-[#35c0c5] hover:text-[#fff]">
          Mua Hàng
        </button>
      </div>
    </div>
  );
};

export default ProductItemMini;

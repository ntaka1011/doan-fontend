/* eslint-disable @next/next/no-img-element */
import useCalculator from "@/hooks/useCalculator";
import { Product } from "@/types/product";
import Link from "next/link";
import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { OpenContext } from "@/context/OpenContext";
import { convertPrice } from "@/utils/convertPrice";
interface ProductItemProps {
  product: Product;
  toggleDisplay?: boolean;
  className?: string
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  toggleDisplay = false,
  className
}) => {
  const { dispatch } = useContext(OpenContext);
  const percent = useCalculator(product?.original_price, product?.price);
  const handleOpenModal = () => {
    dispatch({
      type: "OPEN",
      payload: {
        toggle: true,
        slug: product?.slug,
      },
    });
  };

  return (
    <div className={`${className || ""} relative w-full ${toggleDisplay ? "flex" : "block"}`}>
      <Link href={`/product/${product.slug}`} className="relative ">
        <img src={`${product?.thumbnail}`} className="w-full" alt="" />
        {product?.original_price && (
          <div className="py-[3px] px-[10px] absolute top-[10px] right-[10px] bg-[#35c0c5]">
            <span className="text-sm text-white">-{Math.floor(percent)}%</span>
          </div>
        )}
      </Link>

      <div className="ml-[15px] flex flex-col w-full pr-[15px] mt-[10px] ">
        <Link
          href={`/product/${product.slug}`}
          className="leading-[20px] overflow-hidden max-w-full text-center text-[#363636] hover:text-[#35c0c5] cursor-pointer whitespace-nowrap text-ellipsis mb-[10px]"
        >
          {product?.title}
        </Link>
        <div
          className={`flex mb-[10px] ${toggleDisplay ? "" : "justify-center "}`}
        >
          <p className="text-[#35c0c5] font-bold text-sm leading-5 mr-1">
            {convertPrice(product?.price)}
          </p>
          {product?.original_price && (
            <p className="leading-5 text-[12px] text-slate-500 italic line-through ">
              {convertPrice(product?.original_price)}
            </p>
          )}
        </div>
        <div className={`flex ${toggleDisplay ? "" : "justify-center "}`}>
          <Link
            href={`/product/${product.slug}`}
            className="outline-none border text-sm flex items-center uppercase border-[#ebebeb] h-[35px] px-[10px] max-w-[120px] hover:bg-[#35c0c5] hover:text-[#fff]"
          >
            Mua Hàng
          </Link>
          <button
            onClick={handleOpenModal}
            className="hidden lg:block outline-none border bg-[#A1A1A1] ml-[10px] text-white border-[#ebebeb] h-[35px] px-[10px] max-w-[120px] hover:bg-[#35c0c5] hover:text-[#fff]"
          >
            <AiFillEye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductItemMini from "./ProductItemMini";
import SidebarItem from "./SidebarItem";
import items from "@/data/sidebar.json";
import Contact from "./Contact";
import New from "./New";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/product";
import { LoadingContext } from "@/context/LoadingContext";
import Slider from "react-slick";
import _ from 'lodash';
import { settingFeature, settingNew, settings } from "@/constant/slider";

const Aside = () => {
  const { setOpenLoading, setCloseLoading } = useContext(LoadingContext);
  const { getProducts, getProductParams } = useProducts();
  const { data: products, mutate } = getProducts();
  const { data: productNew, mutate: mutateNew } = getProductParams({
    new: true,
  });
  const { data: productFeature, mutate: mutateFeature } = getProductParams({
    feature: true,
  });

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      setOpenLoading();
      await mutate();
      await mutateNew();
      await mutateFeature();
    } finally {
      setCloseLoading();
    }
  };
  return (
    <div className=" w-full">
      <div className="p-[15px] block lg:hidden md:hidden">
        <Contact />
      </div>
      <div className="block lg:hidden md:hidden p-[15px] mb-[30px]">
        <span className="text-base uppercase font-medium">
          Danh mục sản phẩm
        </span>
        <div className="border-l border-[#ebebeb]">
          {items.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="relative">
        <Link
          href={"/"}
          className="text-center mb-[30px]  relative w-full px-5 text-lg font-bold uppercase flex pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
        >
          <span className="hover:text-[#35c0c5] hover:cursor-pointer">
            Sản phẩm mới
          </span>
        </Link>
        <Slider {...settings}>
          {productNew?.map((productItem: any, index: number) => (
            <ProductItem
              className={"mb-[30px] mx-[15px]"}
              product={productItem}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <div className="mx-[15px] w-full mb-[30px]">
        <div className=" group relative">
          <img src="/images/banner1.webp" className="" alt="" />
          <div className=" ease-out group-hover:absolute group-hover:top-[10px] group-hover:left-[10px] group-hover:right-[10px] group-hover:bottom-[10px] group-hover:border-2 group-hover:border-white group-hover:scale-100">
            <span className="text-[32px] absolute hidden text-white font-semibold top-[50px] left-[36%] uppercase group-hover:block">
              Hàng mới về
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Link
          href={"/"}
          className="text-center mb-[30px]  relative w-full px-5 text-lg font-bold uppercase flex pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
        >
          <span className="hover:text-[#35c0c5] hover:cursor-pointer">
            Sản phẩm khuyến mãi
          </span>
        </Link>
        <Slider {...settings}>
          {productFeature?.map((productItem: any, index: number) => (
            <ProductItem
              className={"mb-[30px] px-[15px]"}
              product={productItem}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <div className="mx-[15px] w-full mb-[30px]">
        <div className="group relative">
          <img src="/images/banner2.webp" className="" alt="" />
          <div className="ease-out group-hover:absolute group-hover:top-[10px] group-hover:left-[10px] group-hover:right-[10px] group-hover:bottom-[10px] group-hover:border-2 group-hover:border-white group-hover:scale-100">
            <span className="text-[32px] absolute hidden text-white font-semibold top-[50px] left-[36%] uppercase group-hover:block">
              Hàng mới về
            </span>
          </div>
        </div>
      </div>
      <div className="block w-full md:block lg:flex ">
        {/* lg */}
        <div className="block md:block md:w-full lg:block lg:w-[33.333333%] px-[15px]">
          <div className="relative">
            <Link
              href={"/"}
              className="text-center mb-[30px] hover:text-[#35c0c5] hover:cursor-pointer relative w-full px-5 text-lg font-bold uppercase flex justify-center pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
            >
              Sản phẩm nổi bật
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 md:gap-[30px] mb-[30px]">
              {/* feature */}
              <Slider {...settingFeature}>
                {productFeature?.map((productItem: any, index: number) => (
                  <ProductItem className={"mb-[30px] px-[15px]"} product={productItem} key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* lg */}
        <div className="block md:block md:w-full lg:block lg:w-[66.666667%] px-[15px]">
          <div className="relative">
            <Link
              href={"/"}
              className="text-center mb-[30px] hover:text-[#35c0c5] hover:cursor-pointer relative w-full px-5 text-lg font-bold uppercase flex justify-center pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
            >
              Sản phẩm mua nhiều
            </Link>
            {/* chưa xong */}
            <div className="hidden md:grid lg:grid grid-cols-1 mb-[30px]">
              <Slider {...settingNew}>
                {productNew?.map((productItem: any, index: number) => (
                  <ProductItemMini
                    className="pb-5 last:border-none border-b border-[#ebebeb] mb-[30px] px-[15px] "
                    product={productItem}
                    key={index}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* md */}
      </div>
      <div className="flex lg:hidden md:hidden w-full pr-[15px]  flex-col">
        <span className="text-base uppercase mb-[30px]">Sản phẩm bán chạy</span>
        {/* product */}
        {
          _.sampleSize(products?.data, 3)
            .map((pItem: Product, index: any) => (
              <ProductItemMini product={pItem} key={index} />
            ))
        }
        <Link
          href={"/"}
          className="text-base uppercase font-[450px] mb-[30px] hover:text-[#35c0c5]"
        >
          Tin tức
        </Link>
        <New show={false} />
      </div>
      <div className="hidden lg:hidden md:block p-[15px] mb-[30px]">
        <span className="text-base uppercase font-medium">
          Danh mục sản phẩm
        </span>
        <div className="border-l border-[#ebebeb]">
          {items.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="hidden lg:hidden md:flex w-full pr-[15px]  flex-col">
        <span className="text-base uppercase mb-[30px]">Sản phẩm bán chạy</span>
        {
          _.sampleSize(products?.data, 3)
            .map((pItem: Product, index: any) => (
              <ProductItemMini product={pItem} key={index} />
            ))
        }
        <Link href={"/"} className="text-base mb-[30px] hover:text-[#35c0c5]">
          Xem thêm sản phẩm
        </Link>
        <Contact />
        <Link
          href={"/"}
          className="text-base uppercase font-[450px] mb-[30px] hover:text-[#35c0c5]"
        >
          Tin tức
        </Link>
        <New show />
      </div>
      {/* md */}
    </div>
  );
};

export default Aside;

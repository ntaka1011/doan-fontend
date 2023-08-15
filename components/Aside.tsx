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

const Aside = () => {
  const { setOpenLoading, setCloseLoading } = useContext(LoadingContext);
  const { getProducts } = useProducts();
  const { data: products, mutate } = getProducts();
  const { data: productNew, mutate: mutateNew } = getProducts({ new: true });
  const { data: productFeature, mutate: mutateFeature } = getProducts({
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
    <div className="w-full">
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
      <Link
        href={"/"}
        className="text-center mb-[30px] hover:text-[#35c0c5] hover:cursor-pointer relative w-full px-5 text-lg font-bold uppercase flex justify-center pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
      >
        Sản phẩm mới
      </Link>
      <div className="hidden lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 gap-[30px] mb-[30px]">
        {productNew?.map((productItem: any) =>
          productItem.data
            ?.slice(0, 3)
            .map((pItem: Product, index: any) => (
              <ProductItem product={pItem} key={index} />
            ))
        )}
      </div>
      <div className="grid grid-cols-1 lg:hidden md:hidden lg:grid-cols-3 md:grid-cols-3 gap-[30px] mb-[30px]">
        {productNew?.map((productItem: any) =>
          productItem.data
            ?.slice(0, 3)
            .map((pItem: Product, index: any) => (
              <ProductItem product={pItem} key={index} />
            ))
        )}
      </div>
      <div className="w-full mb-[30px]">
        <div className="group relative">
          <img src="/images/banner1.webp" className="" alt="" />
          <div className="transition-all ease-out duration-300 group-hover:absolute group-hover:top-[10px] group-hover:left-[10px] group-hover:right-[10px] group-hover:bottom-[10px] group-hover:border-2 group-hover:border-white group-hover:scale-100">
            <span className="text-[32px] absolute hidden text-white font-semibold top-[50px] left-[36%] uppercase group-hover:block">
              Hàng mới về
            </span>
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        className="text-center mb-[30px] hover:text-[#35c0c5] hover:cursor-pointer relative w-full px-5 text-lg font-bold uppercase flex justify-center pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
      >
        Sản phẩm khuyến mại
      </Link>
      {/* chưa xong */}
      <div className="hidden lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 gap-[30px] mb-[30px]">
        {productNew?.map((productItem: any) =>
          productItem.data
            ?.slice(0, 3)
            .map((pItem: Product, index: any) => (
              <ProductItem product={pItem} key={index} />
            ))
        )}
      </div>
      <div className="grid grid-cols-1 lg:hidden md:hidden lg:grid-cols-3 md:grid-cols-3 gap-[30px] mb-[30px]">
        {productNew?.map((productItem: any) =>
          productItem.data
            ?.slice(0, 3)
            .map((pItem: Product, index: any) => (
              <ProductItem product={pItem} key={index} />
            ))
        )}
      </div>
      <div className="w-full mb-[30px]">
        <div className="group relative">
          <img src="/images/banner2.webp" className="" alt="" />
          <div className="transition-all ease-out duration-300 group-hover:absolute group-hover:top-[10px] group-hover:left-[10px] group-hover:right-[10px] group-hover:bottom-[10px] group-hover:border-2 group-hover:border-white group-hover:scale-100">
            <span className="text-[32px] absolute hidden text-white font-semibold top-[50px] left-[36%] uppercase group-hover:block">
              Hàng mới về
            </span>
          </div>
        </div>
      </div>
      <div className="block w-full md:block lg:flex ">
        {/* lg */}
        <div className="block md:block md:w-full lg:block lg:w-[33.333333%] px-[15px]">
          <Link
            href={"/"}
            className="text-center mb-[30px] hover:text-[#35c0c5] hover:cursor-pointer relative w-full px-5 text-lg font-bold uppercase flex justify-center pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
          >
            Sản phẩm nổi bật
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-[30px] mb-[30px]">
            {/* feature */}
            {productFeature?.map((productItem: any) =>
              productItem.data
                ?.slice(0, 1)
                .map((pItem: Product, index: any) => (
                  <ProductItemMini product={pItem} key={index} />
                ))
            )}
          </div>
        </div>
        {/* lg */}
        <div className="block md:block md:w-full lg:block lg:w-[66.666667%] px-[15px]">
          <Link
            href={"/"}
            className="text-center mb-[30px] hover:text-[#35c0c5] hover:cursor-pointer relative w-full px-5 text-lg font-bold uppercase flex justify-center pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
          >
            Sản phẩm mua nhiều
          </Link>
          {/* chưa xong */}
          <div className="hidden md:grid lg:grid grid-cols-2 mb-[30px] gap-[10px] border-b border-[#ebebeb]">
            {productNew?.map((productItem: any) =>
              productItem.data
                ?.slice(0, 3)
                .map((pItem: Product, index: any) => (
                  <ProductItemMini product={pItem} key={index} />
                ))
            )}
          </div>
        </div>
        {/* md */}
      </div>
      <div className="flex lg:hidden md:hidden w-full pr-[15px]  flex-col">
        <span className="text-base uppercase mb-[30px]">Sản phẩm bán chạy</span>
        {/* product */}
        {products?.map((productItem: any) =>
          productItem.data
            ?.slice(0, 3)
            .map((pItem: Product, index: any) => (
              <ProductItemMini product={pItem} key={index} />
            ))
        )}
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
        {products?.map((productItem: any) =>
          productItem.data
            ?.slice(0, 3)
            .map((pItem: Product, index: any) => (
              <ProductItemMini product={pItem} key={index} />
            ))
        )}
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

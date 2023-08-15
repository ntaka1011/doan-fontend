import React, { useContext, useEffect } from "react";
import items from "@/data/sidebar.json";
import SidebarItem from "./SidebarItem";
import ProductItemMini from "./ProductItemMini";
import Link from "next/link";
import Contact from "./Contact";
import Banner from "./Banner";
import New from "./New";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/product";
import { LoadingContext } from "@/context/LoadingContext";

const Sidebar = () => {
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);
  const { getProducts } = useProducts();

  const { data: products, mutate } = getProducts();
  console.log("🚀 ~ file: Sidebar.tsx:19 ~ Sidebar ~ data:", products);

  useEffect(() => {
    loadData();
  }, [products]);

  const loadData = async () => {
    try {
      setOpenLoading();
      await mutate();
    } finally {
      setCloseLoading();
    }
  };
  return (
    <>
      <div className="pr-[15px] mb-[30px]">
        <span className="text-base uppercase font-medium">
          Danh mục sản phẩm
        </span>
        <div className="border-l border-[#ebebeb]">
          {items.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full pr-[15px] flex flex-col mb-[30px]">
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
        <Banner />
        <Link
          href={"/"}
          className="text-base uppercase font-[450px] mb-[30px] hover:text-[#35c0c5]"
        >
          Tin tức
        </Link>
        <New show={false} />
      </div>
    </>
  );
};

export default Sidebar;

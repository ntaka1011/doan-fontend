import Paginate from "@/components/Paginate";
import ProductItem from "@/components/ProductItem";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import items from "@/data/sidebar.json";
import Contact from "@/components/Contact";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/product";
import { LoadingContext } from "@/context/LoadingContext";
import Spinner from "@/components/Spinner";

const Category = () => {
  const { getProducts } = useProducts();
  const { data: productNew } = getProducts({ new: true });
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);
  const [paginateSetup, setPaginateSetup] = useState({
    page: 1,
    page_size: 12,
  });
  const { data: products, mutate } = getProducts({
    limit: paginateSetup.page_size,
    page: paginateSetup.page,
  });
  const [paginate, setPaginate] = useState<{ list: any[]; page_count: number }>(
    { list: [], page_count: 0 }
  );
  useEffect(() => {
    console.log("tee");
    if (Array.isArray(products?.[0].data)) {
      setPaginate({
        list: products?.[0].data,
        page_count: Math.ceil(
          products[0].metaData[0].totalDocuments / paginateSetup.page_size
        ),
      });
    }
  }, [paginateSetup, products]);

  const handlePaginatePageClick = (event: { selected: number }) => {
    setPaginateSetup({ ...paginateSetup, page: event.selected + 1 });
  };

  useEffect(() => {
    loadingData();
  }, []);
  const loadingData = async () => {
    try {
      setOpenLoading();
      await mutate();
    } finally {
      setCloseLoading();
    }
  };
  return (
    <>
      {loading ? <Spinner /> : ""}
      <Wrapper>
        <div className="flex text-sm py-5 px-[15px]">
          <Link
            href={"/"}
            className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
          >
            Trang chủ
          </Link>
          <span className="w-4">/</span>
          <span className="text-[#35c0c5]">Tất cả sản phẩm</span>
        </div>
      </Wrapper>
      <Wrapper className="flex">
        <div className="w-0 hidden md:w-0 md:hidden lg:block lg:w-[25%] mb-[30px]">
          <Sidebar />
        </div>
        <div className="w-full md:w-full lg:w-[75%] px-[15px]">
          <p className="text-base uppercase font-bold mb-[30px]">
            TẤT CẢ SẢN PHẨM
          </p>
          <div className="flex items-center mb-[30px]">
            <span className="mr-[6px]">Sắp xếp:</span>
            <div className="flex border w-[180px]">
              <div className="pl-5 pr-7 w-full h-[34px] flex items-center justify-between group relative">
                <span className="text-[13px]">Mặc định</span>
                <AiOutlineDown className="text-gray-600" size={12} />
                <div className="hidden absolute top-[34px] left-[-1px] w-[180px] z-20 border bg-white group-hover:block">
                  <div className=" text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                    Mặc định
                  </div>
                  <div className=" text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                    A → Z
                  </div>
                  <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                    Z → A
                  </div>
                  <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                    Giá tăng dần
                  </div>
                  <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                    Giá giảm dần
                  </div>
                  <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                    Hàng mới nhất
                  </div>
                  <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                    Hàng cũ nhất
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex lg:flex items-center ml-auto">
              <span className="mr-[6px]">Giá tiền:</span>
              <div className="flex border w-[180px]">
                <div className="pl-5 pr-7 w-full h-[34px] flex items-center justify-between group relative">
                  <span className="text-[13px]">Mặc định</span>
                  <AiOutlineDown className="text-gray-600" size={12} />
                  <div className="hidden absolute top-[34px] left-[-1px] w-[180px] z-20 border bg-white group-hover:block">
                    <div className=" text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                      Dưới 200.000₫
                    </div>
                    <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                      200.000₫ - 300.000₫
                    </div>
                    <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                      300.000₫ - 400.000₫
                    </div>
                    <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                      400.000₫ - 500.000₫
                    </div>
                    <div className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]">
                      Trên 500.000₫
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[30px] mb-[30px]">
            {paginate?.list.map((product: Product, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>

          <Paginate
            pageCount={paginate.page_count}
            onSelectPage={handlePaginatePageClick}
          />
          <div className="block md:block lg:hidden">
            <div className=" mb-[30px]">
              <span className="text-base uppercase font-medium">
                Danh mục sản phẩm
              </span>
              <div className="border-l border-[#ebebeb]">
                {items &&
                  items.map((item) => (
                    <SidebarItem key={item.id} item={item} />
                  ))}
              </div>
            </div>
            <p className="text-base uppercase mb-[30px]">Sản phẩm mới</p>
            {productNew?.slice(0, 3).map((product: Product, index: number) => (
              <ProductItem key={index} product={product} />
            ))}

            <div className="mb-[30px]">
              <Link href={"/"} className="text-base hover:text-[#35c0c5]">
                Xem thêm sản phẩm
              </Link>
            </div>
            <Contact />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Category;

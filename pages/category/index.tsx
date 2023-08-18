import Paginate from "@/components/Paginate";
import ProductItem from "@/components/ProductItem";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import items from "@/data/sidebar.json";
import Select from 'react-select';
import Contact from "@/components/Contact";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/product";
import { LoadingContext } from "@/context/LoadingContext";
import Spinner from "@/components/Spinner";
import optionSort from "@/data/optionSort.json";
import optionPrice from "@/data/optionPrice.json";

const Category = () => {
  const { getProducts, getProductParams } = useProducts();
  const { data: productNew } = getProductParams({ new: true });
  const [sort, setSort] = useState({ sort: "createdAt", order: "asc" });
  console.log("🚀 ~ file: index.tsx:22 ~ Category ~ sort:", sort)
  const [price, setPrice] = useState({ min: 1, max: 999999999 });
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);
  const [paginateSetup, setPaginateSetup] = useState({
    page: 1,
    page_size: 12,
  });
  const sortArray = Object.values(sort);
  const { data: products, mutate } = getProducts({
    sort: sortArray.join(),
    min: price.min,
    max: price.max,
    limit: paginateSetup.page_size,
    page: paginateSetup.page,
  });
  const [paginate, setPaginate] = useState<{ list: any[]; page_count: number }>(
    { list: [], page_count: 0 }
  );
  useEffect(() => {
    if (Array.isArray(products?.[0].data)) {
      setPaginate({
        list: products?.[0].data,
        page_count: Math.ceil(
          products[0].metaData[0]?.totalDocuments / paginateSetup.page_size
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
  const handleChange = (e: any) => {
    setSort({sort: e.value.sort, order: e.value.order})
  }
  const handleChangePrice = (e: any) => {
    setPrice({min: e.value.min, max: e.value.max})
  }
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
          <div className="flex items-center justify-between mb-[30px]">
            <div className="flex items-center">
              <span className="mr-[6px]">Sắp xếp:</span>
              <Select onChange={handleChange} defaultValue={optionSort[0]} options={optionSort}/>
            </div>

            <div className="flex items-center">
              <span className="mr-[6px]">Giá tiền:</span>
              <Select onChange={handleChangePrice} defaultValue={optionPrice[0]} options={optionPrice}/>
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
            {productNew?.slice(0, 3).map((productItem: any, index: number) => (
              <ProductItem product={productItem} key={index} />
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

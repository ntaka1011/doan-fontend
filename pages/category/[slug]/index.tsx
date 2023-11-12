import Paginate from "@/components/Paginate";
import ProductItem from "@/components/ProductItem";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import optionSort from "@/data/optionSort.json";
import optionPrice from "@/data/optionPrice.json";
import items from "@/data/sidebar.json";
import Select from "react-select";
import Contact from "@/components/Contact";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/product";
import { useRouter } from "next/router";
import { useCategory } from "@/hooks/useCategories";
import Modal from "@/components/Modal";
import { OpenContext } from "@/context/OpenContext";
import { LoadingContext } from "@/context/LoadingContext";
import Spinner from "@/components/Spinner";

const Category = () => {
  const router = useRouter();
  const { toggleModal, slug } = useContext(OpenContext);
  const [sort, setSort] = useState({ sort: "createdAt", order: "asc" });
  const [price, setPrice] = useState({ min: 1, max: 9999999999 });
  const { getProducts, getProductParams } = useProducts();
  const { getCategory } = useCategory();
  const { data: productNew } = getProductParams({ new: true });
  const categorySlug = String(router.query.slug);
  const { data: category } = getCategory(categorySlug);
  const sortArray = Object.values(sort);
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);
  const [paginateSetup, setPaginateSetup] = useState({
    page: 1,
    page_size: 9,
  });
  const { data: products, mutate } = getProducts({
    categories: category?._id,
    sort: sortArray.join(),
    min: price.min,
    max: price.max,
    page: paginateSetup.page,
    limit: paginateSetup.page_size,
  });
  useEffect(() => {
    loadingData;
  }, [products]);
  const loadingData = async () => {
    try {
      setOpenLoading();
      await mutate();
    } finally {
      setCloseLoading();
    }
  };

  const [paginate, setPaginate] = useState<{ list: any[]; page_count: number }>(
    { list: [], page_count: 0 }
  );

  const handlePaginatePageClick = (event: { selected: number }) => {
    setPaginateSetup({ ...paginateSetup, page: event.selected + 1 });
  };
  useEffect(() => {
    if (Array.isArray(products?.data)) {
      setPaginate({
        list: products?.data,
        page_count: Math.ceil(
          products.metaData[0]?.totalDocuments / paginateSetup.page_size
        ),
      });
    }
  }, [paginateSetup, products]);
  const handleChange = (e: any) => {
    setSort({ sort: e.value.sort, order: e.value.order });
  };
  const handleChangePrice = (e: any) => {
    setPrice({ min: e.value.min, max: e.value.max });
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
          <span className="text-[#35c0c5]">{category?.name}</span>
        </div>
      </Wrapper>
      <Wrapper className="flex">
        <div className="w-0 hidden md:w-0 md:hidden lg:block lg:w-[25%] mb-[30px]">
          <Sidebar />
        </div>
        <div className="w-full md:w-full lg:w-[75%] px-[15px]">
          <p className="text-base uppercase font-bold mb-[30px]">
            {category?.name}
          </p>
          <div className="flex items-center justify-between mb-[30px]">
            <div className="flex items-center">
              <span className="mr-[6px]">Sắp xếp:</span>
              <Select
                onChange={handleChange}
                defaultValue={optionSort[0]}
                options={optionSort}
              />
            </div>

            <div className="flex items-center">
              <span className="mr-[6px]">Giá tiền:</span>
              <Select
                onChange={handleChangePrice}
                defaultValue={optionPrice[0]}
                options={optionPrice}
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[30px] mb-[30px]">
            {paginate?.list?.map((product: Product, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>

          {paginate?.list?.length > 1 && (
            <Paginate
              pageCount={paginate.page_count}
              onSelectPage={handlePaginatePageClick}
            />
          )}
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
            <div className="grid grid-cols-1 gap-[30px] mb-[30px]">
              {productNew
                ?.slice(0, 3)
                .map((productItem: any, index: number) => (
                  <ProductItem product={productItem} key={index} />
                ))}
            </div>
            <div className="mb-[30px]">
              <Link
                href={`/category`}
                className="text-base hover:text-[#35c0c5]"
              >
                Xem thêm sản phẩm
              </Link>
            </div>
            <Contact />
          </div>
        </div>
        {toggleModal && <Modal slug={slug} />}
      </Wrapper>
    </>
  );
};

export default Category;

import Paginate from "@/components/Paginate";
import ProductItem from "@/components/ProductItem";
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import items from "@/data/sidebar.json";
import ProductItemMini from "@/components/ProductItemMini";
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
  const [price, setPrice] = useState({ min: 1, max: 999999 });
  const { getProducts } = useProducts();
  const { getCategory } = useCategory();
  const { data: productNew } = getProducts({ new: true });
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
  console.log("🚀 ~ file: index.tsx:42 ~ Category ~ products:", products);
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
    if (Array.isArray(products?.[0].data)) {
      setPaginate({
        list: products?.[0].data,
        page_count: Math.ceil(
          products[0].metaData[0]?.totalDocuments / paginateSetup.page_size
        ),
      });
    }
  }, [paginateSetup, products]);
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
          <div className="flex items-center mb-[30px]">
            <span className="mr-[6px]">Sắp xếp:</span>
            <div className="flex border w-[180px]">
              <div className="pl-5 pr-7 w-full h-[34px] flex items-center justify-between group relative">
                <span className="text-[13px]">Mặc định</span>
                <AiOutlineDown className="text-gray-600" size={12} />
                <div className="hidden absolute top-[34px] left-[-1px] w-[180px] z-20 border bg-white group-hover:block">
                  <div
                    onClick={() => setSort({ sort: "createdAt", order: "asc" })}
                    className=" text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                  >
                    Mặc định
                  </div>
                  <div
                    onClick={() => setSort({ sort: "title", order: "asc" })}
                    className=" text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                  >
                    A → Z
                  </div>
                  <div
                    onClick={() => setSort({ sort: "title", order: "desc" })}
                    className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                  >
                    Z → A
                  </div>
                  <div
                    onClick={() => setSort({ sort: "price", order: "desc" })}
                    className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                  >
                    Giá tăng dần
                  </div>
                  <div
                    onClick={() => setSort({ sort: "price", order: "asc" })}
                    className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                  >
                    Giá giảm dần
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
                    <div
                      onClick={() => setPrice({ min: 1, max: 200 })}
                      className=" text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                    >
                      Dưới 200.000₫
                    </div>
                    <div
                      onClick={() => setPrice({ min: 200, max: 300 })}
                      className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                    >
                      200.000₫ - 300.000₫
                    </div>
                    <div
                      onClick={() => setPrice({ min: 300, max: 400 })}
                      className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                    >
                      300.000₫ - 400.000₫
                    </div>
                    <div
                      onClick={() => setPrice({ min: 400, max: 500 })}
                      className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                    >
                      400.000₫ - 500.000₫
                    </div>
                    <div
                      onClick={() => setPrice({ min: 500, max: 99999 })}
                      className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                    >
                      Trên 500.000₫
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[30px] mb-[30px]">
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
            <div className="grid grid-cols-1 gap-[30px] mb-[30px]">
              {productNew
                ?.slice(0, 3)
                .map((product: Product, index: number) => (
                  <ProductItem key={index} product={product} toggleDisplay />
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

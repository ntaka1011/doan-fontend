import Paginate from "@/components/Paginate";
import ProductItem from "@/components/ProductItem";
import Sidebar from "@/components/Sidebar";
import Spinner from "@/components/Spinner";
import Wrapper from "@/components/Wrapper";
import { LoadingContext } from "@/context/LoadingContext";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/product";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Search = () => {
  const { searchProduct } = useProducts();
  const router = useRouter();
  const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });
  const [price, setPrice] = useState({ min: 1, max: 9999999999 });
  const sortArray = Object.values(sort);

  const { data: products, mutate } = searchProduct({
    search: router.query?.keyword,
    sort: sortArray.join(),
    min: price.min,
    max: price.max,
  });
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);
  const [paginateSetup, setPaginateSetup] = useState({
    page: 1,
    page_size: 12,
  });
  const [paginate, setPaginate] = useState<{ list: any[]; page_count: number }>(
    { list: [], page_count: 0 }
  );

  const handlePaginatePageClick = (event: { selected: number }) => {
    setPaginateSetup({ ...paginateSetup, page: event.selected + 1 });
  };

  useEffect(() => {
    if (Array.isArray(products)) {
      setPaginate({
        list: products?.slice(
          (paginateSetup.page - 1) * paginateSetup.page_size,
          paginateSetup.page * paginateSetup.page_size
        ),
        page_count: Math.ceil(products?.length / paginateSetup.page_size),
      });
    }
  }, [paginateSetup, products]);

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
  return (
    <Wrapper className="px-[15px]">
      {loading ? <Spinner /> : ""}
      <div className="flex text-sm py-5">
        <Link
          href={"/"}
          className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
        >
          Trang chủ
        </Link>
        <span className="w-4">/</span>
        <span className="text-[#35c0c5]">Tìm kiếm</span>
      </div>
      {products?.length >= 1 ? (
        <>
          <div className="mb-[30px] p-[15px] bg-[#dff0d8] w-full">
            Có {products?.length} kết quả tìm kiếm được
          </div>

          <div className="w-full flex gap-[30px]">
            <div className="w-[75%] ">
              <div className="flex items-center mb-[30px]">
                <span className="mr-[6px]">Sắp xếp:</span>
                <div className="flex border w-[180px]">
                  <div className="pl-5 pr-7 w-full h-[34px] flex items-center justify-between group relative">
                    <span className="text-[13px]">Mặc định</span>
                    <AiOutlineDown className="text-gray-600" size={12} />
                    <div className="hidden absolute top-[34px] left-[-1px] w-[180px] z-20 border bg-white group-hover:block">
                      <div
                        onClick={() =>
                          setSort({ sort: "createdAt", order: "asc" })
                        }
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
                        onClick={() =>
                          setSort({ sort: "title", order: "desc" })
                        }
                        className="text-[13px] pl-5 pr-7 w-full h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                      >
                        Z → A
                      </div>
                      <div
                        onClick={() =>
                          setSort({ sort: "price", order: "desc" })
                        }
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
              <div className="grid grid-cols-3 gap-[30px]">
                {paginate?.list.map((product: Product, index: number) => {
                  return <ProductItem product={product} key={index} />;
                })}
              </div>

              <Paginate
                pageCount={paginate.page_count}
                onSelectPage={handlePaginatePageClick}
              />
            </div>
            <div className="w-[25%]">
              <Sidebar />
            </div>
          </div>
        </>
      ) : (
        <div className="uppercase text-center mb-[30px] text-lg">
          XIN LỖI, CHÚNG TÔI KHÔNG TÌM THẤY KẾT QUẢ CHO TỪ KHÓA &quot;
          {router.query.keyword}&quot;
        </div>
      )}
    </Wrapper>
  );
};

export default Search;

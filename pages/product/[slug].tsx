/* eslint-disable-next-line @next/next/no-img-element */
import Wrapper from "@/components/Wrapper";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineDown, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ProductItem from "@/components/ProductItem";
import { useRouter } from "next/router";
import { useProducts } from "@/hooks/useProduct";
import { useCategory } from "@/hooks/useCategories";
import { Product } from "@/types/product";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks/useSelector";
import { addCart } from "@/store/cartSlice";
import Spinner from "@/components/Spinner";
import { LoadingContext } from "@/context/LoadingContext";

const Product = () => {
  const [selectSize, setSelectSize] = useState();
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);
  const router = useRouter();
  const slugProduct = router.query.slug;
  const dispatch = useAppDispatch();
  const { getProductBySlug, getProducts } = useProducts();
  const { getCategories } = useCategory();
  const { data: product, mutate } = getProductBySlug(String(slugProduct));

  const { data: category } = getCategories({ _id: product?.categories[0] });

  const { data: products } = getProducts();

  const [quantity, setQuantity] = useState<number>(1);
  console.log("🚀 ~ file: [slug].tsx:30 ~ Product ~ quantity:", quantity);
  const [active, setActive] = useState<number>(1);
  const [color, setColor] = useState<string>("Chọn màu sắc");
  const images = product?.images;

  useEffect(() => {
    loadData();
  }, [product]);

  const loadData = async () => {
    try {
      setOpenLoading();
      await mutate();
    } finally {
      setCloseLoading();
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const updateActive = (id: number) => {
    setActive(id);
  };

  const handleAddProduct = () => {
    if (quantity < product?.quantity) {
      if (!selectSize) {
        toast.error("Làm ơn hãy chọn size", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        dispatch(
          addCart({
            cartItem: product,
            uuid: uuidv4(),
            quantity: quantity,
            color: color,
            selectSize,
            oneQuantityPrice: product?.price,
          })
        );
        toast.success("Sản phẩm đã được thêm vào giỏ hàng", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error(`Sản phẩm chỉ còn lại ${product.quantity}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      {loading ? <Spinner /> : ""}
      <Wrapper className="px-[15px]">
        <div className="flex text-sm py-5">
          <Link
            href={"/"}
            className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
          >
            Trang chủ
          </Link>
          <span className="w-4">/</span>
          {/* <Link href={`/category/${category[0].slug}`}> */}
          <span className="mr-4 hover:text-[#35c0c5]">
            {category && category[0]?.name}
          </span>
          {/* </Link> */}
          <span className="w-4">/</span>
          <span className="text-[#35c0c5]">{product?.title}</span>
        </div>
      </Wrapper>
      <Wrapper className="px-[15px]">
        <div className="block lg:flex w-full">
          <div className="w-full lg:w-[41.666667%] pr-[15px]">
            <Carousel
              infiniteLoop
              showIndicators={false}
              showStatus={false}
              thumbWidth={60}
              className="productCarousel"
            >
              {images?.map((image: any, index: number) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={index} src={image} alt="image" />
              ))}
            </Carousel>
          </div>
          <div className="w-full lg:w-[58.333333%] pl-[15px]">
            <p className="text-2xl font-medium text-[#464646] mb-[10px]">
              {product?.title}
            </p>
            <div className="flex items-center pb-[5px] border-b mb-[15px]">
              <div className="flex items-center">
                <p className="text-sm font-bold mr-[5px]">Thương hiệu: </p>
                <p className="text-sm">{category && category[0]?.name}</p>
              </div>
              <p className="flex justify-center w-4">|</p>
              <div className="flex items-center">
                <p className="text-sm font-bold mr-[5px]">Tình trạng: </p>
                <p className="text-sm">
                  {product?.quantity && product?.quantity >= 1
                    ? "Còn hàng"
                    : "Hết hàng"}
                </p>
              </div>
            </div>
            <div className="flex mb-[15px] items-center">
              <p className="text-[#35c0c5] font-bold text-[26px] leading-5 mr-[10px]">
                {product?.price.toLocaleString("en-US").replace(/,/g, ".")}₫
              </p>

              {product?.original_price && (
                <p className="leading-5 text-[20px] text-slate-500 italic line-through ">
                  {product?.original_price
                    .toLocaleString("en-US")
                    .replace(/,/g, ".")}
                  ₫
                </p>
              )}
            </div>
            <div className="py-[15px]">
              <p className="text-sm">- Bảo hành: 12 tháng</p>
              <p className="text-sm">- Xuất xứ: {product?.origin}</p>
              <p className="text-sm">- Chất liệu: {product?.material}</p>
            </div>
            <div>
              <div className="mt-[10px] flex items-center pb-2">
                <p className="w-[100px] h-10 flex items-center">Màu sắc:</p>
                <div className="pl-5 pr-7 w-[300px] h-[40px] border border-[#eaebf3] flex items-center justify-between group relative">
                  <span className="text-[13px]">{color}</span>
                  <AiOutlineDown className="text-gray-600" size={12} />
                  <div className="hidden absolute top-[39px] left-[-1px] w-[300px] z-20 border bg-white group-hover:block">
                    {product?.color.map((color: string, index: number) => (
                      <div
                        onClick={() => setColor(color)}
                        key={index}
                        className="text-[13px] pl-5 pr-7 w-[300px] h-[34px] flex items-center border-b hover:cursor-pointer hover:text-[#35c0c5]"
                      >
                        {color}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="mt-[10px] relative flex items-center pb-2 ">
                  <p className="w-[100px] h-[45px] flex items-center">
                    Số lượng:
                  </p>
                  <div className="relative">
                    <input
                      className="w-[80px] text-sm text-center h-[45px] py-[5px] text-[#363636] pr-[23px] border outline-none"
                      value={quantity}
                      min={1}
                      max={99}
                      onChange={(e: any) => setQuantity(e.target.value)}
                      type="number"
                      pattern="\d*"
                      maxLength={2}
                    />
                    <button
                      className="w-[25px] h-[23px] border-l flex justify-center items-center text-[#999] border-b absolute top-0 right-0 hover:bg-[#35c0c5] hover:text-white"
                      onClick={handleIncreaseQuantity}
                    >
                      <AiOutlinePlus size={12} />
                    </button>
                    <button
                      className="w-[25px] h-[23px] border-l flex justify-center items-center text-[#999] absolute top-[23px] right-0 hover:bg-[#35c0c5] hover:text-white"
                      onClick={handleDecreaseQuantity}
                    >
                      <AiOutlineMinus size={12} />
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleAddProduct}
                    className="px-[25px] h-[45px] bg-[#35c0c5] text-white text-sm border border-[#35c0c5] hover:bg-white hover:text-[#35c0c5]"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div>
                  <p className="text-sm">
                    Gọi <span className="text-[#35c0c5]">1900 6750</span> để
                    được trợ giúp
                  </p>
                </div>
              </div>
              <div>
                <p className="w-[100px] h-[45px] flex items-center">US SIZE:</p>
                <div className="flex items-center gap-[15px] hover:cursor-pointer">
                  {product?.size.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={`text-sm w-[36px] h-[38px] mx-[5px] my-[6px] border flex justify-center items-center ${
                        active === index ? "bg-[#35c0c5]" : ""
                      }`}
                      onClick={() => {
                        setSelectSize(item?.size);
                        updateActive(index);
                      }}
                    >
                      {item.size}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-[15px] mb-[50px]">
                <Link
                  href={"/choiceSize"}
                  className="px-[10.500px] py-[5.250px] border"
                >
                  Hướng dẫn chọn size
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[100px]">
          <ul className="block text-center lg:flex">
            <li
              className={`py-[10px] px-[30px] uppercase cursor-pointer ${
                active === 1 ? "active" : ""
              }`}
            >
              Thông tin sản phẩm
            </li>
            <li
              className={`py-[10px] px-[30px] border uppercase cursor-pointer ${
                active === 15 ? "active" : ""
              }`}
            >
              Thanh toán vận chuyển
            </li>
            <li
              className={`py-[10px] px-[30px] border uppercase cursor-pointer ${
                active === 16 ? "active" : ""
              }`}
            >
              Đánh giá sản phẩm
            </li>
          </ul>
          <div className="border-t border-[#e1e1e1]">
            <div className="p-[15px]">
              <p className="mb-[15px] text-[13px] text-[#898989]">
                Giày thể thao nam đẹp da màu nâu cao cấp, thanh lịch từ thương
                <br />
                hiệu Converse® Chất liệu giày bằng da bò mềm với chi tiết mũi
                giày
                <br />
                cap-toe Mắt xỏ dây âm với dây cột nylon Lót trong bằng da thoáng
                <br />
                khí tự nhiên Đệm lót giày bằng da bọc thoải mái và hỗ trợ chân
                Đế
                <br />
                ngoài băng cao su hấp thụ sốc tốt và bám tốt trên mọi bề mặt
                <br />
              </p>
              <p className="text-[13px] text-[#898989]">
                Được thành lập vào năm 1978, thương hiệu Nine West xuất phát từ
                địa chỉ ở thành phố New York. Trong 30 năm, Nine West đã phát
                triển và trở thành người đứng đầu trong lĩnh vực thời trang nổi
                tiếng thế giới. Ngày nay, giầy - túi xách - trang sức Nine West
                được yêu mến bởi phụ nữ trên toàn thế giới và được xem như một
                chuyên gia tư vấn đáng tin cậy trong mọi lĩnh vực thời trang,
                bao gồm cả thời trang trẻ em
              </p>
            </div>
          </div>
        </div>
        <Link
          href={"/"}
          className="text-center mb-[30px] hover:text-[#35c0c5] hover:cursor-pointer relative w-full px-5 text-lg font-bold uppercase flex justify-center pb-5 before:absolute before:w-full before:h-[1px] before:left-0 before:bg-[#ebebeb] before:z-999 before:top-[35px] border-b border-[#ebebeb]"
        >
          Sản phẩm liên quan
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-[30px] mb-[30px]">
          {products?.slice(0, 4).map((product: Product, index: number) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Product;

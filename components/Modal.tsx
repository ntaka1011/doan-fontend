import {
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { OpenContext } from "@/context/OpenContext";
import { useProducts } from "@/hooks/useProduct";
import { useCategory } from "@/hooks/useCategories";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks/useSelector";
import { addCart } from "@/store/cartSlice";

interface ModalProps {
  slug: string;
}

const Modal: React.FC<ModalProps> = ({ slug }) => {
  const [selectSize, setSelectSize] = useState();
  const [color, setColor] = useState<string>("Chọn màu sắc");
  const { getProductBySlug } = useProducts();
  const { getCategories } = useCategory();
  const [active, setActive] = useState<number>(1);
  const { data: product } = getProductBySlug(slug);
  const { data: category } = getCategories({ _id: product?.categories[0] });
  console.log("🚀 ~ file: Modal.tsx:22 ~ product:", product);

  const updateActive = (id: number) => {
    setActive(id);
  };
  const images = product?.images;
  const { dispatch: dispatchOpen } = useContext(OpenContext);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleCloseModal = () => {
    dispatchOpen({ type: "CLOSE", payload: false });
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
        handleCloseModal();
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
    <div
      className="
    z-50
    transition
    duration-300
    bg-black
    bg-opacity-80
    flex  
    justify-center
    items-center
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
  "
    >
      <div
        className="
            relative
            w-auto
            mx-auto
            max-w-3xl
            rounded-md
            overflow-hidden
        "
      >
        <div
          className={`
                scale-100
                transform
                duration-300
                relative
                flex-auto
                bg-white
                drop-shadow-md
            `}
        >
          <div className="relative h-full">
            <div className="p-[30px] w-full object-cover h-full flex gap-[30px]">
              <div className="w-[41.666667%] h-full">
                <Carousel
                  infiniteLoop
                  showIndicators={false}
                  showStatus={true}
                  showArrows={false}
                >
                  {images?.map((image: any, index: number) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={index} src={image} alt="image" />
                  ))}
                </Carousel>
              </div>
              <div className="w-[58.333333%] ">
                <div className="mb-[15px]">
                  <p className="text-3xl text-black mb-[15px] font-bold">
                    {product?.title}
                  </p>
                  <div className="flex items-center pb-[5px] border-b mb-[15px]">
                    <div className="flex items-center">
                      <p className="text-sm font-bold mr-[5px]">Thương hiệu:</p>
                      <p className="text-sm">{category && category[0].name}</p>
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
                </div>
                <div className="flex mb-[15px] items-center">
                  <p className="text-[#35c0c5] font-bold text-[26px] leading-5 mr-[10px]">
                    {product?.price}₫
                  </p>
                  {product?.original_price && (
                    <p className="leading-5 text-[16px] text-slate-500 italic line-through ">
                      {product?.original_price}₫
                    </p>
                  )}
                </div>
                <div className="w-full mb-[15px]">
                  <p>- Bảo hành: 12 tháng</p>
                  <p>- Xuất xứ: {product?.origin}</p>
                  <p>- Chất liệu: {product?.metarial}</p>
                </div>
                <div>
                  <div className="mt-[10px] flex items-center pb-2">
                    <p className="w-[100px] h-10 flex items-center">Màu sắc:</p>
                    <div className="pl-5 pr-7 w-[300px] h-[40px] border border-[#eaebf3] flex items-center justify-between group relative">
                      <span className="text-[13px]">{color}</span>
                      <AiOutlineDown className="text-gray-600" size={12} />
                      <div className="hidden absolute top-[39px] left-[-1px] w-[300px] z-20 border bg-white group-hover:block">
                        {product?.color.map((color: any, index: number) => (
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
                  </div>
                  <div>
                    <p className="text-sm">
                      Gọi <span className="text-[#35c0c5]">1900 6750</span> để
                      được trợ giúp
                    </p>
                  </div>
                  <p className="w-[100px] h-[45px] flex items-center">
                    US SIZE:
                  </p>
                  <div className="flex items-center gap-[15px] hover:cursor-pointer">
                    {product?.size.map((item: any, index: number) => (
                      <div
                        key={index}
                        className={`text-sm w-[36px] h-[38px] mx-[5px] my-[6px] border flex items-center ${
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
            <div
              className="
                    cursor-pointer
                    absolute
                    top-3
                    right-3
                    h-10
                    w-10
                    rounded-full
                    bg-black
                    bg-opacity-70
                    flex
                    items-center
                    justify-center
                "
              onClick={handleCloseModal}
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

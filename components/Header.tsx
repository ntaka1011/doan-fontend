/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useMemo, useState } from "react";
import Wrapper from "./Wrapper";
import { AiFillUnlock, AiFillCloseCircle } from "react-icons/ai";
import {
  BsFillCartFill,
  BsFillPersonFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelector";
import { useRouter } from "next/router";
import { deleteCart } from "@/store/cartSlice";
import { convertPrice } from "@/utils/convertPrice";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { user, dispatch: authDispatch } = useContext(AuthContext);
  const [clientRendered, setClientRendered] = useState(false);
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  console.log("🚀 ~ file: Header.tsx:25 ~ Header ~ cartItems:", cartItems)

  useEffect(() => {
    setClientRendered(true);
  }, []);
  const totalPrice = useMemo(() => {
    const total = cartItems?.reduce((total: any, num: any) => {
      return total + num.oneQuantityPrice;
    }, 0);
    return total;
  }, [cartItems]);

  const handleLogout = () => {
    authDispatch({ type: "LOGOUT", payload: null });
    localStorage.clear();
    router.push("/login");
  };

  const handleSearch = (e: any) => {
    if (e.keyCode === 13) {
      router.push({
        pathname: "/search",
        query: { keyword: search },
      });
      setSearch("");
    }
  };
  const handleDelete = (uuid: any) => {
    dispatch(
      deleteCart({
        uuid: uuid,
      })
    );
  };

  return (
    <header className="h-[70px] w-full ">
      <Wrapper className="flex items-center h-full">
        <Link href={"/"}>
          <img src="/images/logo.webp" alt="logo~" />
        </Link>
        <div className="hidden lg:flex ml-auto  items-center px-[15px]">
          <div className="flex px-5 h-[70px] leading-[70px]  border-l items-center">
            <BsTelephoneFill size={17} className="text-[#35c0c5]" />
            <span className="pl-[5px] hover:text-[#35c0c5]">1900 1675</span>
          </div>
          <div className="flex px-5 h-[70px] leading-[70px]  border-l items-center">
            <FaSearch size={17} className="text-[#35c0c5] hover:text-black" />
            <input
              onKeyUp={handleSearch}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm ...."
              className="text-base leading-10 h-10 border-none outline-none ml-[5px] font-normal w-40"
            />
          </div>
          <Link href={user ? "/account" : "/login"}>
            <div className="flex px-5 h-[70px] leading-[70px]  border-l border-r items-center hover:bg-[url('/images/bg-cart.webp')] hover:bg-[#35c0c5] hover:text-white group">
              <BsFillPersonFill
                className="text-[#35c0c5] group-hover:text-white"
                size={17}
              />
              <span className="pl-[5px]">
                {clientRendered && (!user ? "Đăng nhập" : "Tài khoản")}
              </span>
            </div>
          </Link>
          {clientRendered && user ? (
            <div
              onClick={handleLogout}
              className="flex cursor-pointer px-5 h-[70px] leading-[70px] border-r items-center hover:bg-[url('/images/bg-cart.webp')] hover:bg-[#35c0c5] hover:text-white group"
            >
              <AiFillUnlock
                className="text-[#35c0c5] group-hover:text-white"
                size={17}
              />
              <span className="pl-[5px]">Đăng xuất</span>
            </div>
          ) : (
            <Link href={"/register"}>
              <div className="flex px-5 h-[70px] leading-[70px] border-r items-center hover:bg-[url('/images/bg-cart.webp')] hover:bg-[#35c0c5] hover:text-white group">
                <AiFillUnlock
                  className="text-[#35c0c5] group-hover:text-white"
                  size={17}
                />
                <span className="pl-[5px]">Đăng ký</span>
              </div>
            </Link>
          )}

          <div>
            <div className="relative  border-r px-5 h-[70px] leading-[70px] z-50 bg-[url('/images/bg-cart.webp')] bg-[#35c0c5] hover:bg-none hover:bg-white group">
              <Link href={"/cart"}>
                <div className="flex items-center hover:cursor-pointer group-hover:text-[#35c0c5] group-hover:bg-none group-hover:bg-white">
                  <BsFillCartFill />
                  <span className="px-[5px]">
                    {cartItems.length >= 1 ? cartItems.length : "0"}
                  </span>
                  Giỏ hàng
                </div>
              </Link>

              <div className="hidden z-50 absolute right-0 top-[70px] bg-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)] group-hover:md:block hover:md:block">
                <ul className="min-w-[375px] max-w-[625px] px-6 pt-[15px]">
                  <div className="p-[10px] max-h-[310px] overflow-auto">
                    {cartItems?.map((item: any, index: number) => (
                      <li key={index} className=" relative border-b py-5">
                        <div className="flex ">
                          <div className="inline-block w-auto cursor-pointer ">
                            <img
                              src="/images/product1.jpeg"
                              alt="product"
                              className="min-w-[85px] max-h-[95px] object-cover object-center"
                            />
                          </div>
                          <div className="ml-[15px] flex flex-col">
                            <p className="mr-[35px] leading-[20px] text-[#363636] hover:text-[#35c0c5] cursor-pointer">
                              {item?.cartItem?.title}
                            </p>
                            <p className="mt-[5px] text-[#35c0c5] leading-5">
                              {convertPrice(item?.oneQuantityPrice)}
                            </p>
                            <p className="mt-[5px] leading-5 text-[12px] text-slate-500 italic ">
                              Màu sắc: {item?.color}
                            </p>
                            <p className="mt-[5px] leading-5 text-[12px] text-slate-500 italic ">
                              Số lượng: {item?.quantity}
                            </p>
                            <p className="mt-[5px] leading-5 text-[12px] text-slate-500 italic ">
                              Kích thước: {item?.selectSize}
                            </p>
                          </div>
                        </div>
                        <AiFillCloseCircle
                          onClick={() => handleDelete(item.uuid)}
                          className="absolute top-[27px] right-0 text-[#a1a1a1] hover:text-[#35c0c5]"
                        />
                      </li>
                    ))}
                    {cartItems.length >= 1 ? (
                      <>
                        <div className="py-[15px] flex justify-between text-base leading-4 border-b z-50">
                          <span>Tổng cộng</span>
                          <span className="text-[#35c0c5]">
                            {totalPrice
                              .toLocaleString("en-US")
                              .replace(/,/g, ".")}
                            ₫
                          </span>
                        </div>
                        <div className="py-[15px] leading-10">
                          <button className="bg-[#35c0c5] w-full uppercase text-white font-bold border border-[#35c0c5] hover:bg-white hover:text-[#35c0c5]">
                            Tiến hành thanh toán
                          </button>
                        </div>
                      </>
                    ) : (
                      <span>Không có sản phẩm nào</span>
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex lg:hidden ml-auto items-center">
          <Link href={"/"} className="flex items-center">
            <BsFillPersonFill color="#35c0c5" size={20} />
            <span className="hidden md:block ml-[5px]">Đăng nhập</span>
          </Link>
          <span className="px-[15px]">/</span>
          <Link href={"/"} className="flex items-center">
            <AiFillUnlock color="#35c0c5" size={20} />
            <span className="hidden md:block ml-[5px]">Đăng ký</span>
          </Link>
        </div>
      </Wrapper>
    </header >
  );
};

export default Header;

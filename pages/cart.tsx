import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import { useAppSelector } from "@/hooks/useSelector";
import { convertPrice } from "@/utils/convertPrice";
import { instance } from "@/utils/useSWRConfig";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  console.log("🚀 ~ file: cart.tsx:11 ~ Cart ~ cartItems:", cartItems);
  const { user } = useContext(AuthContext);
  const total = cartItems?.reduce((total: any, num: any) => {
    console.log("🚀 ~ file: Header.tsx:24 ~ Header ~ total:", total, num);
    return total + num.oneQuantityPrice;
  }, 0);
  console.log("🚀 ~ file: cart.tsx:16 ~ total ~ total:", total);
  const handlePayment = async () => {
    instance
      .post(`/checkout/payment`, {
        cartItems,
        userId: user?._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      {cartItems.length >= 1 ? (
        <>
          <div className="flex text-sm py-5 px-[15px]">
            <Link
              href={"/"}
              className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
            >
              Trang chủ
            </Link>
            <span className="w-4">/</span>
            <span className="text-[#35c0c5]">Giỏ hàng</span>
          </div>
          <>
            {/* Heading */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* Cart Content */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* cart item */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item: any, index: number) => (
                  <CartItem cartItem={item} key={index} />
                ))}
              </div>
              <div className="flex-[1]">
                <div className="text-lg font-bold">Sumary</div>

                <div className="p-5 my-5 bg-black/[0.5] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      {convertPrice(total)}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    A lightweight Nike ZoomX midsole is combined with increased
                    stack heights to help provide cushioning during extended
                    stretches of running.
                  </div>
                </div>
                {/* button  */}
                <button
                  onClick={handlePayment}
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center gap-2"
                >
                  Checkout
                  {/* {loading && <img src="/spinner.svg" />} */}
                </button>
              </div>
            </div>
          </>
        </>
      ) : (
        <div className="mt-14">
          <div className="flex-[2] flex flex-col items-center pb-[50px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/empty-cart.jpg"
              width={300}
              height={300}
              alt="image"
              className="w-[300px] md:w-[400px] h-[300px] md:h-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Look like you have not added anything in your cart
              <br />
              Go ahead and explore top categories
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;

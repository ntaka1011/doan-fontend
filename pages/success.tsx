import { useAppDispatch, useAppSelector } from "@/hooks/useSelector";
import { removeAllCart } from "@/store/cartSlice";
import Link from "next/link";
import { useEffect } from "react";

const Success = () => {
  const dispatch = useAppDispatch()

  const cartItems = useAppSelector(state => state.cart.cartItems)
  console.log("🚀 ~ file: success.tsx:10 ~ Success ~ cartItems:", cartItems)

  // useEffect(() => {
  //   dispatch(removeAllCart({
  //     uuid: cartItems.map((item) => ({
  //       uuid: item.uuid
  //     }))
  //   }))
  // },[])
  return (
    <div className=" w-full min-h-[650px] flex items-center">
      <div className="w-[600px] rounded-lg p-5 border border-black mx-auto flex items-center flex-col">
        <div className="text-2xl font-bold">Thanks for shopping with us!</div>
        <div className="text-lg font-bold mt-2">
          Your order has been placed successfully.
        </div>
        <div className="text-base mt-5">
          For any product related query, drop an email to
        </div>
        <div className="underline">shoeshopcontact@shop.com</div>

        <Link href="/" className="font-bold mt-5">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;

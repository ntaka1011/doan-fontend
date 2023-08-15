import { useAppDispatch } from "@/hooks/useSelector";
import { deleteCart, updateCart } from "@/store/cartSlice";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItemProps {
  cartItem: any;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  console.log("🚀 ~ file: CartItem.tsx:9 ~ cartItem:", cartItem);
  const dispatch = useAppDispatch();
  const updateCartItem = (e: any, key: string) => {
    dispatch(
      updateCart({
        uuid: cartItem.uuid,
        key,
        value: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      })
    );
  };

  const handleRemoveCart = () => {
    dispatch(
      deleteCart({
        uuid: cartItem.uuid,
      })
    );
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/product2.webp" alt="image" width={120} height={120} />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {cartItem.cartItem.title}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            lop
          </div>

          {/* Price */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            {cartItem.oneQuantityPrice}₫
          </div>
        </div>
        {/* subtitle */}
        <div className="text-sm md:text-md font-medium text-black/[0.5] hidden md:block">
          {cartItem.cartItem.desc}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectSize")}
              >
                {cartItem.cartItem.size.map((item: any, key: number) => (
                  <option
                    key={key}
                    value={item.size}
                    selected={cartItem.selectSize === item.size}
                    disabled={!item.enabled ? true : false}
                  >
                    {item.size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => (
                  <option key={i} value={q} selected={cartItem.quantity === q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Delete */}
          <RiDeleteBin6Line
            onClick={handleRemoveCart}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import Link from "next/link";
import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

interface FooterItemProps {
  title: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mb-[15px] flex items-center justify-between">
        <span className="text-base uppercase text-white">{title}</span>
        <BsFillPlusCircleFill
          className="block md:hidden lg:hidden text-white"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } md:flex lg:flex flex-col overflow-hidden`}
      >
        <Link
          href={"/"}
          className="text-[#959595] text-[13px] leading-[30px] hover:transition-all hover:duration-200 hover:ease-in hover:text-[#35c0c5] hover:pl-[10px]"
        >
          Trang chủ
        </Link>
        <Link
          href={"/"}
          className="text-[#959595] text-[13px] leading-[30px] hover:transition-all hover:duration-200 hover:ease-in hover:text-[#35c0c5] hover:pl-[10px]"
        >
          Giới thiệu
        </Link>
        <Link
          href={"/"}
          className="text-[#959595] text-[13px] leading-[30px] hover:transition-all hover:duration-200 hover:ease-in hover:text-[#35c0c5] hover:pl-[10px]"
        >
          Sản phẩm
        </Link>
        <Link
          href={"/news"}
          className="text-[#959595] text-[13px] leading-[30px] hover:transition-all hover:duration-200 hover:ease-in hover:text-[#35c0c5] hover:pl-[10px]"
        >
          Tin tức
        </Link>
        <Link
          href={"/"}
          className="text-[#959595] text-[13px] leading-[30px] hover:transition-all hover:duration-200 hover:ease-in hover:text-[#35c0c5] hover:pl-[10px]"
        >
          Bản đồ
        </Link>
        <Link
          href={"/contact"}
          className="text-[#959595] text-[13px] leading-[30px] hover:transition-all hover:duration-200 hover:ease-in hover:text-[#35c0c5] hover:pl-[10px]"
        >
          Liên hệ
        </Link>
      </div>
    </>
  );
};

export default FooterItem;

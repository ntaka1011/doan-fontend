import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { MdLocationOn } from "react-icons/md";
import { BsFillPersonFill, BsFillPlusCircleFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import {
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import FooterItem from "./FooterItem";

const dataItem = [
  { id: 1, title: "Về Chúng tôi" },
  { id: 2, title: "Dịch vụ" },
  { id: 3, title: "Liên hệ" },
];

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[url('/images/bg-cart.webp')] bg-[#363636]">
      <Wrapper className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#959595]">
        <div className="px-[15px]  ">
          <img
            src="/images/logo.webp"
            alt="logo~"
            className="mt-[30px] mb-[15px]"
          />
          <div className="flex mb-[15px]">
            <MdLocationOn className="text-[#35c0c5]" size={30} />
            <span className="ml-[10px] text-[13px] text-[#959595]">
              Tầng 6,tòa nhà Ladeco,266 Đội Cấn,Hà Nội,Việt Nam, Hà Nội,
            </span>
          </div>
          <div className="flex mb-[15px] items-center">
            <BsFillPersonFill className="text-[#35c0c5]" size={20} />
            <span className="ml-[10px] text-[13px] text-[#959595]">
              1900 6750
            </span>
          </div>
          <div className="flex mb-[15px] items-center ">
            <FaEnvelope className="text-[#35c0c5]" size={20} />
            <span className="ml-[10px] text-[13px] text-[#959595]">
              nguyenviethung093@gmail.com
            </span>
          </div>
        </div>

        {dataItem.map((item) => (
          <div className="px-[15px] pt-[50px]" key={item.id}>
            <FooterItem title={item.title} />
          </div>
        ))}
      </Wrapper>
      <Wrapper className="py-5">
        <div className="flex">
          <span className="text-[#959595]">
            © Bản quyền thuộc về{" "}
            <span className="text-[#35c0c5]">Avent Team</span> | Cung cấp bởi{" "}
            <span className="text-[#35c0c5]">Sapo</span>
          </span>

          <div className="ml-auto flex items-center">
            <p className="text-sm text-[#959595] mr-[7px]">Follow us</p>
            <FaFacebookF className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
            <AiOutlineTwitter className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
            <AiOutlineGoogle className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
            <AiOutlineInstagram className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;

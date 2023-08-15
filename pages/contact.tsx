import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <Wrapper>
      <div className="flex text-sm py-5 px-[15px]">
        <Link
          href={"/"}
          className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
        >
          Trang chủ
        </Link>
        <span className="w-4">/</span>
        <span className="text-[#35c0c5]">Liên hệ</span>
      </div>
      <div className="w-full flex gap-[30px]">
        <div className="w-[66.666667%] px-[15px]">
          <p className="text-[20px] mb-[15px]">Liên hệ với chúng tôi</p>
          <p className="text-[14px] text-[#898989] mb-[15px]">
            Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi chúng
            tôi.Chúng tôi sẽ trả lời bạn sau khi nhận được
          </p>
          <form>
            <label className="mb-[5px]">
              Họ và tên <span className="text-red-700">*</span>
            </label>
            <input className="w-full h-10 px-[15px] mb-[30px] outline-none border border-[#e1e1e1] focus:border-[#f7f7f7]" />
            <label className="mb-[5px]">
              Email <span className="text-red-700">*</span>
            </label>
            <input className="w-full h-10 px-[15px] mb-[30px] outline-none border border-[#e1e1e1] focus:border-[#f7f7f7]" />
            <label className="mb-[5px]">
              Nội dung <span className="text-red-700">*</span>
            </label>
            <textarea
              className="w-full p-[10px] text-[#898989] mb-[15px] outline-none border border-[#e1e1e1] focus:border[#f7f7f7]"
              rows={5}
            />
            <button className="px-[25px] bg-[#35c0c5] text-white h-10 mb-24">
              Gửi tin nhắn
            </button>
          </form>
        </div>
        <div className="w-[33.333333%] px-[15px]">
          <div className="">
            <img
              src="/images/logo.webp"
              alt="logo~"
              className="mb-[15px] w-full"
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

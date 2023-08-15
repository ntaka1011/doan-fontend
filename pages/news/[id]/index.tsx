import New from "@/components/New";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";
import {
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFillClockFill, BsFillPersonFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const NewId = () => {
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
        <span className="mr-4">Tin tức nổi bật</span>
        <span className="w-4">/</span>
        <span className="text-[#35c0c5]">
          Mẫu giày thể thao thịnh hành trên Instagram đầu năm 2016
        </span>
      </div>
      <div className="flex w-full">
        <div className="w-[25%] px-[15px]">
          <Link
            href={"/"}
            className="text-base uppercase font-[450px] block mb-[30px] hover:text-[#35c0c5]"
          >
            Tin tức
          </Link>
          <New show={false} />
        </div>
        <div className="w-[75%] px-[15px]">
          <img src="/images/5.webp" className="w-full mb-[15px]" />
          <p className="mb-[15px] text-lg font-semibold">
            Mẫu giày thể thao thịnh hành trên Instagram đầu năm 2016
          </p>
          <div className="items-center gap-5 flex mb-5">
            <div className="flex items-center">
              <BsFillPersonFill className="text-[#35c0c5]" />
              <span className="ml-[6px] text-[13px] text-[#898989]">
                Nguyễn Ngọc Dũng
              </span>
            </div>
            <div className="flex items-center">
              <BsFillClockFill className="text-[#35c0c5]" />
              <span className="ml-[6px] text-[13px] text-[#898989]">
                28, June, Năm 2016
              </span>
            </div>
          </div>
          <div className="pb-5 mb-5 border-b border-[#e1e1e1]">
            <p className="text-md">
              Ngày nay, Instagram đã trở thành một công cụ cập nhật xu hướng
              thời trang nhanh hơn cả các show thời trang truyền thống hoặc các
              chương trình dự đoán trào lưu thời trang sắp tới. Chúng ta đã thấy
              rất nhiều túi xách, giày dép, áo khoác và ti tỉ các phụ kiện thời
              trang lan truyền nhanh chóng nhờ vào phương tiện truyền thông này.
              Chỉ trong vài tuần đầu tiên của năm 2016 mà đã xuất hiện vài kiểu
              giày thể thao gây chú ý. Có một sự thật thú vị về giày sneaker là
              thường chúng không phải là thiết kế quá mới lạ, mà được hồi sinh
              bởi vì được diện đúng người. Mẫu giày đặc biệt bên dưới đang vô
              cùng thịnh hành trên news feed của Instagram gần đây mà chúng tôi
              sẽ giới thiệu đến các bạn. Có lẽ bởi vì chúng tôn lên vẻ đẹp của
              trang phục ở nhiều phong cách đa dạng, hoặc có thể vì đang là trào
              lưu; nhưng dù bất kì lý do gì thì về cơ bản những đôi giày này vẫn
              rất hợp thời trang, dễ chịu và dễ mang.
            </p>
          </div>
          <div className="py-[10px] border-b border-[#e1e1e1]">
            <div className="flex items-center">
              <div className="flex items-center px-[15px] mb-[15px] gap-[10px]">
                <span className="text-sm font-bold">TAGS: </span>
                <p className="hover:text-[#35c0c5] text-sm">Giày nữ</p>
              </div>
              <div className="ml-auto flex items-center">
                <p className="text-sm">Chia sẻ bài viết:</p>
                <FaFacebookF className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
                <AiOutlineTwitter className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
                <AiOutlineGoogle className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
                <AiOutlineInstagram className="text-[#959595] hover:text-[#35c0c5] hover:cursor-pointer mx-[7px]" />
              </div>
            </div>
          </div>
          <div className="my-5 mb-[30px]">
            <p className="text-base">Viết bình luận</p>
          </div>
          <form>
            <input
              className="w-full p-[10px] text-[#898989] mb-[15px] outline-none border border-[#e1e1e1]"
              placeholder="Họ Tên"
            />
            <input
              className="w-full p-[10px] text-[#898989] mb-[15px] outline-none border border-[#e1e1e1]"
              placeholder="email@gmail.com"
              type="email"
            />
            <textarea
              className="w-full p-[10px] text-[#898989] mb-[15px] outline-none border border-[#e1e1e1]"
              placeholder="Content"
              rows={6}
            />
            <button className="px-[25px] bg-[#35c0c5] text-white h-10 mb-24">
              Gửi bình luận
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewId;

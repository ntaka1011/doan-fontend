import New from "@/components/New";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";
import { BsFillClockFill, BsFillPersonFill } from "react-icons/bs";

const News = () => {
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
        <span className="text-[#35c0c5]">Tin tức nổi bật</span>
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
          <p className="text-base uppercase font-bold mb-[30px]">Tin tức</p>
          <div className="flex w-full gap-[30px]">
            <div className="w-[66.666667%] relative group">
              <Link href={"/"}>
                <img src="/images/5.webp" className="w-full" />
              </Link>
              <div className="absolute bottom-[60px] bg-black/80 w-full p-[15px]">
                <p className="text-sm text-white">
                  Chắc chắn không thể có sao Hàn nào giống Chi Pu bằng ca sĩ này
                </p>
                <div className="hidden items-center gap-2 group-hover:flex group-hover:transition-all">
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
                <p className="text-[#898989] text-sm leading-5 hidden group-hover:flex group-hover:transition-all">
                  Là một trong những sao trẻ 9X được yêu thích hàng đầu showbiz
                  Việt, Chi Pu không chỉ năng nổ...
                </p>
              </div>
            </div>
            <div className="w-[33.333333%]">
              <div className="relative group mb-[30px]">
                <Link href={"/"}>
                  <img src="/images/2.webp" className="w-full" />
                </Link>
                <div className="absolute bottom-0 bg-black/80 w-full p-[15px]">
                  <p className="text-sm text-white">
                    Ngắm những mẫu giày mới lên kệ cuối tháng 3/2016
                  </p>
                  <div className="hidden items-center gap-2 group-hover:block group-hover:transition-all">
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
                  <p className="text-[#898989] text-sm leading-5 hidden group-hover:flex group-hover:transition-all">
                    Ngắm những mẫu giày mới lên kệ trong ngày cuối tháng 3/2016,
                    tiếp
                  </p>
                </div>
              </div>
              <div className="relative group mb-[30px]">
                <Link href={"/"}>
                  <img src="/images/4.webp" className="w-full" />
                </Link>
                <div className="absolute bottom-0 bg-black/80 w-full p-[15px]">
                  <p className="text-sm text-white">
                    5 mẫu giày sneaker nữ đẹp dành cho Xuân-Hè 2016
                  </p>
                  <div className="hidden items-center gap-2 group-hover:block group-hover:transition-all">
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
                  <p className="text-[#898989] text-sm leading-5 hidden group-hover:flex group-hover:transition-all">
                    Bởi vậy, việc giày sneaker nữ “ngự trị” suốt một thập kỷ qua
                    cũng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-[30px] mb-5">
            <Link href={"/"} className="block">
              <img src="/images/1.webp" className="w-[255px]" />
            </Link>
            <div className="">
              <Link href={"/"} className="block mb-[15px] hover:text-[#35c0c5]">
                <p>Mẫu giày thể thao thịnh hành trên Instagram đầu năm 2016</p>
              </Link>
              <div className="items-center gap-[10px] flex mb-5">
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
              <p className="text-[#898989] text-sm">
                Ngày nay, Instagram đã trở thành một công cụ cập nhật xu hướng
                thời trang nhanh hơn cả các show...
              </p>
            </div>
          </div>
          <div className="w-full flex gap-[30px] mb-5">
            <Link href={"/"} className="block">
              <img src="/images/3.webp" className="w-[255px]" />
            </Link>
            <div className="">
              <Link href={"/"} className="block mb-[15px] hover:text-[#35c0c5]">
                <p>Xu hướng giày được dự đoán sẽ nổi như cồn trong năm 2016</p>
              </Link>
              <div className="items-center gap-[10px] flex mb-5">
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
              <p className="text-[#898989] text-sm">
                Những đôi giày dường như chưa bao giờ đánh mất vị trí quan trọng
                trong thế giới phụ kiện của...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;

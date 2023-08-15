import React from "react";
import { BsFillPersonFill, BsFillClockFill } from "react-icons/bs";

const NewItem = () => {
  return (
    <div className="mr-[30px]">
      <img src="/images/5.webp" className="w-full mb-5" />
      <span className="text-base mb-[15px]">
        Chắc chắn không thể có sao Hàn nào giống Chi Pu bằng ca sĩ này
      </span>
      <div className="mb-5 mt-[15px]">
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
      <div>
        <span className="text-[13px] text-[#898989]">
          Là một trong những sao trẻ 9X được yêu thích hàng đầu showbiz Việt,
          Chi Pu không chỉ năng nổ trong nhiều lĩnh vực mà còn sở hữu khuôn
          mặt...
        </span>
      </div>
    </div>
  );
};

export default NewItem;

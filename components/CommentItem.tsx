/* eslint-disable @next/next/no-img-element */
import { convertDate } from "@/utils/convertPrice";
import React from "react";

type Props = {
  row: any;
};

const CommentItem = ({ row }: Props) => {
  return (
    <div>
      <div className="mb-[30px] pb-5 flex flex-row items-start">
        <img
          src="/assets/images/avatar/avatar_1.jpg"
          alt="111"
          className="w-[80px] h-20 mr-3"
        />
        <div className="pl-[10px] w-[calc(100% - 95px)]">
          <p className="text-[#363636] font-bold m-0">
            <strong>{row.name}</strong>
          </p>
          <span className="py-[5px] text-[#b0b0b0] text-xs">
            {convertDate(row.createdAt)}
          </span>
          <p className="mb-[15px] text-[#707070]">{row.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

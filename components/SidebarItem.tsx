import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineRight, AiFillStar } from "react-icons/ai";

interface SidebarItemProps {
  item: any;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center relative  hover:text-[#35c0c5] hover:cursor-pointer">
        <Link
          href={`/category/${item.slug}`}
          className="py-[10px] pl-[25px] pr-4 before:border-b before:w-[17px] before:absolute before:top-[23px] before:left-0"
        >
          {item.title}
        </Link>

        <AiOutlineRight
          className={`${open ? "rotate-45" : ""}`}
          size={12}
          fontWeight={"bold"}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className={`${open ? "h-auto" : "h-0"} overflow-hidden`}>
        {item.childrens.map((child: any) => (
          <div
            key={child.id}
            className=" py-[10px] pl-[25px] pr-4 flex items-center gap-[10px] text-[#898989] text-[13px]  hover:text-[#35c0c5] hover:cursor-pointer"
          >
            <AiFillStar />
            <Link href={`/category/${child.slug}`}>{child.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarItem;

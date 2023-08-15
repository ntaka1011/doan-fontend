import React from "react";

const Banner = () => {
  return (
    <div className="w-full mb-[30px]">
      <div className="group relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/banner-qc.webp" className="" alt="" />
        <div className="transition-all ease-out duration-300 group-hover:absolute group-hover:top-[10px] group-hover:left-[10px] group-hover:right-[10px] group-hover:bottom-[10px] group-hover:border-2 group-hover:border-white group-hover:scale-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/text-banner.webp"
            alt=""
            className="hidden absolute top-[37%] left-[18%] group-hover:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

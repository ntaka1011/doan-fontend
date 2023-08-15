import React from "react";

const Contact = () => {
  return (
    <div className="p-[15px] w-full bg-[url('/images/bg-cart.webp')] bg-[#35c0c5] mb-[30px]">
      <div className="flex">
        <img src="/images/feature1.webp" className="w-[48px]" />
        <div className="ml-5 flex flex-col">
          <span>Hỗ trợ trực tuyến</span>
          <span className="text-lg font-semibold mt-[-5px]">1900 6750</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

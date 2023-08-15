import Wrapper from "@/components/Wrapper";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";

const Page = () => {
  const { user } = useContext(AuthContext);

  return (
    <Wrapper>
      <div className="flex text-sm py-5">
        <Link
          href={"/"}
          className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
        >
          Trang chủ
        </Link>
        <span className="w-4">/</span>
        <span className="text-[#35c0c5]">Trang khách hàng</span>
      </div>
      <div className="w-full flex gap-[30px] mb-[30px]">
        <div className="w-[25%]">
          <h1 className="uppercase mb-[7px] text-lg">Trang tài khoản</h1>
          <div className="flex mb-7">
            <span className="text-sm font-bold">Xin chào,&nbsp;</span>
            <span className="text-[#35c0c5] text-sm font-bold">
              {user.lastName}&nbsp;
              {user.firstName}
            </span>
          </div>
          <div className="">
            <button className="text-[#35c0c5] mb-7">
              Thông tin khách hàng
            </button>
            <Link
              href={"/account/order"}
              className="text-black hover:text-[#35c0c5] mb-7 block"
            >
              Đơn hàng của bạn
            </Link>
            <Link
              href={"/account/changepassword"}
              className="text-black hover:text-[#35c0c5] mb-7 block"
            >
              Đổi mật khẩu
            </Link>
            <button className="text-black hover:text-[#35c0c5] mb-7">
              Đăng xuất
            </button>
          </div>
        </div>
        <div className="w-[75%]">
          <h1 className="uppercase mb-[27px] text-lg">Thông tin tài khoản</h1>
          <p className="mb-[15px]">
            <span className="text-sm font-bold">Họ tên:</span> {user.lastName}
            &nbsp;
            {user.firstName}
          </p>
          <p className="mb-[15px]">
            <span className="text-sm font-bold">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;

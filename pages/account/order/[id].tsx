import Wrapper from "@/components/Wrapper";
import { AuthContext } from "@/context/AuthContext";
import { useOrder } from "@/hooks/useOrder";
import { convertPrice } from "@/utils/convertPrice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const Page = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { getOrder } = useOrder();

  const { data } = getOrder(String(router.query?.id));

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
        <span className="text-[#35c0c5]">Đơn hàng</span>
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
          <h2 className=" mb-[27px] text-[19px]">Chi tiết đơn hàng</h2>
          <div className="flex items-center gap-[35px]">
            <div className="flex items-center">
              <p>Trạng thái thanh toán:&nbsp;</p>
              <p className="text-[#E49C06] font-extrabold">Chưa thanh toán</p>
            </div>
            <div className="flex items-center">
              <p>Trạng thái vận chuyển:&nbsp;</p>
              <p
                className={`${data?.status === "Pending"
                  ? "text-[#FF0000]"
                  : "text-green-500"
                  } font-extrabold`}
              >
                {data?.status === "Pending" ? "Chưa giao hàng" : "Đã giao hàng"}
              </p>
            </div>
          </div>
          <p className="pl-5 mb-[6px] uppercase">Địa chỉ giao hàng</p>
          <div className="px-5 py-[15px] border rounded-md mb-6">
            <p className="font-bold mb-2">
              {user.lastName}&nbsp;
              {user.firstName}
            </p>
            <p className="mb-2">
              Địa chỉ:&nbsp; {data?.shipping.address.city},
              {data?.shipping.address.line2},{data?.shipping.address.country}
            </p>
            <p className="mb-2">Số điện thoại:&nbsp; {data?.shipping.phone}</p>
          </div>

          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sản phẩm
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Đơn giá
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Số lượng
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tổng
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data?.orderItems.map((orderItem: any, index: number) => {
                        return (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={orderItem?.product.images[0]}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {orderItem.product.title}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {orderItem.color}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {convertPrice(orderItem.product.price)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                              {orderItem.quantity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {convertPrice(orderItem.product.price * orderItem.quantity)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                  <div className=" text-gray-500 dark:text-gray-400">
                    <div className="flex justify-end p-5 pr-[75px]">
                      <p className="mr-[30px] text-base text-black">
                        Phí vận chuyển
                      </p>
                      <p className="text-base text-black">
                        {data?.subTotal === data?.total ? "0₫" : "20.000₫"}
                      </p>
                    </div>
                    <div className="flex justify-end items-center p-5 pr-[75px]">
                      <p className="mr-[30px] text-base text-black">
                        Tổng tiền
                      </p>
                      <p className="text-[19px] font-bold text-[#CA170E]">
                        {convertPrice(data?.total)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;

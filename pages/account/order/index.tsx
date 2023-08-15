import Wrapper from "@/components/Wrapper";
import { AuthContext } from "@/context/AuthContext";
import { useOrder } from "@/hooks/useOrder";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image: "https://bit.ly/33HnjK0",
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com",
    image: "https://bit.ly/3I9nL2D",
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com",
    image: "https://bit.ly/3vaOTe1",
  },
  // More people...
];
const Page = () => {
  const { user } = useContext(AuthContext);
  const { getOrderUser } = useOrder();
  const router = useRouter();
  const { dispatch } = useContext(AuthContext);
  const { data } = getOrderUser(user?._id);
  console.log("🚀 ~ file: order.tsx:38 ~ Page ~ data:", data);

  const handleLogout = () => {
    console.log("LOALOAL");
    dispatch({ type: "LOGOUT", payload: null });
    localStorage.clear();
    router.push("/login");
  };
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
            <Link
              href={`/account`}
              className="text-black mb-7 block hover:text-[#35c0c5] "
            >
              Thông tin khách hàng
            </Link>
            <Link
              href={"/account/order"}
              className=" text-[#35c0c5] mb-7 block"
            >
              Đơn hàng của bạn
            </Link>
            <Link
              href={"/account/changepassword"}
              className="text-black hover:text-[#35c0c5] mb-7 block"
            >
              Đổi mật khẩu
            </Link>
            <button
              onClick={handleLogout}
              className="text-black hover:text-[#35c0c5] mb-7"
            >
              Đăng xuất
            </button>
          </div>
        </div>
        <div className="w-[75%]">
          <h1 className="uppercase mb-[27px] text-lg">Đơn hàng của bạn</h1>
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
                          Ngày
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Dịa chỉ
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        ></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data?.map((orderItem: any, index: number) => {
                        console.log(
                          "🚀 ~ file: order.tsx:119 ~ {data?.map ~ orderItem:",
                          orderItem.shipping.address.city
                        );
                        const dateString = orderItem.createdAt;
                        const date = new Date(dateString);
                        const year = date.getFullYear();
                        const month = (date.getMonth() + 1)
                          .toString()
                          .padStart(2, "0");
                        const day = date.getDate().toString().padStart(2, "0");
                        const formattedDate = `${year}/${month}/${day}`;
                        console.log(
                          "test",
                          data.cartItem?.shipping.address.city
                        );
                        return (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formattedDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {orderItem.shipping.address.city},
                              {orderItem.shipping.address.line2},
                              {orderItem.shipping.address.country}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {orderItem.total.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5
                              font-semibold rounded-full ${
                                orderItem.status === "Pending"
                                  ? "bg-red-500 text-white"
                                  : "bg-green-800"
                              }`}
                              >
                                {orderItem.status === "Pending"
                                  ? "Pending"
                                  : "Active"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <Link
                                href={`/account/order/${orderItem._id}`}
                                className="hover:text-[#35c0c5]"
                              >
                                Xem chi tiết
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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

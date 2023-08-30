import Wrapper from "@/components/Wrapper";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface PasswordProps {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
}


const Page = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // ** useForm
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string()
      .required("New Password is required")
      .min(6, "Password min 6 charactor"),
    repeatPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('newPassword')], 'Passwords does not match'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } =
    useForm<PasswordProps>(formOptions);
  const { errors } = formState;

  // ** handleSubmit
  const handleChangePassword = (data: PasswordProps) => {
    console.log(data);
  }

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
          <h1 className=" mb-[27px] uppercase text-lg">Đổi mật khẩu</h1>
          <form onClick={handleSubmit(handleChangePassword)}>
            <div className="mb-[40px]">
              <div className="mb-2 flex flex-col">
                <label htmlFor="" className="mb-2 text-sm font-bold">
                  Mật khẩu cũ <span className="text-red-600">*</span>
                </label>
                <input
                  className="h-[38px] w-[400px] px-5 outline-none border border-[#e1e1e1] mb-2"
                  type="password"
                  {...register("oldPassword", { required: true })}
                />
                {errors.oldPassword && (
                  <span className="text-red-600">{errors.oldPassword?.message}</span>
                )}
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="" className="mb-2 text-sm font-bold">
                  Mật khẩu mới <span className="text-red-600">*</span>
                </label>
                <input
                  className="h-[38px] w-[400px] px-5 outline-none border border-[#e1e1e1] mb-2"
                  type="password"
                  {...register("newPassword", { required: true })}
                />
                {errors.newPassword && (
                  <span className="text-red-600">{errors.newPassword?.message}</span>
                )}
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="" className="mb-2 text-sm font-bold">
                  Xác nhận lại mật khẩu <span className="text-red-600">*</span>
                </label>
                <input
                  className="h-[38px] w-[400px] px-5 outline-none border border-[#e1e1e1] mb-2"
                  type="password"
                  {...register("repeatPassword", { required: true })}
                />
                {errors.repeatPassword && (
                  <span className="text-red-600">{errors.repeatPassword?.message}</span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="px-5 h-[38px] text-white bg-[#35c0c5] border border-[#35c0c5] uppercase mb-[100px]"
            >
              Đặt lại mật khẩu
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;

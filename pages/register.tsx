import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import { LoadingContext } from "@/context/LoadingContext";
import { AuthContext } from "@/context/AuthContext";

interface RegisterProps {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
}
const Register = () => {
  const route = useRouter();
  const { user } = useContext(AuthContext);
  const { createUser } = useUser();
  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    firstName: Yup.string()
      .required("First name is required")
      .min(3, "Firstname min 3 charactor"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(3, "Lastname min 3 charactor"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password min 6 charactor"),
    phoneNumber: Yup.string()
      .required("Phone is required")
      .min(9, "Must be more than 9 characters")
      .typeError("That doesn't look like a phone number")
      .matches(phoneRegExp, "Phone number is not valid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } =
    useForm<RegisterProps>(formOptions);
  const { errors } = formState;
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);

  const handleRegister = async (data: RegisterProps) => {
    try {
      setOpenLoading();
      const res = await createUser(data);
      if (res.status === 200) {
        toast.success("You have successfully registered!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        route.push("/login");
        setCloseLoading();
      } else {
        toast.error("Register error. Please try again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Register error. Please try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  useEffect(() => {
    if (Object.keys(user).length !== 0)
      route.push('/');
  }, [route, user])
  return (
    <Wrapper>
      {loading ? <Spinner /> : ""}
      <div className="flex text-sm py-5 px-[15px]">
        <Link
          href={"/"}
          className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
        >
          Trang chủ
        </Link>
        <span className="w-4">/</span>
        <span className="text-[#35c0c5]">Đăng ký tài khoản</span>
      </div>
      <div className="w-full mb-[30px] text-sm text-black text-center">
        <span>Thông tin đăng ký</span>
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="w-full block lg:flex gap-[30px] px-[15px]">
          <div className="w-[100%] lg:w-[50%]">
            <div className="mb-2">
              <label htmlFor="" className="mb-2 text-sm font-bold">
                Họ <span className="text-red-600">*</span>
              </label>
              <input
                className="h-[38px] w-full px-5 outline-none border border-[#e1e1e1]"
                placeholder="Họ"
                type="text"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-red-600">{errors.lastName?.message}</span>
              )}
              <div className="mb-2 mt-5">
                <label htmlFor="" className="mb-2 text-sm font-bold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  className="h-[38px] w-full px-5 outline-none border border-[#e1e1e1]"
                  placeholder="Email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email?.message}</span>
                )}
                <div className="mb-2 mt-5">
                  <label htmlFor="" className="mb-2 text-sm font-bold">
                    Mật khẩu <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="h-[38px] w-full px-5 outline-none border border-[#e1e1e1]"
                    placeholder="Mật khẩu"
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <div className="mb-2 ">
              <label htmlFor="" className="mb-2 text-sm font-bold">
                Tên <span className="text-red-600">*</span>
              </label>
              <input
                className="h-[38px] w-full px-5 outline-none border border-[#e1e1e1]"
                placeholder="Tên"
                type="text"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-600">
                  {errors.firstName?.message}
                </span>
              )}
              <div className="mb-2 mt-5">
                <label htmlFor="" className="mb-2 text-sm font-bold">
                  Số điện thoại <span className="text-red-600">*</span>
                </label>
                <input
                  className="h-[38px] w-full px-5 outline-none border border-[#e1e1e1]"
                  placeholder="Số điện thoại"
                  type="number"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && (
                  <span className="text-red-600">
                    {errors.phoneNumber?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-5 mt-5 h-[38px] mx-[15px] text-white bg-[#35c0c5] border border-[#35c0c5] uppercase mb-[100px]"
        >
          Đăng ký
        </button>
        <span>Hoặc</span>
        <Link href={"/login"}>
          <button className="px-5 h-[38px] ml-[15px] text-white bg-[#35c0c5] border border-[#35c0c5] uppercase mb-[100px]">
            Đăng nhập
          </button>
        </Link>
      </form>
    </Wrapper>
  );
};

export default Register;

import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@/hooks/useUser";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import Spinner from "@/components/Spinner";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const { user, dispatch } = useContext(AuthContext);
  console.log("🚀 ~ file: login.tsx:20 ~ Login ~ user:", user);
  const { loginUser } = useUser();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password min 6 charactor"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } =
    useForm<LoginProps>(formOptions);
  const { errors } = formState;
  const router = useRouter();
  const { loading, setOpenLoading, setCloseLoading } =
    useContext(LoadingContext);

  const handleSingUp = async (data: LoginProps) => {
    dispatch({ type: "LOGIN_START" });
    console.log("🚀 ~ file: login.tsx:31 ~ handleSingUp ~ data:", data);
    try {
      setOpenLoading();
      const res = await loginUser(data);
      console.log("🚀 ~ file: login.tsx:40 ~ handleSingUp ~ res:", res);

      if (res?.status === 200) {
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
        const { accessToken, refreshToken, ...userAuth } = res;
        console.log(
          "🚀 ~ file: login.tsx:52 ~ handleSingUp ~ userAuth:",
          userAuth
        );
        dispatch({ type: "LOGIN_SUCCESS", payload: userAuth });
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        router.push("/");
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
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <div className="flex text-sm py-5 px-[15px]">
        <Link
          href={"/"}
          className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
        >
          Trang chủ
        </Link>
        <span className="w-4">/</span>
        <span className="text-[#35c0c5]">Đăng nhập</span>
      </div>
      <div className="w-full md:block lg:flex">
        <div className="w-full lg:w-[50%] px-[15px]">
          <span className="mb-[30px] block text-sm text-center">
            Đăng nhập tài khoản
          </span>
          <form onSubmit={handleSubmit(handleSingUp)}>
            <div className="mb-2">
              <label htmlFor="" className="mb-2 text-sm font-bold">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                className="h-[38px] w-full px-5 outline-none border border-[#e1e1e1] mb-2"
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email?.message}</span>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="" className="mb-2 text-sm font-bold">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                className="h-[38px] w-full px-5 outline-none border border-[#e1e1e1] mb-2"
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">{errors.password?.message}</span>
              )}
            </div>
            <Link href={"/"} className="text-sm text-[#337ab7] mb-[10px] block">
              Quên mật khẩu
            </Link>
            <button
              type="submit"
              className="px-5 h-[38px] text-white bg-[#35c0c5] border border-[#35c0c5] uppercase mb-[100px]"
            >
              Đăng nhập
            </button>
          </form>
        </div>
        <div className="w-full lg:w-[50%]  px-[15px]">
          <span className="mb-[30px] block text-sm text-center">
            Bạn chưa có tài khoản
          </span>
          <p className="text-[13px] text-[#898989] mb-[15px]">
            Đăng ký tài khoản để mua hàng nhanh hơn. Theo dõi đơn đặt hàng, vận
            chuyển
          </p>
          <p className="text-[13px] text-[#898989] mb-[15px]">
            Cập nhật các tin tức sự kiện và các chương trình giảm giá của chúng
            tôi.
          </p>
          <Link href={"/register"}>
            <button className="px-5 h-[38px] text-white bg-[#35c0c5] border border-[#35c0c5] uppercase mb-[100px]">
              Đăng ký
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;

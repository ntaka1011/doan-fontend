import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`sm:max-w-[540px] md:max-w-[720px] laptop:max-w-[960px] lg:max-w-[1140px] mx-auto px-[15px] ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;

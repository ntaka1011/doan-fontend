import { LoadingContext } from "@/context/LoadingContext";
import React, { useContext } from "react";

const Spinner = () => {
  return (
    <div
      className="
    z-50
    transition
    duration-300
    bg-black
    bg-opacity-80
    flex
    justify-center
    items-center
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
  "
    >
      <div
        className="
            relative
            w-auto
            mx-auto
            max-w-3xl
            rounded-md
            overflow-hidden
        "
      >
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;

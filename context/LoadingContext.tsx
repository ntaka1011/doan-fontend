import React, { createContext, useState } from "react";

export const LoadingContext = createContext<any>({});

export const LoadingContextProvide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const setOpenLoading = () => {
    setLoading(true);
  };

  const setCloseLoading = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{ loading, setCloseLoading, setOpenLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

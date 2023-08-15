const useCalculator = (originPrice: number, discountPrice: number) => {
  const discount = originPrice - discountPrice;

  const discountPercent = (discount / originPrice) * 100;

  return discountPercent;
};

export default useCalculator;

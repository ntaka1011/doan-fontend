export const convertPrice = (price: number) => {
  try {
    const result = price?.toLocaleString().replaceAll(",", ".");

    return `${result}₫`;
  } catch (error) {
    console.log(error);
  }
};

export const convertDate = (originalDate: string) => {
  const dateObject = new Date(originalDate);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

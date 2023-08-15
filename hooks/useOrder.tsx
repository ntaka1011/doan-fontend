import { Create, FindAll, FindOne } from "@/utils/useSWRConfig";

const endPoint = "/orders";
export const useOrder = () => {
  return {
    createOrder: (params = {}) => Create(`${endPoint}`, params),
    getOrderUser: (id: string) => FindAll(`${endPoint}/userorder/${id}`),
    getOrder: (id: string) => FindOne(`${endPoint}/${id}`),
  };
};

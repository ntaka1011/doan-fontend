import {
  Create,
  Delete,
  FindAll,
  FindOne,
  fetcher,
} from "@/utils/useSWRConfig";

const endPoint = "/products";
export const useProducts = () => {
  return {
    getProductBySlug: (slug: string | null) =>
      FindOne(`${endPoint}/${slug || ""}`),
    getProducts: (params = {}) => FindAll(`${endPoint}`, params),
    searchProduct: (params = {}) => FindAll(`${endPoint}/search`, params),
    deleteProduct: (id: string | null) => Delete(`${endPoint}/${id}`),
  };
};

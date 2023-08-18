import { FindAll, FindOne } from "@/utils/useSWRConfig";

const endPoint = "/categories"; 
export const useCategory = () => {
  return {
    getCategory: (slug: string | null, params = {}) =>
      FindOne(`${endPoint}/${slug}`, params),
    getCategories: (params = {}) => FindAll(`${endPoint}`, params),
  };
};

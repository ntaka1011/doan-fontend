import { Create, FindAll, FindOne } from "@/utils/useSWRConfig";

const endPoint = "/comment";
export const useComment = () => {
  return {
    createComment: (params = {}) => Create(`${endPoint}`, params),
    getComment: (params = {}) => FindAll(`${endPoint}`, params),
  };
};

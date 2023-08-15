import { Create } from "@/utils/useSWRConfig";

const endPoint = "/auth";
export const useUser = () => {
  return {
    createUser: (params = {}) => Create(`${endPoint}/register`, params),
    loginUser: (params = {}) => Create(`${endPoint}/login`, params),
  };
};

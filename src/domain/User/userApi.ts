import { apiConfig } from "../../api/apiConfig";
import { PageAPI } from "../../api/apiTypes";
import { UserAPI } from "./userTypes";




async function getById(userId: string): Promise<UserAPI> {
  const response = await apiConfig.get<UserAPI>(`users/${userId}`);
  return response.data;
}

async function getList(search: string): Promise<PageAPI<UserAPI>> {
  const response = await apiConfig.get<PageAPI<UserAPI>>("users", {
    params: { search },
  });
  return response.data;
}

export const userApi = {
  getById,
  getList,
};
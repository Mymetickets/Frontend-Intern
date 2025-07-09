import AxiosRepository from "../AxiosRepository";
import { apiEndpoints } from "@/utils/api-endpoints";

export const UserRepository = {
    dashboardData(){
        return AxiosRepository.get(apiEndpoints.dashboardData);
    }
}
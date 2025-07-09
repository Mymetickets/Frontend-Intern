import AxiosRepository from "../AxiosRepository";
import { apiEndpoints } from "@/utils/api-endpoints";

export const AuthRepository = {
    login(reqData){
        return AxiosRepository.post(apiEndpoints.login, {
            email: reqData.email.value,
            password: reqData.password.value
        });
    },
    signup(reqData){
        return AxiosRepository.post(apiEndpoints.signup, {
            name: reqData.email.value,
            email: reqData.email.value,
            password: reqData.password.value,
            confirm_password: reqData.confirm_password.value
        });
    },
    logout(){
        return AxiosRepository.post(apiEndpoints.logout, {});
    }
}
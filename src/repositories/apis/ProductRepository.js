import AxiosRepository from "../AxiosRepository";
import { apiEndpoints } from "@/utils/api-endpoints";

export const ProductRepository = {
    addProduct(){

    },
    getProducts(){
        return AxiosRepository.get(apiEndpoints.products);
    },
    getSingleProduct(){

    },
    updateProduct(){

    },
    deleteProduct(id){
        return AxiosRepository.delete(`${apiEndpoints.products}/${id}`);
    }
}
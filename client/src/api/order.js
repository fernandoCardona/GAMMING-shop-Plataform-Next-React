//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV, authFetch } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:


export class Order {
    async getAll(userId) {
        try {
            const filters = `filters[user][id][$eq]=${userId}`;
            const sort = `sort[0]=createdAt:desc`;
            const urlParams = `${filters}&${sort}`;

            // const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}?${urlParams}`;
            // console.log(ENV)
            const url =`${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}?[user][id][$eq]=${userId}&sort[0]=createdAt:desc`;
             
            const response = await authFetch(url);
            console.log(response)
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;

        } catch (error) {
            throw error;
        }
    }
} 
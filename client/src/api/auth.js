//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV } from '@/utils';
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

export class Auth {
    async register(data) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
    
            const response = await fetch(url, params);
            const result = await response.json();
    
            if (response.status !== 200) throw result;
    
            return result;

        } catch (error) {
            throw error;
        }
    }
  
    async login(data) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
    
            const response = await fetch(url, params);
            const result = await response.json();
    
            if (response.status !== 200) throw result;
    
            return result;
            
        } catch (error) {
            throw error;
        }
    }
  }
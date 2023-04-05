//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:

//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV, authFetch } from '@/utils'
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

export class User {
    //Creamos funcion 'getMe' para obtener los datos del usuario atraves del token:
    async getMe() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
      
            const response = await authFetch(url);
            const result = await response.json();
            //console.log(result)
      
            if (response.status !== 200) throw result;
      
            return result;

        } catch (error) {

            throw error;
        }
    }

    async updateMe(userId, data) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;
        
            const params = {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
        
            const response = await authFetch(url, params);
            const result = await response.json();
        
            if (response.status !== 200) throw result;
        
            return result;

        } catch (error) {
            
            throw error;
        }
      }
        
}
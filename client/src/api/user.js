//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV } from '@/utils'
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

export class User {
    //Creamos funcion 'getMe' para obtener los datos del usuario atraves del token:
    async getMe() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
            const params = {
                headers: { 
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjgwMjA0ODAzLCJleHAiOjE2ODI3OTY4MDN9.anCr7VtEG07y8BkjsyhDGYEjxth0Q_JQj0D6Du3dgZk'
                }
            }
      
            const response = await fetch(url, params);
            const result = await response.json();
            console.log(result)
      
            if (response.status !== 200) throw result;
      
            return result;

            } catch (error) {

                throw error;
            }
        }
}
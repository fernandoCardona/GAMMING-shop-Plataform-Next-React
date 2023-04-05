//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { Token } from "@/api";
//IMPORTS Styles/Images DE LA APP:

export const authFetch = async( url, params ) => {
    const tokenController = new Token();
    const token = tokenController.getToken();

    //funcion logout:
    const logout = () => {
        tokenController.removeToken();
        window.location.replace("/");
    };
    

    //console.log(token)
    if(!token) {
        //hacemos un logout:
        logout();
        
    }else {
        if (tokenController.hasExpired(token)) {
            //si ha expirado hacemos un logout:
            logout();

        }else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`,
                }
            };

            try {
                return await fetch (url, paramsTemp);
            } catch (error) {
                return error;
            }
        }
    }
}
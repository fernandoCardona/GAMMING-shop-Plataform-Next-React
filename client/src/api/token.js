//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import jwtDecode from "jwt-decode";
//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV } from '@/utils'
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:



export class Token {
    setToken(token) {
      localStorage.setItem(ENV.TOKEN, token);
    }

    getToken() {
      return localStorage.getItem(ENV.TOKEN);
    }

    removeToken() {
      localStorage.removeItem(ENV.TOKEN);
    }

    hasExpired(token) {
      const tokenDecode = jwtDecode(token);
      //console.log(tokenDecode)
      const expireDate = tokenDecode.exp * 1000;
      const currentDate = new Date().getTime();
      //Condicional de comprobacion-> si la fecha de expiracion es mayor a currenDate significa k ha expirado el tokeen:
      if (currentDate > expireDate) {
        return true;
      }

      return false;
    }
}
//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV } from '@/utils'
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token);
      }
}
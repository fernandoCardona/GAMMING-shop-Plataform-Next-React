//IMPORTS DE REACT/NEXT:
import { useState, useEffect, createContext } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { Token, User } from "@/api";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

const tokenController = new Token();
const userController = new User();


//1.0-Creamos el contexto:
export const AuthContext = createContext();
//1.1-Creamos el provides:
export const AuthProvider = (props) => {
  const { children } = props;
  //Creamos el estado de User, token, loading, para el constext:
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ( async () => {
      //obtenemos el token de localStorage:
      const token = tokenController.getToken();
      if (!token) {
        //Hacemos un logout:
        logout();
        //Cambiamos el estado a faalse de loading:
        setLoading(false);
        //Hacemos un return para parar la ejecucion:
        return

      }
      //Comprobamos si el token a caducado:
      if ( tokenController.hasExpired(token) ) {
        //Si el token ha caducado hacemos un logout:
        logout();
      }else {
        //si el token no ha caducado hacemos login pasandole el token:
        await login(token);
      }

    })()
    
  }, []);

  //Funcion login:
  const login = async (token) => {
    try {
      //console.log("Estamso en el login", token);
      //Setear el token en el localStorage:
      tokenController.setToken(token);
      //Obtener los datos del usuario:
      const response = await userController.getMe();
      //console.log(response)
      //Setear en el estado user los datos del usuario:
      setUser(response);
      //console.log(user)
      //Setear el valor de token en el estado token:
      setToken(token);
      //Setear loading a false:
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const logout = () => {
    //console.log('CERRAR SESSION')
    tokenController.removeToken();
    setToken(null);
    setUser(null);
  }
  const updateUser = ( key, value ) => {
    setUser({
      ...user,
      [key]: value,
    })
  }

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

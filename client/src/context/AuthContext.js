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
    setLoading(false);
  }, []);

  //Funcion login:
  const login = async (token) => {
    try {
      //console.log("Estamso en el login", token);
      //Setear el token en el localStorage:
      tokenController.setToken(token);
      //Obtener los datos del usuario:
      const response = await userController.getMe();
      console.log(response)

      //Setear en el estado user los datos del usuario:
      setUser(response);
      console.log(user)
      //Setear el valor de token en el estado token:
      setToken(token);
      //Setear loading a false:
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const data = {
    accessToken: token,
    user: user,
    login: login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

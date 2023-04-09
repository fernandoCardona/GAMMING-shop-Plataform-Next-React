//IMPORTS DE REACT/NEXT:
import { useState, useEffect, createContext } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { Cart } from '@/api';
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:

const cartController =  new Cart();

//1.0-Creamos el contexto:
export const CartContext = createContext();

//1.1-Creamos el provides:
export const CartProvider = (props) => {
    //Extraemos props:
    const { children } = props;
    //Creamos los States:
    const [cart, setCart] = useState(null);
    const [total, setTotal] = useState(cartController.count());

    useEffect(() => {
        const response = cartController.getAll();
        setCart(response);
      }, [])

    //Funcion addCart:
    const addCart = (gameId) => {
        cartController.add(gameId);
        refreshTotalCart();
    }

    //Funcion obtener quantity items:
    const changeQuantityItem = (gameId, quantity) => {
        cartController.changeQuantity(gameId, quantity);
        refreshTotalCart();
    };

    //Funcion delete item:
    const deleteItem = (gameId) => {
        cartController.delete(gameId);
        refreshTotalCart();
    };

    //Funcion delete all items:
    const deleteAllItems = () => {
        cartController.deleteAll();
        refreshTotalCart();
    };
    //Funcion refresh cart:
    const refreshTotalCart = () =>{
        setTotal(cartController.count());
        setCart(cartController.getAll());
    }

 
    const data= {
        cart,
        addCart,
        total,
        deleteItem,
        deleteAllItems,
        changeQuantityItem,
    }
    
    return  <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>;

}
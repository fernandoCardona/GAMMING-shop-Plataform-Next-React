//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { map } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Order as OrderController } from "@/api";
import { useAuth } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
import { NoResult } from "@/components/Shared";
import { Order } from "./Order";
//IMPORTS Styles/Images DE LA APP:

const orderController = new OrderController();

export const Orders = () => {
    //Creamos State para Orders:
    const [orders, setOrders] = useState(null);
    //Obtenemos el user:
    const { user } = useAuth();
     
    useEffect(() => {
        (
            async () => {
                try {
                    //console.log(user.id)
                    const response = await orderController.getAll(user.id);
                    //console.log(response)
                    setOrders(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        )();
    }, []);

    if (!orders) return <NoResult text="No products buyed" />;
 
    return (
        <div>
          {
            map(orders, (order) => (
                <Order key={order.id} order={order} />
            ))
          }
        </div>
    );
}
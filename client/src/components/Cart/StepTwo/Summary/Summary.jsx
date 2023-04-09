//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button } from "semantic-ui-react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { forEach, map } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Cart } from "@/api";
import { useAuth, useCart } from "@/hooks";
import { fn } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Summary.module.scss";

const cartController = new Cart();


export const Summary = (props) => {
    //Recuperamos props:
    const { games, addressSelected } = props;
    //Creamos State para total
    const [total, setTotal] = useState(null);
    //Creamos State para loading
    const [loading, setLoading] = useState(false);
    //Inicializamos Stripe
    const stripe = useStripe();
    const elements = useElements();
    //Recuperamos user 
    const { user } = useAuth();
    //Recuperamos deleteAllItems 
    const { deleteAllItems } = useCart();
    //Llamamos a router
    const router = useRouter();

    useEffect(() => {
        let totalTemp = 0;
    
        forEach(games, (game) => {
            const price = fn.calcDiscountedPrice(
                game.attributes.price,
                game.attributes.discount
            );
            totalTemp += price * game.quantity;
        });
    
        setTotal(totalTemp.toFixed(2));

    }, [games]);

    const onPay = async () => {
        setLoading(true);
    
        if (!stripe || !elements) {
            setLoading(false);
            return;
        }
    
        const cardElement = elements.getElement(CardElement);
        const result = await stripe.createToken(cardElement);
    
        if (result.error) {
            console.error(result.error.message);
        } else {
            const response = await cartController.paymentCart(
                result.token,
                games,
                user.id,
                addressSelected
            );
        
            if (response.status === 200) {
                deleteAllItems();
                goToStepEnd();
            } else {
                // console.error("Error al realizar el pedido");
                throw error;  
            }
        }
    
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    };

    const goToStepEnd = () => {
        router.replace({ query: { ...router.query, step: 3 } });
    };
    
    if (!total) return null;

    return (
        <div className={styles.resume}>
            <h2>Resumen</h2>
        
            <div className={styles.block}>
                <div className={styles.products}>
                    {
                        map(games, (game) => (
                            <div key={game.id} className={styles.product}>
                            <div>
                                <p>{game.attributes.title}</p>
                                <span>{game.attributes.platform.data.attributes.title}</span>
                            </div>
                            <span>
                                {game.quantity > 0 && `${game.quantity}x`}
                                {
                                    fn.calcDiscountedPrice(
                                        game.attributes.price,
                                        game.attributes.discount
                                    )
                                }
                                €
                            </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        
            <div className={styles.blockTotal}>
                <div>
                    <span>Total</span>
                    <span>{total}€</span>
                </div>
        
                <Button
                    primary
                    fluid
                    disabled={!addressSelected}
                    onClick={onPay}
                    loading={loading}
                >
                    Pay
                </Button>
            </div>
        </div>
      );
}

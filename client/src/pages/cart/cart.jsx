//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
import { Game } from "@/api";
import { useCart } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
import { CartLayout } from '@/layouts';
import { Cart } from "@/components/Cart";
//import { Seo } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:

const gameController = new Game();

const CartPage = () => {
    const { query: { step = 1 } } = useRouter();
    const currentStep = Number(step);

    const [ games, setGames ] = useState(null);
    const { cart } = useCart();
    //console.log('CART',cart)

    useEffect(() => {
        (
            async () => {
                try {
                    const data = [];
                    for await (const item of cart) {
                        //console.log('ITEM', item);
                        const response = await gameController.getGameById(item.id);
                        //console.log('RESPONSE',response)
                        data.push({...response.data, quantity: item.quantity})
                    }  
                    //console.log('DATA',data) 
                    setGames(data);
                     
                } catch (error) {
                    console.error(error);
                }
            }
        )();
    }, [cart]);
    //console.log('GAMES -->',games)
    return (
        <>
            <CartLayout>
                {currentStep === 1 && <Cart.StepOne games={games} />}
                {currentStep === 2 && <Cart.StepTwo games={games} />}
                 {/* {currentStep === 3 && <Cart.StepThree />} 
                {currentStep === 1 && <p>Step1</p>}
                {currentStep === 2 && <p>Step2</p>}*/}
                {currentStep === 3 && <p>Step3</p>}  
            </CartLayout>
        </>
    )
}

export default CartPage

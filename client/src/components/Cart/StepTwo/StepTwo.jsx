//IMPORTS DE REACT/NEXT:
import { useState } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
import { Separator } from "@/components/Shared";
import { Addresses } from "./Addresses";
import { Payment } from "./Payment";
import { Summary } from "./Summary";
//IMPORTS Styles/Images DE LA APP:
import styles from "./StepTwo.module.scss";

const stripeInit = loadStripe(ENV.STRIPE_TOKEN);

export const StepTwo = (props) => {
    //Recuperamos props:
    const { games } = props;
    //Creamos State Adresses:
    const [addressSelected, setAddressSelected] = useState(null);


    return (
        <Elements stripe={stripeInit}>
            <div className={styles.stepTwo}>
                <div className={styles.center}>
                <Addresses
                    addressSelected={addressSelected}
                    setAddressSelected={setAddressSelected}
                />
                <Separator height={50} />


                {addressSelected && <Payment />} 

                </div>

                <div className={styles.right}>
                <Summary games={games} addressSelected={addressSelected} />
                </div>
            </div>
        </Elements> 
    )
}
 


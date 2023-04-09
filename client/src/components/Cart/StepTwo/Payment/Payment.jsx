//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { CardElement } from "@stripe/react-stripe-js";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Payment.module.scss";



export const Payment = () => {

    const cardStyle = {
        style: {
            base: {
                color: "#fff",
                fontSize: "20px",
                "::placeholder": {
                color: "#909090",
                },
            },
            invalid: {
                fontFamily: 'Arial, sans-serif',
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        },
    };

  return (
    <div className={styles.payment}>
        <h2>Payment method</h2>

        <div className={styles.block}>
            <CardElement options={cardStyle} />
        </div>
    </div>
  );
}

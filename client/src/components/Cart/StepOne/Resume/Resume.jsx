//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button } from "semantic-ui-react";
import { forEach } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { fn } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Resume.module.scss";



export const Resume = (props) => {
    //obtenemos props:
    const { games } = props;

    const router = useRouter();

    //Creamos State totals
    const [totals, setTotals] = useState(null);

    useEffect(() => {
        let totals = {
            original: 0,
            discount: 0,
            price: 0,
        };
  
        forEach(games, (game) => {
            const price = fn.calcDiscountedPrice(
                game.attributes.price,
                game.attributes.discount
            );
    
            totals = {
                original: totals.original + game.attributes.price * game.quantity,
                discount: totals.discount + (game.attributes.price - price) * game.quantity,
                price: totals.price + price * game.quantity,
            };
        });
  
        setTotals(totals);

    }, [games]);

    //Funcion que nos lleva al Step2:
    const goToStepTwo = () => {
        router.replace({ query: { ...router.query, step: 2 } });
    };

    //Comprobamos si tenemos un total:
    if (!totals) return null;

    return (
      <div className={styles.resume}>
          <h2>Summary</h2>

          <div className={styles.block}>
              <div className={styles.prices}>
                  <div>
                      <span>Oficial price</span>
                      <span>{totals.original.toFixed(2)}€</span>
                  </div>
                  <div>
                      <span>Discount</span>
                      <span>{totals.discount.toFixed(2)}€</span>
                  </div>
                  <div>
                      <span>Subtotal</span>
                      <span>{totals.price.toFixed(2)}€</span>
                  </div>
              </div>

              <Button primary fluid onClick={goToStepTwo}>
                  Proceed with the payment
              </Button>

              <Link href="/">Continue Shopping</Link>
          </div>
      </div>
    );
}


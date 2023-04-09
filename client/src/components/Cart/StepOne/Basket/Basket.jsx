//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Icon, Image, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { fn } from '@/utils';
import { useCart } from '@/hooks';
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Basket.module.scss";



export const Basket = (props) => {
    //Recuperamos props:
    const { games } = props;
    console.log('GAMES IN BASKET', games)

    const { changeQuantityItem, deleteItem } = useCart();

    const options = Array.from({ length: 50 }, (_, index) => {
      const number = index + 1;
      return { key: number, text: String(number), value: number };
    });

    
    return (
      <div className={styles.basket}>
          <h2>Basket</h2>
  
          <div className={styles.block}>
              {
                  map(games, (game) => (
                      <div key={game.id} className={styles.product}>
                          <Image src={game.attributes.cover.data.attributes.url} />
                          <div>
                              <div className={styles.info}>
                                  <div>
                                      <p>{game.attributes.title}</p>
                                      <p>{game.attributes.platform.data.attributes.title}</p>
                                  </div>
                  
                                  <Icon
                                      name="trash alternate outline"
                                      link
                                      onClick={() => deleteItem(game.id)}
                                  />
                              </div>
              
                              <div className={styles.quantity}>
                                  <Dropdown
                                      className="number"
                                      options={options}
                                      selection
                                      value={game.quantity}
                                      compact
                                      onChange={(_, data) => changeQuantityItem(game.id, data.value) }
                                  />
                                  <span>
                                      {
                                          fn.calcDiscountedPrice(
                                              game.attributes.price,
                                              game.attributes.discount
                                          )
                                      }
                                      €
                                  </span>
                              </div>
                          </div>
                      </div>
                  ))
              }
          </div>
      </div>
    );
}

//IMPORTS DE REACT/NEXT:
import { useState } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button, Container, Icon, Image } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
import { fn } from "@/utils";
import { useCart } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
import { WishlistIcon } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:
import styles from "./Panel.module.scss";


export const Panel = (props) => {
    const { gameId, game } = props;
    const [loading, setLoading] = useState(false);
    //const { addCart } = useCart();

    const platform = game.platform.data;
    const buyPrice = fn.calcDiscountedPrice(game.price, game.discount);

    // const addCartWrapper = () => {
    //     setLoading(true);
    //     addCart(gameId);

    //     setTimeout(() => {
    //     setLoading(false);
    //     }, 500);
    // };

    return (
        <Container className={styles.panel}>
        <div className={styles.imgContiner}>
            <Image src={game.cover.data.attributes.url} />
        </div>

        <div className={styles.actionsContainer}>
            <div>
                <h2>{game.title}</h2>

                <div className={styles.moreInfo}>
                    <span>
                        <Image src={platform.attributes.icon.data.attributes.url} />
                        {platform.attributes.title}
                    </span>
                    <span>
                        <Icon name="check" />
                        En stock
                    </span>
                </div>

                <div className={styles.price}>
                    {
                        game.discount > 0 && (
                            <>
                                <span className={styles.originalPrice}>
                                    <Icon name="tag" />
                                    {game.price}€
                                </span>

                                <span className={styles.discount}>-{game.discount}%</span>
                            </>
                        )
                    }

                    <span className={styles.price}>{buyPrice}€</span>
                </div>

                <Button primary fluid 
                        //onClick={addCartWrapper} 
                        loading={loading}
                >
                    Comprar ahora
                </Button>

                <WishlistIcon gameId={gameId} className={styles.heart} />
            </div>
        </div>
        </Container>
    );
}



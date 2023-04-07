//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Game } from "@/api";
import { fn } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
import { Label } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:
import styles from "./BannerLastGamePublished.module.scss";

const gameController = new Game();

export const BannerLastGamePublished = () => {

    //Creamos el estado:
    const [game, setGame] = useState(null);

    useEffect(() => {
        (   async () => {
                try {
                    const response = await gameController.getLastPublished();
                    setGame(response.data[0]);
                    //console.log('este es el juego',game)
                } catch (error) {
                    console.error(error); 
                }
            } 
        )();       
    }, []);   

    if (!game) return null;

    const wallpaper  = game.attributes.wallpaper;
    //console.log('wallpaper', wallpaper  );  
    const releaseDate = new Date(game.attributes.releaseDate).toISOString();
    const price = fn.calcDiscountedPrice(
        game.attributes.price,
        game.attributes.discount
    ); 

    return (
        <div className={styles.container}> 
            <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />
            <Link className={styles.infoContainer} href={game.attributes.slug}>
                <Container>
                    <span className={styles.date}>
                        {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
                    </span>

                    <h2>{game.attributes.title}</h2>

                    <p className={styles.price}>
                        <Label.Discount>
                            -{game.attributes.discount}%
                        </Label.Discount>
                        <span className={styles.finalPrice}>{price}€</span>
                    </p>
                </Container>
            </Link>

        </div>
    )
}

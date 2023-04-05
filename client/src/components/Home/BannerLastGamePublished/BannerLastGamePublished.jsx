//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Game } from "@/api";
//import { fn } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
//import { Label } from "@/components/Shared";
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
                    console.log('este es el juego',game)
                } catch (error) {
                    console.error(error);
                }
            }
        )();       
    }, [],500);  

    if (!game) return null;

    const wallpaper = game.attributes.wallpaper;
    console.log('wallpaper',wallpaper );   

    return (
        <div className={styles.container}> 
            {/* <Image src={wallpaper.attributes.url} className={styles.wallpaper} /> */}

        </div>
    )
}

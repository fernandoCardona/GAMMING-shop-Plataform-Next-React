//IMPORTS DE REACT/NEXT:
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { map } from "lodash";
//IMPORTS DEPENDENCIAS DE LA APP:
import { fn } from "@/utils";
//IMPORTS COMPONENTS DE LA APP:
import { Label } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:
import styles from "./GridGames.module.scss";




export const GridGames = (props) => {
    const { games } = props;

    return (
        <div className={styles.gridGames}>
            {map(games, (game) => (
                <Link
                    key={game.id}
                    href={`/${game.attributes.slug}`}
                    className={styles.game}
                >
                    <div>
                        <img src={game.attributes.cover.data.attributes.url} />
                        {
                            game.attributes.discount > 0 && (
                            <Label.Discount className={styles.discount}>
                                {`-${game.attributes.discount}%`}
                            </Label.Discount>
                            )
                        }
                    </div>

                    <div>
                        <span>{game.attributes.title}</span>
                        <span className={styles.price}>
                        {
                            fn.calcDiscountedPrice(
                                game.attributes.price,
                                game.attributes.discount
                            )
                        }
                        €
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

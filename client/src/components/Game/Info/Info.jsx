//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Info.module.scss";



export const Info = (props) => {
    const { game } = props;

    return (
        <Container className={styles.info}>
            <div className={styles.summary}>
                <p>{game.summary}</p>
            </div>

            <div className={styles.more}>
                <ul>
                    <li>
                        <span>Fecha de lanzamiento:</span> {game.releaseDate}
                    </li>
                </ul>
            </div>
        </Container>
    );
}
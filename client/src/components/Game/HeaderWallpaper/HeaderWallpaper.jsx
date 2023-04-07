//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Image } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./HeaderWallpaper.module.scss";



export const HeaderWallpaper = (props) => {
    const { image } = props;

    return (
        <div className={styles.headerWallpaper}>
            <Image src={image} />
        </div>
    );
}
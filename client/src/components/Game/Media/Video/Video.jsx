//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import ReactPlayer from "react-player";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Video.module.scss";

export function Video(props) {
    const { video } = props;
    //console.log(props)

    return (
        <ReactPlayer
            url={video}
            className={styles.video}
            width="100%"
            height={634}
        />
    );
}
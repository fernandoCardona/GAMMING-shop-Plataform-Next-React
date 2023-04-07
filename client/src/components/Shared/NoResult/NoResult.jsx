//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./NoResult.module.scss";


export const NoResult = (props) => {
    //extraemos props
    const { text } = props;


    return (
        <div className={styles.noResult}>
            <p>{text}</p>
        </div>
    )
}

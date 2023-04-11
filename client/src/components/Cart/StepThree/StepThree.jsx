//IMPORTS DE REACT/NEXT:
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button, Icon } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./StepThree.module.scss";



export const StepThree = () => {


    return (
        <div className={styles.stepThree}>
            <Icon name="check circle outline" />
            <h2>¡Compra exitosa!</h2>

            <Button as={Link} href="/account" primary>
                Check order
            </Button>
        </div> 
    )
}

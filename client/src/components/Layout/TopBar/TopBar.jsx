//IMPORTS DE REACT/NEXT:
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Image } from "semantic-ui-react";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { Account } from "../Account";
import { Menu } from "../Menu";
//IMPORTS Styles/Images DE LA APP:
import styles from "./TopBar.module.scss";



export const TopBar = ( props ) => {
    //Extraemos props:
    const { isOpenSearch } = props;

    return (
        <div className={styles.topBar}>
        <div className={styles.left}>
            <Link href="/">
                <Image src="/images/logo.png" alt="Gaming" />
            </Link>
        </div>

        <div className={styles.center}>
            <Menu isOpenSearch={isOpenSearch} />
        </div>

        <div className={styles.right}>
            <Account />
        </div>
        </div>
    );
}


//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button, Icon } from "semantic-ui-react";
import { DateTime } from 'luxon';
//IMPORTS DEPENDENCIAS DE LA APP:
import { useAuth } from '@/hooks';
//IMPORTS COMPONENTS DE LA APP:

//IMPORTS Styles/Images DE LA APP:
import styles from "./Info.module.scss";


export const Info = () => {

    const { user } = useAuth();
     
    
    return (
        <div className={styles.info}>
            <Button icon className={styles.user}>
                <Icon name="user outline" />
            </Button>
            <h3 className={styles.username}>{user.username}</h3>
            <h4 className={styles.email}>{user.email}</h4>
            <p className={styles.createAt}>
                Member since: {DateTime.fromISO(user.createdAt, { locale: "en" }).toFormat("DDD")}
            </p>
        </div>
    )
}

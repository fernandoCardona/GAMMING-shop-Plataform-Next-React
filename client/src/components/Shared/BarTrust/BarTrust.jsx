//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Container, Icon } from 'semantic-ui-react';
import { map } from 'lodash';
//IMPORTS DEPENDENCIAS DE LA APP:
import { data } from "./BarTrust.data";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from './BarTrust.module.scss';


export const BarTrust = () => {


    return (
        <div className={styles.barTrust}>
            <Container className={styles.content}>
                {
                    map(data, (item) => (
                        <div key={item.icon} className={styles.block}>
                            <Icon name={item.icon} />
                            <div>
                                <h5>{item.title}</h5>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

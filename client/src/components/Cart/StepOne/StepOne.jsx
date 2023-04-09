//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { Basket } from "./Basket";
import { Resume } from "./Resume";
//IMPORTS Styles/Images DE LA APP:
import styles from "./StepOne.module.scss";



export const StepOne = (props) => {
  //Recuperamos props:
    const { games } = props;
    console.log('GAMES IN STEP', games)

  return (
      <div className={styles.stepOne}>
          <div className={styles.center}>
              <Basket games={games} />
          </div>
          <div className={styles.right}>
              <Resume games={games} />
          </div>
      </div>
  );

}

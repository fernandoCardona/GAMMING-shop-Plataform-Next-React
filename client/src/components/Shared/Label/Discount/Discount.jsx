//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import classNames from "classnames";
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Discount.module.scss";

export const Discount = (props) => {
    const { children, className } = props;

    return (
        <span
            className={classNames(styles.labelDiscount, { [className]: className })}
        >
            {children}
        </span>
    );
}

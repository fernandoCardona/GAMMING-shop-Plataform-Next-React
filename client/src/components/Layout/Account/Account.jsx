//IMPORTS DE REACT/NEXT:
import { useRouter } from "next/router";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button, Icon, Label } from "semantic-ui-react";
import classNames from "classnames";
//IMPORTS DEPENDENCIAS DE LA APP:
import { useAuth, useCart } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./Account.module.scss";


export const Account = () => {

    const { user } = useAuth();
    // const { total } = useCart();
    const total = 5;
    const router = useRouter();

    //definimos funciones de redireccion:
    const goToLogin = () => router.push('/join/sign-in');
    const goToAccount = () => router.push('/account');
    const goToCart = () => {
        if (!user) {
            goToLogin();
        }else {
            router.push('/cart');
        }
    }
    
    return (
        <div className={styles.account}>
        <Button icon className={styles.cart}>
            <Icon name="cart" onClick={goToCart} />
            {total > 0 && <Label circular>{total}</Label>}
        </Button>

        <Button icon className={classNames({ [styles.user]: user })}>
            <Icon name="user outline" onClick={user ? goToAccount : goToLogin} />
        </Button>
        </div>
    )
}

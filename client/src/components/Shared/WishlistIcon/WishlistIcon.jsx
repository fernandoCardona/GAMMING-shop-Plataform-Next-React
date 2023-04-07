//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Icon } from "semantic-ui-react";
import classNames from "classnames";
//IMPORTS DEPENDENCIAS DE LA APP:
import { Wishlist } from "@/api";
import { useAuth } from "@/hooks"
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import styles from "./WishlistIcon.module.scss";

const wishlistController = new Wishlist();


export const WishlistIcon = (props) => {
    const { gameId, className, removeCallback } = props;
    const [hasWishlist, setHasWishlist] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await wishlistController.check(user.id, gameId);
                    setHasWishlist(response);
                } catch (error) {
                    setHasWishlist(false);
                    console.error(error);
                }
            }
        )();
    }, [gameId]);

    //funcion que agrega al wishlist
    const addWishlist = async () => {
        const response = await wishlistController.add(user.id, gameId);
        setHasWishlist(response);
    };

    //funcion que borra de la  wishlist
    const deleteWishlist = async () => {
        try {
            await wishlistController.delete(hasWishlist.id);
            setHasWishlist(false);

            if (removeCallback) {
                removeCallback();
            }

        } catch (error) {
            console.error(error);
        }
    };

    if (hasWishlist === null) return null;

    return (
        <Icon
            name={hasWishlist ? "star" : "star outline"}
            onClick={hasWishlist ? deleteWishlist : addWishlist}
            className={classNames(styles.wishlistIcon, {
                [className]: className,
            })}
        />
    );
}

//IMPORTS DE REACT/NEXT:
import { useState, useEffect } from "react";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Icon } from "semantic-ui-react";
import { size } from'lodash';
//IMPORTS DEPENDENCIAS DE LA APP:
import { Wishlist as WishlistController } from "@/api";
import { useAuth } from "@/hooks";
//IMPORTS COMPONENTS DE LA APP:
import { NoResult } from "@/components/Shared";
import { GridGames } from './GridGames';
//IMPORTS Styles/Images DE LA APP:
 
const wishlistController = new WishlistController();

export const Wishlist = () => {

    //Creamos el state para el wishList:
    const [wishlist, setWishlist] = useState(null);
    const [reload, setReload] = useState(false);
    const { user } = useAuth();

    const onReload = () => setReload((prevState) => !prevState);

    useEffect(() => {
        (
            async() => {
                try {
                    const response = await wishlistController.getAll(user.id);
                    //console.log(response);
                    setWishlist(response)

                } catch (error) {
                    console.error(error);
                }
            }
        )()
    }, [reload]);

    return size(wishlist) === 0 ? (
        <NoResult text="No items in wishlist" />
      ) : (
        <GridGames 
            wishlist={wishlist} 
            onReload={onReload} 
        />
      );
    
}
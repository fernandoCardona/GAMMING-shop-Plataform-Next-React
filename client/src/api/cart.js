//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { forEach } from 'lodash';
//IMPORTS DEPENDENCIAS DE LA APP:
import { ENV, authFetch } from '@/utils';
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:


export class Cart {
    add( gameId ) {
        //Obtenemos contenido del carrito actual:
        const games = this.getAll();
        //comprobamos si el item existe en el carrito:
        const objIndex = games.findIndex((game) => game.id === gameId);

        if (objIndex < 0) {
            games.push({ id: gameId, quantity: 1 });
        } else {
        const game = games[objIndex];
            games[objIndex].quantity = game.quantity + 1;
        }
     
        //Almacenamos cart en localstorage:
        localStorage.setItem(ENV.CART, JSON.stringify(games));
    }

    getAll() {
        const response = localStorage.getItem(ENV.CART);
        if (!response) {
            return [];
        } else {
            return JSON.parse(response);
        }
        
    }

    count() {
        const response = this.getAll();
        let count = 0;
    
        forEach(response, (item) => {
            count += item.quantity;
        });
    
        return count;
    }

    changeQuantity(gameId, quantity) {
        const games = this.getAll();
        const objIndex = games.findIndex((game) => game.id === gameId);
    
        games[objIndex].quantity = quantity;
    
        localStorage.setItem(ENV.CART, JSON.stringify(games));
    }

    delete(gameId) {
        const games = this.getAll();
        const updateGames = games.filter((game) => game.id !== gameId);
    
        localStorage.setItem(ENV.CART, JSON.stringify(updateGames));
    }

    deleteAll() {
        localStorage.removeItem(ENV.CART);
    }

    async paymentCart(token, products, idUser, address) {
        try {
             
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENY_ORDER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    products,
                    idUser,
                    addressShipping: address,
                }),
            };
    
            const response = await authFetch(url, params);
    
            return response;

        } catch (error) {
            throw error;
        }
    }

}
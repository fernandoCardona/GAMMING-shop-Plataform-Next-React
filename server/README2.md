## Routes Auth Public:

- Create user: [POST] http://localhost:1337/api/auth/local/register
- Login user: [POST] http://localhost:1337/api/auth/local

---

## Routes Auth Private:

- GetMe: [GET] http://localhost:1337/api/users/me
- GetUsers: [GET] http://localhost:1337/api/users
- UpdateMe: [PUT] http://localhost:1337/api/users/:id

---

## Routes Address Private:

- Add Address: [POST] http://localhost:1337/api/adresses
- Populate Address: [GET] http://localhost:1337/api/adresses?populate=\*
- Find Address per User: [GET] http://localhost:1337/api/adresses?filters[user][id][$eq]=4
- Find Address by ID: [GET] http://localhost:1337/api/adresses/:id
- Update Address: [PUT] http://localhost:1337/api/adresses/:id
- Delete Address: [DELETE] http://localhost:1337/api/adresses/:id

---

## Routes Platform Public:

- Find Platform with all properties: [GET] http://localhost:1337/api/platforms?populate=\*
- Find Platform only image properties: [GET] http://localhost:1337/api/platforms?populate=icon

---

## Routes Games Public:

- GetGames: [GET] http://localhost:1337/api/games
- GetGameById: [GET] http://localhost:1337/api/games

---

## Routes WishList Private:

- AddGameWishList: [POST] http://localhost:1337/api/wish-lists
- CheckGamesWishList: [GET] http://localhost:1337/api/wish-lists?filters[user][id][$eq][0]=id-user&filters[game][id][$eq][0]=id-game
- DeleteGame: [DELETE] http://localhost:1337/api/wish-lists/:id-wishlist
- GetWishList: [GET] http://localhost:1337/api/wish-lists

---

## Routes Order Private:

- GetAllOrders: [GET] http://localhost:1337/api/orders?[user][id][$eq]=id-user
- AddOrderSimple: [POST] http://localhost:1337/api/orders
- AddOrderStripe: [POST] http://localhost:1337/api/payment-order

Flujo de pago en Stripe:
Cliente --> Stripe(TokenPayment) -->
Cliente(TokenPayment + OrderData) -->
Server (TokenPayment + OrderData) -->
Stripe(ok, Error) -->
Server --> Cliente

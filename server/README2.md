-------------------
Routes Auth Public:
-------------------
- Create user: [POST] http://localhost:1337/api/auth/local/register
- Login user: [POST] http://localhost:1337/api/auth/local


--------------------
Routes Auth Private:
--------------------
- GetMe: [GET] http://localhost:1337/api/users/me
- GetUsers: [GET] http://localhost:1337/api/users
- UpdateMe: [PUT] http://localhost:1337/api/users/:id


-----------------------
Routes Address Private:
-----------------------
- Add Address: [POST] http://localhost:1337/api/adresses
- Populate Address: [GET] http://localhost:1337/api/adresses?populate=*
- Find Address per User: [GET] http://localhost:1337/api/adresses?filters[user][id][$eq]=4
- Find Address by ID: [GET] http://localhost:1337/api/adresses/:id
- Update Address: [PUT] http://localhost:1337/api/adresses/:id
- Delete Address: [DELETE] http://localhost:1337/api/adresses/:id

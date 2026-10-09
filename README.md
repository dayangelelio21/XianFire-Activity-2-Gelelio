<<<<<<< HEAD
# XianFire Activity 2 — Books CRUD API

This project builds on the XianFire project structure used in the previous subject activity and adds the Books API required by Activity 2.

## Activity 2 endpoints

| Operation | Method | Endpoint |
|---|---|---|
| Create a book | POST | `/books` |
| Read all books | GET | `/books` |
| Read one book | GET | `/books/:id` |
| Update a book | PUT | `/books/:id` |
| Delete a book | DELETE | `/books/:id` |

## Requirements

- Node.js and npm
- MySQL running locally
- A MySQL database named `FinalActivity` (create it in phpMyAdmin if it does not exist)

The local defaults in `models/db.js` are host `localhost`, user `root`, and an empty password. If your local MySQL settings differ, set `DB_HOST`, `DB_NAME`, `DB_USER`, and `DB_PASSWORD` in your terminal environment before starting the app.

## Run locally

```bash
npm install
xian dev
```

The server normally starts at `http://localhost:3000`. The app synchronizes Sequelize models when the server starts, but the MySQL database itself must already exist.

## Postman

Import `postman/Activity-2-Books-CRUD.postman_collection.json` into Postman. Run CREATE first, copy the returned book `id` into the collection variable `bookId`, then run READ ALL, READ ONE, UPDATE, and DELETE. For READ ONE, UPDATE, and DELETE, use an ID that exists in your local database.

Take your own screenshots of the successful requests and responses in Postman for submission. Screenshots are not pre-generated because they must show your actual local test results.

## GitHub submission

Commit the project files and the Postman collection. Do not commit `node_modules`, local credentials, or `.env` files. Include genuine Postman screenshots in a folder such as `screenshots/` once you have tested the endpoints.
=======
# XianFire-Activity-2-Gelelio
XianFire Framework Activity 2 - Edit, Delete, and Postman API Testing
>>>>>>> dce814972d04421d567d119c19263e5214306d9f

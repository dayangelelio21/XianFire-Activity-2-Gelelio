
import express from "express";
import { homePage } from "../controllers/homeController.js";
import product from "../controllers/productController.js";

const router = express.Router();

// Home route
router.get("/", homePage);

// PRODUCTS CRUD API

// CREATE
router.post("/products", product.insert);

// READ ALL
router.get("/products", product.all);

// READ ONE
router.get("/products/:id", product.isa);

// UPDATE
router.put("/products/:id", product.update);

// DELETE
router.delete("/products/:id", product.delete);

export default router;

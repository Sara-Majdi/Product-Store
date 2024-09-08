import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//GET PRODUCT, GET method
router.get("/", getProducts)

//CREATE PRODUCT
//if we want to create something, use "post" method
//Route to create a new product
router.post("/", createProduct);

//put   - when updating ALL fields on the resource
//patch - when updating SOME fields on the resource
//UPDATE PRODUCT
router.put("/:id", updateProduct);

//DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;
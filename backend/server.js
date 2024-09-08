//page is entry point for api

//const express = require('express'); (conventional way for import express)
import express from "express"; //to be able to use this, need to add <"type": "module", > in package.json
import dotenv from "dotenv"; //to be able to access the .env file
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //middleware that allows us to parse the req body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});



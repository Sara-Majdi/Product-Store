import mongoose from "mongoose";
import Product from "../models/product.model.js";

//GET PRODUCT
export const getProducts = async (req, res) =>{
    try {
        const products = await Product.find({}); // empty obj <{}> means fetch all products we hv in db
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error"})
        
    }
}

//CREATE PRODUCT
export const createProduct = async (req,res) => {
    const product = req.body; //user will send this data

    // Check if required fills are provided
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }

    // Create new product instance
    const newProduct = new Product(product)

    try {
        //save new product to the database
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}

//UPDATE PRODUCT
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success:false, message: "Invalid Product Id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new:true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
};


//DELETE PRODUCT
export const deleteProduct = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success:false, message: "Invalid Product Id"});
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted"});
    } catch (error) {
        console.log("error in deleting product", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema); 
// telling to create products collectioin using productSchema
// the <'Product'> will automatically becomes "products" in MongoDb

export default Product;

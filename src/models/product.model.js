import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String
    },
    urlImage: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    priceString: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true,
                maxlength: 100,
            },
            amount: {
                type: String
            },
        }
    ],
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

export default mongoose.model("Product", productSchema);
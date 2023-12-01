import mongoose from "mongoose";
import slugify from "slugify";

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
    slug:{
        type: String,
        unique: true,
        index: true

    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

productSchema.pre('save', function(next){
    this.slug = slugify(this.title, {lower:true});
    next();
});

export default mongoose.model("Product", productSchema);
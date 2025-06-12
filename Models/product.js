const mongoose = require('mongoose'); // Imports mongoose
const { v4: uuidv4 } = require('uuid'); // Correctly imports uuidv4 and renames v4 to uuidv4

const productSchema = new mongoose.Schema({ // Defines the schema correctly
    uuid: {
        type: String,
        default: uuidv4,
        unique: true
    },
    name: { type: String, required: true }, 
    description: { type: String, required: false }, 
    price: { type: Number, required: true }, // 
    category: { type: String, required: true },
    inStock: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', productSchema); // Exports the Product model
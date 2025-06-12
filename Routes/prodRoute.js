const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth');
const Product = require('../Models/product');

router.post('/', async (req, res) => {
    try {
        const product = new Product({...req.body});
        await product.save()
        res.status(201).json({message: "Product created successfully", product})
    } catch (error) {
        res.status(400).json({error: "Product creation failed!", details: error.message})
    }
});


router.get('/',  async (req, res) => {
    try {
        const products = await Product.find();
        if( !products || products.length === 0 ) {
            return res.status(404).json({ error: "Error finding products"})
        }
        res.status(201).json({message: "Products fetched successfully", products})
    } catch (error) {
        res.status(500).json({error: "Products fetching failed!", details: error.message})
    }
});

router.get('/stats', async (req, res) => {
  try {
    const stats = await Product.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]);
    res.json({ stats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get statistics" });
  }
});

router.get('/:id',  async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if( !product ) {
            return res.status(404).json({ error: "Error finding product"})
        }
        res.status(201).json({message: "Product fetched successfully", product})
    } catch (error) {
        res.status(500).json({error: "Product fetching failed!", details: error.message})
    }
});

router.put('/:id',  async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if( !product ) {
            return res.status(404).json({ error: "Error finding product:", product})
        }
        res.status(200).json({message: "Product updated successfully", product})
    } catch (error) {
        res.status(500).json({error: "Product Update failed!", details: error.message})
    }
});

router.delete('/:id',  async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if( !product ) {
            return res.status(404).json({ error: "Error finding product:", product})
        }
        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({error: "Product deletion failed!", details: error.message})
    }
});

module.exports = router;


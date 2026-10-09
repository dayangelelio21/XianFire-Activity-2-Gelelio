
import Product from "../models/productModel.js";

const product = {
    // CREATE
    insert: async (req, res) => {
        try {
            const newProduct = await Product.create(req.body);
            return res.status(201).json(newProduct);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    // READ ALL
    all: async (req, res) => {
        try {
            const prod = await Product.findAll();
            return res.status(200).json({ prod });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    // READ ONE
    isa: async (req, res) => {
        try {
            const data = await Product.findByPk(req.params.id);

            if (!data) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            return res.status(200).json({ data });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    // UPDATE
    update: async (req, res) => {
        try {
            const data = await Product.findByPk(req.params.id);

            if (!data) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            await data.update(req.body);

            return res.status(200).json({
                message: "Product updated successfully",
                data
            });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    // DELETE
    delete: async (req, res) => {
        try {
            const data = await Product.findByPk(req.params.id);

            if (!data) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            await data.destroy();

            return res.status(200).json({
                message: "Product deleted successfully"
            });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
};

export default product;

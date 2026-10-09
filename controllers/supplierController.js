import Supplier from "../models/supplierModel.js";

const supplierController = {
  index: async (req, res) => {
    try {
      const suppliers = await Supplier.findAll();
      res.json(suppliers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const supplier = await Supplier.create(req.body);
      res.status(201).json(supplier);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default supplierController;

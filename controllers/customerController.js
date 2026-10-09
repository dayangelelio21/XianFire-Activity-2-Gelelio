import Customer from "../models/customerModel.js";

const customerController = {
  index: async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const customer = await Customer.create(req.body);
      res.status(201).json(customer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default customerController;

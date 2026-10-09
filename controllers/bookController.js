import Book from "../models/bookModel.js";

const bookController = {
  create: async (req, res) => {
    try {
      const { title, author, genre, publishedYear, isbn, quantity } = req.body;

      if (!title || !author || !genre || publishedYear === undefined || !isbn || quantity === undefined) {
        return res.status(400).json({
          message: "Please provide title, author, genre, publishedYear, isbn, and quantity."
        });
      }

      const book = await Book.create({
        title,
        author,
        genre,
        publishedYear: Number(publishedYear),
        isbn,
        quantity: Number(quantity)
      });

      return res.status(201).json({
        message: "Book created successfully",
        data: book
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  readAll: async (_req, res) => {
    try {
      const books = await Book.findAll({ order: [["id", "ASC"]] });
      return res.status(200).json({ data: books });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  readOne: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.status(200).json({ data: book });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      const allowedFields = ["title", "author", "genre", "publishedYear", "isbn", "quantity"];
      const updates = {};
      for (const field of allowedFields) {
        if (req.body[field] !== undefined) updates[field] = req.body[field];
      }
      if (updates.publishedYear !== undefined) updates.publishedYear = Number(updates.publishedYear);
      if (updates.quantity !== undefined) updates.quantity = Number(updates.quantity);

      await book.update(updates);
      return res.status(200).json({
        message: "Book updated successfully",
        data: book
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      await book.destroy();
      return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export default bookController;

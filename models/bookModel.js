import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

export default Book;

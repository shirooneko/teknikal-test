import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

// Model Produk
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Model Kategori
const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Relasi Produk -> Kategori
Product.belongsTo(Category, { foreignKey: 'category_id' });

export { sequelize, Product, Category };

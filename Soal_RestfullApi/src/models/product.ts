import { DataTypes } from 'sequelize';
import sequelize from './db';
import Category from './category';

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

Product.belongsTo(Category, { foreignKey: 'category_id' });

export default Product;
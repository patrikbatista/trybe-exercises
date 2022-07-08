// const {
//   Model,
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Book extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Book.init({
//     id: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     pageQuantity: DataTypes.INTEGER,
//   }, {
//     sequelize,
//     modelName: 'Book',
//   });
//   return Book;
// };
const Book = (sequelize, DataTypes) => {
  const bookDefine = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    // createdAt: DataTypes.DATE,
  }, {
    // freezeTableName: false,
    timestamp: true,
    underscored: true,
    tableName: 'books',
  });

  return bookDefine;
};

module.exports = Book;

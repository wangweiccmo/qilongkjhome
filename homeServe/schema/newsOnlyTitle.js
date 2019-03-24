/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
      laiyuan: {
          type: DataTypes.STRING(255),
          allowNull: true
      },
      info: {
          type: DataTypes.STRING(255),
          allowNull: true
      },
      img: {
          type: DataTypes.STRING(255),
          allowNull: true
      },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'news'
  });
};

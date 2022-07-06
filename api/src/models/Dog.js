const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: false },
    lifeSpan: { type: DataTypes.INTEGER },
    image: { type: DataTypes.STRING(1000) },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};

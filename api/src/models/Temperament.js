const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("temperament", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: {
        isUUID: {
          args: 4,
          msg: "Should have a proper id",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

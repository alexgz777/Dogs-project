const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("dog", {
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
      validate: {
        isAlpha: {
          args: true,
          msg: "The name should be string",
        },
      },
    },
    height: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false },
    weight: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false },
    lifeSpan: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: "The lifeSpan should be an integer",
        },
      },
    },
    image: {
      type: DataTypes.STRING(1000),
      validate: {
        isUrl: true,
      },
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};

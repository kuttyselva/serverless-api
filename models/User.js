const sequelize = require("../models/Db");
const Role = sequelize.import("../models/Role");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "t_user",
    {
      pk_user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      user_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      user_password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      user_location: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      user_age: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      user_phone: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      fk_role_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "t_role",
          key: "pk_role_id"
        }
      },
      is_active: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: "1"
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      }
    },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      tableName: "t_user"
    }
  );
  User.belongsTo(Role,{foreignKey:'fk_role_id'});
  return User;
};

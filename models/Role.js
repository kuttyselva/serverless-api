module.exports = function(sequelize, DataTypes) {
  const Role = sequelize.define(
    "t_role",
    {
      pk_role_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      role_desc: {
        type: DataTypes.STRING(45),
        allowNull: false
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
      tableName: "t_role"
    }
  );
  return Role;
};

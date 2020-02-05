
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('t_patient', {
      pk_patient_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      patient_disease: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      fk_user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 't_user',
          key: 'pk_user_id'
        }
      },
      is_active: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      tableName: 't_patient'
    });
  };
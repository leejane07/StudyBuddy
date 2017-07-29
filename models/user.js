module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  })
}

  
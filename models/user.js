module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });
  return User;
}

  
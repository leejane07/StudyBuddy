module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   // email validation
      //   // no dupe users
      // }
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      len: [1]
    }
  });
  return User;
}

  
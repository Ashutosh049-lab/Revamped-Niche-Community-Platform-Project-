
// const { DataTypes } = require('sequelize');
// const sequelize = require('../index'); // Import the configured sequelize instance

// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   bio: {
//     type: DataTypes.TEXT
//   },
//   avatarUrl: {
//     type: DataTypes.STRING
//   },
//   interests: {
//     type: DataTypes.ARRAY(DataTypes.STRING)
//   }
// }, {
//   timestamps: true
// });

// module.exports = User;


// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database').default;

// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false
//   }
// });

// module.exports = User;



import { DataTypes } from 'sequelize';
import { define } from '../config/database';

const User = define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

export default User;

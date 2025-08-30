
import { DataTypes } from 'sequelize';
import { define } from '../index';

const Community = define('Community', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.STRING
  },
  coverImageUrl: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
});

export default Community;
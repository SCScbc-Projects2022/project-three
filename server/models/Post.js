const { Schema, model } = require('mongoose');
const sequelize = require('../config/connection');

// class Post extends Model {}
// role, start and end time, additional information, under which manager, location
// Tag: string

const postSchema = new Schema(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
    timestamps: true,
  }
);

const Post = model('Post', postSchema);

module.exports = Post;

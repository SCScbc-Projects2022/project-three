const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'user_id',
            'job_position',
            'post_content',
            'location',
        ],
        include: [{
            model: User,
            attributes: ['username']
        }]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
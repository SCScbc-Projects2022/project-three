const mongoose = require('mongoose');
const Post = require('../models/Post');

const seedPost = [
    {
        user_id: '0001',
        job_position: 'server',
        post_content: 'giving away shift',
        location: 'downtown'
    },
    {
        user_id: '0002',
        job_position: 'host',
        post_content: 'giving away shift',
        location: 'north york'
    },
]
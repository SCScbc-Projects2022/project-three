const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/project-three', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('Mongo connected');
})
.catch(() => {
    console.log(err);
});

const seedUser = [
{
    username: 'Ed',
    email: 'ed123@gmail.com',
    password: 'password1'
},
{   username: 'Sam',
    email: 'sam123@gmail.com',
    password: 'password2'
},
{
    username: 'Jen',
    email: 'jen123@gmail.com',
    password: 'password3'
}
];

const seedDB = async() => {
    await User.insertMany(seedUser);
};

seedDB().then(() => {
    mongoose.connection.close();
})
const UserData = require('./user-seeds.json');
const TagData = require('./tag-seeds.json');
const RoleData = require('./roles-seeds.json');
const PostData = require('./post-seeds.json');
const LocationData = require('./location-seeds.json');
const CompanyData = require('./company-seeds.json');
const mongoose = require('mongoose');

const {Company, Location, Post, Role, Tag, User} = require('../models');
const db = require('../config/connection');

db.once('open', async() => {
    // clean database
    await Post.deleteMany({});
    await Location.deleteMany({});
    await User.deleteMany({});
    await Company.deleteMany({});
    await Role.deleteMany({});
    await Tag.deleteMany({});

//bulk create each model
const tags = await Tag.insertMany(TagData);
const role = await Role.insertMany(RoleData);
const users = await User.insertMany(UserData);
const companies = await Company.insertMany(CompanyData);
// add the postArr and locationsArr to the companies we created 
module.exports = companies.map(name => ({
    username: name,
    postsArr: getObjectId(name),
    locationArr: getObjectId(name)
}
));
const locations = await Location.insertMany(LocationData);
// add to each location the company id
module.exports = companies.map(locations => ({
    address: getObjectId(locations)
}))
const posts = await Post.insertMany(PostData);
//add locations to this post
module.exports = posts.map(locations => ({
    address: getObjectId(locations)
}))


console.log('testing');
process.exit(0);

});
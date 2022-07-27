const UserData = require('./user-seeds.json');
const RoleData = require('./roles-seeds.json');
const PostData = require('./post-seeds.json');
const LocationData = require('./location-seeds.json');
const CompanyData = require('./company-seeds.json');
const mongoose = require('mongoose');
const { Company, Location, Post, Role, Tag, User } = require('../models');

const db = require('../config/connection');

db.once('open', async () => {

  // clean database
  await Post.deleteMany({});
  await Location.deleteMany({});
  await User.deleteMany({});
  await Company.deleteMany({});
  await Role.deleteMany({});
  
  //bulk create each model
  const tags = ["urgent", "picking up shift", "double pay", "advanced skills needed"];
  const roles = await Role.insertMany(RoleData);
  const posts = await Post.insertMany(PostData);
  const users = await User.insertMany(UserData);
  const companies = await Company.insertMany(CompanyData);
  const locations = await Location.insertMany(LocationData);

  function RNG3() {
    return Math.floor(Math.random() * 3);
  }

  function RNG6() {
    return Math.floor(Math.random() * 6);
  }

  // add locations to company
  for (i = 0; i < locations.length; i++) {
    await Company.findByIdAndUpdate(
      {_id: companies[0]._id},
      {$addToSet: {locationArr: locations[i]._id}},
      {new: true}
    )
  }

  // add users to company
  for (i = 0; i < users.length; i++) {
    await Company.findByIdAndUpdate(
      {_id: companies[0]._id},
      {$addToSet: {userArr: users[i]._id}},
      {new: true}
    )
  }

  // add posts to company
  for (i = 0; i < posts.length; i++) {
    await Company.findByIdAndUpdate(
      {_id: companies[0]._id},
      {$addToSet: {postsArr: posts[i]._id}},
      {new: true}
    )
  }

  // add roles to company
  for (i = 0; i < roles.length; i++) {
    await Company.findByIdAndUpdate(
      {_id: companies[0]._id},
      {$addToSet: {rolesArr: roles[i]._id}},
      {new: true}
    )
  }

  // add employees to locations
  const employeeDist = {
    0: [0, 1, 2],
    1: [3, 4, 5],
    2: [6, 7, 8],
    3: [9, 10, 11],
    4: [12, 13, 14],
    5: [15, 16, 17],
  }

  for (i = 0; i < locations.length; i++) {
    await Location.findByIdAndUpdate(
      {_id: locations[i]._id},
      {$addToSet: {employees: {$each: [users[employeeDist[i][0]]._id, users[employeeDist[i][1]]._id, users[employeeDist[i][2]]._id]}}},
      {new: true}
    )
  }

  // add location to post
  for (i = 0; i < posts.length; i++) {
    await Post.findByIdAndUpdate(
      {_id: posts[i]._id},
      {$addToSet: {locationArr: locations[RNG6()]._id}},
      {new: true}
    )
  }

  // add role to post
  for (i = 0; i < posts.length; i++) {
    await Post.findByIdAndUpdate(
      {_id: posts[i]._id},
      {$addToSet: {role: roles[RNG6()].title}},
      {new: true}
    )
  }

  // add tags to post
  for (i = 0; i < posts.length; i++) {
    await Post.findByIdAndUpdate(
      {_id: posts[i]._id},
      {$addToSet: {tags: tags[RNG3()]}},
      {new: true}
    )
  }

  // add company to role
  for (i = 0; i < roles.length; i++) {
    await Role.findByIdAndUpdate(
      {_id: roles[i]._id},
      {$addToSet: {companyId: companies[0]._id}},
      {new: true}
    )
  }

  // add location to user
 let place = 0;

  for (i = 0; i < users.length; i++) {
    switch (i) {
      case 0 || 1 || 2:
        place = 0;
        break;
      case 3 || 4 || 5:
        place = 1;
        break;
      case 6 || 7 || 8:
        place = 2;
        break;
      case 9 || 10 || 11:
        place = 3;
        break;
      case 12 || 13 || 14:
        place = 4;
        break;
      case 15 || 16 || 17:
        place = 5;
        break;
    }
    await User.findByIdAndUpdate(
      {_id: users[i]._id},
      {$addToSet: {location: locations[place]._id}},
      {new: true}
    )
  }

  // add role to user
  for (i = 0; i < users.length; i++) {
    await User.findByIdAndUpdate(
      {_id: users[i]._id},
      {$addToSet: {role: roles[RNG6()].title}},
      {new: true}
    )
  }

  console.log('\n DATABASE SEEDED');
  process.exit(0);
});

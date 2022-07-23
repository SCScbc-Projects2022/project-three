const UserData = require('./user-seeds.json');
const TagData = require('./tag-seeds.json');
const RoleData = require('./roles-seeds.json');
const PostData = require('./post-seeds.json');
const LocationData = require('./location-seeds.json');
const CompanyData = require('./company-seeds.json');
// const mongoose = require('mongoose');

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
const locations = await Location.insertMany(LocationData);

// add to each location the company id and users

const locationsStores = locations.map(async (location) => {
    const company = companies.find(
      (company) => company.name == location.address.storeName
    );
    const locationUsers = users.filter(
      (user) =>
        user.location == location.address.locationName &&
        user.store == company.name
    );
    const locationUsersIds = locationUsers.map((user) => user._id);
    // console.log(company.name,company._id,location._id)
    // console.log(locationUsers)
​
    const updateStore = await Location.updateOne(
      { _id: location._id },
      { $push: { storeId: [company._id], employees: locationUsersIds } },
      { new: true }
    );
    return updateStore;
  });
  const insertLocations = await Promise.all(locationsStores);
​
  // console.log(insertLocations)
  const posts = await Post.insertMany([
    ...PostData.map((post) => ({
      ...post,
      locationArr: locations.map((location) => location._id),
    })),
  ]);
  //add locations to this post
  // console.log(posts)
​
  // add the postArr and locationsArr to the companies we created
  const companyArrays = companies.map(async (company) => {
    const locations = await Location.find({
      "address.storeName": { $in: [company.name] },
    });
    const locationsIds = locations.map((location) => location._id);
    const posts = await Post.find({ locationArr: { $in: locationsIds } });
    const postsIds = posts.map((post) => post._id);
​
    // console.log(locationsIds);
    // console.log(postsIds);
​
    return (updateStore = await Company.updateOne(
      { _id: company._id },
      { $push: { postsArr: postsIds, locationArr: locationsIds } },
      { new: true }
    ));
  });
  const insertCompanyArrays = await Promise.all(companyArrays);
  console.log(insertCompanyArrays);
​
  console.log("testing");
  process.exit(0);
});

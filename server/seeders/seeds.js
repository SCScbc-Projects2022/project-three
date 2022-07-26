const UserData = require('./user-seeds.json');
const TagData = require('./tag-seeds.json');
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
  await Tag.deleteMany({});
  //bulk create each model
  const tags = await Tag.insertMany(TagData);
  const role = await Role.insertMany(RoleData);
  const users = await User.insertMany(UserData);
  const companies = await Company.insertMany(CompanyData);
  const locations = await Location.insertMany(LocationData);

  // Added to each location the company id and users mapping through the results from the original inserts
  const locationsStores = locations.map(async (location) => {
    //I looked inside the companies array for the one that matched the current location in the loop that had the same storename inside the address object
    const company = companies.find(
      (company) => company.name == location.address.storeName
    );
    // I looked inside the user array for the one that matched the current location in the loop that had the same locationname inside the address object
    //and the company name from the previous method that matched the store on the user
    const locationUsers = users.filter(
      (user) =>
        user.location == location.address.locationName &&
        user.store == company.name
    );
    //mapped through the results from above to get only the _id generated on mongodb
    const locationUsersIds = locationUsers.map((user) => user._id);
    //[12adasd1123,ewd3214ed32d3d,eded3er32dedd,d32ed32d32da,]

    //using the formatted and arranged data from above we finally send the update to the current location
    const updateStore = await Location.updateOne(
      { _id: location._id },
      { $push: { companyId: [company._id], employees: locationUsersIds } },
      { new: true }
    );
    return updateStore;
  });
  //we use a promise so each update goes through before continuing the code
  const insertLocations = await Promise.all(locationsStores);

  //add locations to this post from the original results
  const posts = await Post.insertMany([
    ...PostData.map((post) => ({
      ...post,
      locationArr: locations.map((location) => location._id),
    })),
  ]);

  // add the postArr and locationsArr to the companies we created
  const companyArrays = companies.map(async (company) => {
    //looked for the locations that match the company store name anddress
    const locations = await Location.find({
      'address.storeName': { $in: [company.name] },
    });

    //from those locations mapped the ids
    const locationsIds = locations.map((location) => location._id);
    //looked for the posts that matched the locations ids on the locationArr
    const posts = await Post.find({ locationArr: { $in: locationsIds } });
    //from those posts I mapped the posts ids
    const postsIds = posts.map((post) => post._id);

    //and I updated the company with both arrays
    return (updateStore = await Company.updateOne(
      { _id: company._id },
      { $push: { postsArr: postsIds, locationArr: locationsIds } },
      { new: true }
    ));
  });
  const insertCompanyArrays = await Promise.all(companyArrays);
  console.log(insertCompanyArrays);
  console.log('\n DATABASE SEEDED');
  process.exit(0);
});

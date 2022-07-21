const faker = require('faker');

const db = require('../config/connection');
const {Company, User, Location, Tag} = require('../models');

db.once('open', async () => {
    await Company.deleteMany({});
    await User.deleteMany({});
    await Location.deleteMany({});
    await Tag.deleteMany({});

    const companySeeds = [];

    for (let i = 0; i < 2; i += 1) {
        let name = faker.company.companyName();
        let username = faker.internet.userName(name);
        let email = faker.internet.email(username);
        let password = faker.internet.password(6);
    
        companySeeds.push({name, username, email, password});
    }

    let createdCompanies = await Company.collection.insertMany(companySeeds);
    // need mutations for employees, locations, and posts

    const userSeeds = [];

    for (let i = 0; i < 25; i += 1) {
        let first = faker.name.firstName();
        let last = faker.name.lastName();
        let username = faker.internet.username(first, last);
        let password = faker.internet.password();
        let role = faker.commerce.department();
        // need mutations for location
    
        companySeeds.push({first, last, username, password, role});
    }

    let createdUsers = await User.collection.insertMany(userSeeds);

    const locationSeeds = [];

    for (let i = 0; i < 10; i += 1) {
        let address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            phone: faker.phone.phoneNumber()
        }
        locationSeeds.push(address);
        // need associations for employees
    }

    let createdLocations = await Location.collection.insertMany(locationSeeds);

    const postSeeds = [];

    function getShift() {
        let startTime = Math.floor(Math.random() * 12);
        let shiftDuration = Math.floor(Math.random() * 8);
        let endTime = startTime + shiftDuration;
        if (endTime > 23) {
            endTime -= 12;
        }
        return {
            start: startTime + ':00',
            end: endTime + ':00'
        }
    }

    for (let i = 0; i < 15; i += 1) {
        let role = faker.commerce.department();
        let shiftTime = getShift();
        postSeeds.push({role, shiftTime});
        // need associations for tags
    }

    let createdPosts = await Post.collection.insertMany(postSeeds);

    const tagSeeds = [];

    for (let i = 0; i < 15; i += 1) {
        let name = faker.commerce.department();
        tagSeeds.push({name});
    }


    console.log('DATABASE SEEDED');
    process.exit(0);
});
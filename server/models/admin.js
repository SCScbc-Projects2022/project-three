const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please add a valid email address.',
            ]
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        // add management model arrays here
    }
)

adminSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

adminSchema.methods.validatePassword = async(function(password) {
    return bcrypt.compare(password, this.password);
});

const Admin = model('Admin', adminSchema)
module.exports = Admin;
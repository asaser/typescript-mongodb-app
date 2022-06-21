import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    userlast: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', usersSchema); 

module.exports = User;
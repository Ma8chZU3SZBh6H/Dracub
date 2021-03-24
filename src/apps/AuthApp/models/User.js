import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import Database from '../Database.js';

const schema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    token: String
});

schema.plugin(uniqueValidator);

const model = Database.model('User', schema);

export default model;
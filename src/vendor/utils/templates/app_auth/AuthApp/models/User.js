import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { mongo } from '../App.js';

const schema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    token: String
});

schema.plugin(uniqueValidator);

const model = mongo.model('User', schema);

export default model;
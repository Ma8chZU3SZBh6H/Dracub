import mongoose from 'mongoose';
import Database from '../Database.js';

const schema = mongoose.Schema({
    test: String
});

const model = Database.model('Test', schema);
export default model;

import mongoose from 'mongoose';
import { mongo } from '../App.js';

const schema = mongoose.Schema({
    name: String
});

const model = mongo.model('[MODEL_NAME]', schema);
export default model;

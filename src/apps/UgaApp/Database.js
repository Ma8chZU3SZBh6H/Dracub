import ENV from './ENV.js';
import mongoose from 'mongoose';

const mongo = mongoose.createConnection(ENV.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        cosnole.log(error);
    }
    else {
        console.log(`${ENV.NAME} database is running - URL: ${ENV.DB_URL}`);
    }
});

export default mongo;
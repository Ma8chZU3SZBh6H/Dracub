import mongoose from 'mongoose';
class DB {
    static mongo(ENV) {
        const mongo = mongoose.createConnection(ENV.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
            if (error) {
                cosnole.log(error);
            }
            else {
                console.log(`${ENV.NAME} database is running - URL: ${ENV.DB_URL}`);
            }
        });
        return mongo;
    }
}

export default DB;
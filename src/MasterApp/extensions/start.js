import mongoose from 'mongoose';
//import ENV from '../../apps/AuthApp/config/ENV.js';

class Start {
    start() {
        return new Promise((resolve, reject) => {
            try {
                this.app.listen(this.ENV.APP_PORT, resolve);
                console.log(`${this.ENV.NAME} server is running - PORT: ${this.ENV.APP_PORT}`);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default Start;
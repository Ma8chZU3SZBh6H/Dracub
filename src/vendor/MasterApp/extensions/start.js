import mongoose from 'mongoose';
//import ENV from '../../apps/AuthApp/config/ENV.js';

class Start {
    start() {
        return new Promise((resolve, reject) => {
            try {
                this.app.listen(this.ENV.PORT, resolve);
                console.log(`${this.ENV.NAME} server is running - URL: ${this.ENV.URL} - PORT: ${this.ENV.PORT}`);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default Start;
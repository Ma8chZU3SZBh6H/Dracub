import dotenv from 'dotenv';
dotenv.config();

class ENVLoader {
    static load(app) {
        const appName = `${app.replace('App', '')}_app`.toUpperCase();
        const env = {};
        for (const [key, value] of Object.entries(process.env)) {
            if (key.includes(appName)) {
                const envRenamed = key.replace(`${appName}_`, '');
                env[envRenamed] = value;
            }
        }

        return env;
    }
}

export default ENVLoader;
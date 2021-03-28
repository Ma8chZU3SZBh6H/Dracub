import fs from 'fs';
import path from 'path';
import ModuleLoader from './ModuleLoader.js';
import ENVLoader from './ENVLoader.js';


class AppsLoader {
    constructor() {
        this.apps = {};
        this.appsDir = path.join(path.resolve('./'), 'src/apps');
    }
    async load() {
        const modules = await ModuleLoader.load(this.appsDir, 'App.js');
        for (const [key, value] of Object.entries(modules)) {
            this.apps[key] = { app: value, env: ENVLoader.load(key) };
        }
    }
    start() {
        for (const [key, value] of Object.entries(this.apps)) {
            this.apps[key].app.default.start();
        }
    }
    bounce(req, res, bounce, apps) {
        for (const [key, value] of Object.entries(apps)) {
            //console.log(apps[key].env);
            //console.log(apps[key].env.URL, req.headers.host);
            if (apps[key].env.URL == req.headers.host) {
                return bounce(apps[key].env.PORT);
            }
        }
        res.statusCode = 404;
        res.end(false);
    }
}

export default AppsLoader;
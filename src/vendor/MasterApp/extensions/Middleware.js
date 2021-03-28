import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';

class Middleware {
    async registerMiddleware() {
        this.app.use(express.json({ limit: '30mb', extended: true }));
        this.app.use(express.urlencoded({ limit: '30mb', extended: true }));
        this.app.use(cookieParser());
        this.app.use(cors({ origin: [this.ENV.URL, 'localhost'], credentials: true }));
        const auth_app_dir = path.resolve('src/apps/AuthApp/middleware/Auth.js');
        if (fs.existsSync(auth_app_dir)) {
            const mod = await import(`file:///${auth_app_dir}`);
            this.app.use(mod.default.parseUser);
        }
    }
}

export default Middleware;
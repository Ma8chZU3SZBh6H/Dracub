import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Auth from '../../apps/AuthApp/middleware/Auth.js';

class Middleware {
    registerMiddleware() {
        this.app.use(express.json({ limit: '30mb', extended: true }));
        this.app.use(express.urlencoded({ limit: '30mb', extended: true }));
        this.app.use(cookieParser());
        this.app.use(cors({ origin: this.ENV.APP_URL, credentials: true }));
        this.app.use(Auth.parseUser);
    }
}

export default Middleware;
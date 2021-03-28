import jwt from 'jsonwebtoken';
import { ENV } from '../App.js';

class Auth {
    static parseUser(req, res, next) {
        try {
            const token = req.cookies[ENV.COOKIE_NAME];
            if (token == null) {
                req.user = null;
            }
            else {
                jwt.verify(token, ENV.JWT_TOKEN_SECRET, (error, user) => {
                    if (error) {

                        req.user = null;
                    }
                    else {
                        req.user = user;
                    }
                });
            }
            next();
        } catch (error) {
            req.user = null;
            next();
        }
    }
    static async loggedIn(req, res, next) {
        try {
            if (req.user != null) {
                next();
            }
            else {
                res.status(401).send(false);
            }
        } catch (error) {
            res.status(500).send(false);
        }
    }
    static async loggedOut(req, res, next) {
        try {
            if (req.user == null) {
                next();
            }
            else {
                res.status(401).send(false);
            }
        } catch (error) {
            res.status(500).send(false);
        }
    }
}

export default Auth;
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Validator } from 'node-input-validator';
import ENV from '../ENV.js';

class AuthController {
    static async validate(req, res, next) {
        try {
            const v = new Validator(req.body, {
                email: 'required|maxLength:255|email',
                password: 'required|maxLength:255'
            });
            const status = await v.check();
            if (!status) {
                res.status(422).send(v.errors);
            }
            else {
                next();
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(false);
        }
    }
    static async register(req, res) {
        try {
            const { email, password } = await req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const token = jwt.sign({ email }, ENV.JWT_TOKEN_SECRET);
            const user = new User({ email: email, password: hashedPassword, token: token });
            await user.save();
            res.cookie(ENV.APP_COOKIE_NAME, token);
            res.send(true);
        } catch (error) {
            console.log(error);
            res.status(401).send(false);
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = await req.body;
            const user = await User.findOne({ email: email });
            if (user == null) {
                return res.status(404).send(false);
            }

            if (await bcrypt.compare(password, user.password)) {
                if (user.token == null) {
                    user.token = jwt.sign({ email }, ENV.JWT_TOKEN_SECRET);
                    user.save();
                }
                res.cookie(ENV.APP_COOKIE_NAME, user.token);
                res.send(true);
            }
            else {
                res.send(false);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(false);
        }
    }
    static async logout(req, res) {
        try {
            res.cookie(ENV.APP_COOKIE_NAME, null, {
                maxAge: 0,
            });
            res.send(true);
        } catch (error) {
            console.log(error);
            res.status(500).json(false);
        }
    }
}

export default AuthController;
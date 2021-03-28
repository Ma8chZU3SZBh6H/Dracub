import { ENV } from '../App.js';

class [MIDDLEWARE_NAME] {
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
}

export default [MIDDLEWARE_NAME];
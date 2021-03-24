import express from 'express';
import AuthController from '../controllers/AuthController.js';
import Auth from '../middleware/Auth.js';

class AuthRouter {
    static register() {
        const router = express.Router();
        router.post('/register', Auth.loggedOut, AuthController.validate, AuthController.register);
        router.post('/login', Auth.loggedOut, AuthController.validate, AuthController.login);
        router.post('/logout', Auth.loggedIn, AuthController.logout);
        return router;
    }
}

export default AuthRouter;
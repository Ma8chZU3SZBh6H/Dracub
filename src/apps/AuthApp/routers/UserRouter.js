import express from 'express';
import UserController from '../controllers/UserController.js';
import Auth from '../middleware/Auth.js';

class UserRouter {
    static register() {
        const router = express.Router();
        router.get('/profile', Auth.loggedIn, UserController.get);
        router.get('/delete', UserController.delete);
        return router;
    }
}

export default UserRouter;
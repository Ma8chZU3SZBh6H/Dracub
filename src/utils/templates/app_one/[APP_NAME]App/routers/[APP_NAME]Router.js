import express from 'express';
import [APP_NAME]Controller from '../controllers/[APP_NAME]Controller.js';

class TestRouter {
    static register() {
        const router = express.Router();
        router.get('/', [APP_NAME]Controller.index);
        router.get('/post', [APP_NAME]Controller.store);
        router.get('/clear', [APP_NAME]Controller.clear);
        return router;
    }
}

export default TestRouter;
import express from 'express';
import UgaController from '../controllers/UgaController.js';

class TestRouter {
    static register() {
        const router = express.Router();
        router.get('/', UgaController.index);
        router.get('/post', UgaController.store);
        router.get('/clear', UgaController.clear);
        return router;
    }
}

export default TestRouter;
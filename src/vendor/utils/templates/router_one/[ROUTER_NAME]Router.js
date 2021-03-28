import express from 'express';

class [ROUTER_NAME]Router {
    static path = '/';
    static register() {
        const router = express.Router();
        //router.get('/', [ROUTER_NAME]Controller.index);
        return router;
    }
}

export default [ROUTER_NAME]Router;
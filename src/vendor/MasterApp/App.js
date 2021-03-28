import express from 'express';
import { Mixin } from 'ts-mixer';
import Middleware from './extensions/Middleware.js';
import Start from './extensions/Start.js';
import Loader from './extensions/Loader.js';
//import ENV from '../apps/AuthApp/config/ENV.js';


class App extends Mixin(Middleware, Start, Loader) {
    constructor(ENV) {
        super();
        this.ENV = ENV;
        this.app = express();
        this.registerMiddleware();
    }
    use(...params) {
        this.app.use(...params);
    }
}

export default App;
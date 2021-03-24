import UgaRouter from './routers/UgaRouter.js';
import ENV from './ENV.js';
import App from '../../MasterApp/App.js';

const app = new App(ENV);
app.use('/', UgaRouter.register());

export default app;
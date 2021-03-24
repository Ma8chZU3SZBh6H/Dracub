import AuthRouter from './routers/AuthRouter.js';
import UserRouter from './routers/UserRouter.js';
import ENV from './ENV.js';
import App from '../../MasterApp/App.js';

const app = new App(ENV);
app.use('/', AuthRouter.register());
app.use('/user', UserRouter.register());

export default app;
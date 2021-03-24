import [APP_NAME]Router from './routers/[APP_NAME]Router.js';
import ENV from './ENV.js';
import App from '../../MasterApp/App.js';

const app = new App(ENV);
app.use('/', [APP_NAME]Router.register());

export default app;
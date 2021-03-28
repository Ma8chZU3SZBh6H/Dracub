import App from '../../vendor/MasterApp/App.js';
import ENVLoader from '../../vendor/loaders/ENVLoader.js';
import DB from '../../vendor/DB.js';


export const ENV = ENVLoader.load('Auth');
export const mongo = DB.mongo(ENV);
const app = new App(ENV);
app.auto();
export default app;



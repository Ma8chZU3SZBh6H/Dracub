import bouncy from 'bouncy';
import AppsLoader from './src/vendor/loaders/AppsLoader.js';

const appsLoader = new AppsLoader();
let bouncer;

(async () => {
    await appsLoader.load();
    appsLoader.start();
    bouncer = bouncy((req, res, bounce) => appsLoader.bounce(req, res, bounce, appsLoader.apps));
    bouncer.listen(80);
})();

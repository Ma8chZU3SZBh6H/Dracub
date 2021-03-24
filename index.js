import bouncy from 'bouncy';
import AuthApp from './src/apps/AuthApp/App.js';
import UgaApp from './src/apps/UgaApp/App.js';

AuthApp.start();
UgaApp.start();

const bouncer = bouncy((req, res, bounce) => {
    switch (req.headers.host) {
        case 'localhost':
        case 'example.com':
            bounce(1001);
            break;
        case 'login.example.com':
            bounce(1000);
            break;
        default:
            res.statusCode = 404;
            res.end(false);
            break;
    }
});
bouncer.listen(80);

import fs from 'fs';
import path from 'path';
import Maker from './makers/Maker.js';

let name = process.argv.slice(2)[0];
let templateName = process.argv.slice(3)[0];
let ENV = 'ENV_ONE';


if (templateName == null) {
    switch (name) {
        case 'auth':
            name = 'auth';
            templateName = 'app_auth';
            ENV = "ENV_TWO";
            break;

        default:
            templateName = 'app_two';
            break;
    }
}
else {
    switch (templateName) {
        case 'auth':
            name = 'auth';
            templateName = 'app_auth';
            ENV = "ENV_TWO";
            break;

        default:
            templateName = 'app_two';
            break;
    }
}

console.log(templateName, name);
if (name && templateName) {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    const nameFullyCapitalized = name.toUpperCase() + "_APP";
    const output = path.join(path.resolve('./'), `/src/apps/`);
    if (!fs.existsSync(path.join(output, `${nameCapitalized}App`))) {

        const app = new Maker(output, templateName, {
            APP_NAME: nameCapitalized,
            ENV_NAME: nameFullyCapitalized
        });
        app.start();
        app.env(ENV);
    }
    else {
        console.log(`App ${nameCapitalized}App already exists`);
    }
}
else {
    console.log('you must provide an app name like this\nnpm run make:app example\nwhich will create an ExampleApp in apps folder');
}
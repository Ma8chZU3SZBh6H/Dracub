import fs from 'fs';
import path from 'path';
import Maker from './Maker.js';

const componentName = process.argv.slice(4)[0];
const name = process.argv.slice(3)[0];
const templateName = process.argv.slice(2)[0];

class ComponentMaker {
    constructor(REPLACE_NAME, FOLDER_NAME, FILE_NAME) {
        if (name && templateName && componentName) {
            const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
            const componentNameCapitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);
            const output = path.join(path.resolve('./'), `/src/apps/${nameCapitalized}App/${FOLDER_NAME}`);
            if (!fs.existsSync(path.join(output, `${componentNameCapitalized}${FILE_NAME}`))) {
                if (!fs.existsSync(output)) {
                    fs.mkdirSync(output);
                }
                const replaces = {};
                replaces[REPLACE_NAME] = componentNameCapitalized;
                const app = new Maker(output, templateName, replaces);
                app.start();
            }
            else {
                console.log(`${FILE_NAME} ${nameCapitalized}App already exists`);
            }
        }
        else {
            console.log(`INVALID SYNTAX - npm run make:${FILE_NAME.toLowerCase()} APP_NAME ${FILE_NAME.toUpperCase()}_NAME`);
        }
    }
}

export default ComponentMaker;
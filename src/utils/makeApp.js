import fs from 'fs';
import path from 'path';
//import env from './resources/.env';
class AppMaker {
    constructor(template_Name, replace) {
        this.dir = path.resolve('./');
        this.envInputDir = path.join(this.dir, `/src/utils/templates/TEMPLATE_ENV`);
        this.inputDir = path.join(this.dir, `/src/utils/templates/${template_Name}`);
        this.outputDir = path.join(this.dir, `/src/apps/`);
        this.replace = replace;
    }
    start() {
        this.scan(path.join(this.inputDir, ''));
        this.env();
    }
    scan(_dir) {
        const files = fs.readdirSync(_dir);
        files.forEach(file => {
            const filePath = path.join(_dir, file);
            const outputPath = path.join(this.outputDir, this.parse(filePath).replace(this.inputDir, ''));
            if (fs.lstatSync(filePath).isDirectory()) {
                fs.mkdirSync(outputPath);
                this.scan(filePath);
            }
            else {
                let file = fs.readFileSync(filePath, 'utf8');
                file = this.parse(file);
                fs.writeFileSync(outputPath, file);
            }
        });
    }
    parse(string) {
        for (const [key, value] of Object.entries(this.replace)) {
            string = string.replaceAll(`[${key}]`, value);
        }
        return string;
    }
    env() {
        const env_file_output = path.join(this.dir, '.env');
        let env_template = fs.readFileSync(this.envInputDir, 'utf8');
        env_template = this.parse(env_template);
        if (fs.existsSync(env_file_output)) {
            fs.appendFileSync(env_file_output, `\n\n${env_template}`);
        }
        else {
            fs.writeFileSync(env_file_output, env_template);
        }
    }
}

const appName = process.argv.slice(2)[0];
if (appName) {
    const appNameCapitalized = appName.charAt(0).toUpperCase() + appName.slice(1);
    const appNameFullyCapitalized = appName.toUpperCase() + "_APP";
    const output = path.join(path.resolve('./'), `/src/apps/${appNameCapitalized}App`);
    if (!fs.existsSync(output)) {
        const app = new AppMaker('app_one', {
            APP_NAME: appNameCapitalized,
            ENV_NAME: appNameFullyCapitalized
        });
        app.start();
    }
    else {
        console.log(`App ${appNameCapitalized}App already exists`);
    }

    // const dirs = fs.readdirSync(templatesDir);
    // const newFilePath = path.join(templatesDir, dirs[0]);
    // const type = fs.lstatSync(newFilePath);
    // console.log(type.isDirectory());
}
else {
    console.log('you must provide an app name like this\nnpm run make:app example\nwhich will create an ExampleApp in apps folder');
}

// const appName = process.argv.slice(2)[0];
// function copyAndModify(templateFIle, newFile, oldName, newName, method = 'writeFileSync') {
//     let generatedFile = fs.readFileSync(templateFIle, "utf8");
//     if ((typeof oldName) == "object") {
//         for (let index = 0; index < oldName.length; index++) {
//             generatedFile = generatedFile.replaceAll(oldName[index], newName[index]);
//         }
//     }
//     else {
//         generatedFile = generatedFile.replaceAll(oldName, newName);
//     }
//     fs[method](newFile, (method == 'appendFileSync' ? '\n\n' : '') + generatedFile);
// }
// (function () {
//     if (appName) {
//         const appNameCapitalized = appName.charAt(0).toUpperCase() + appName.slice(1);
//         const appNameFullyCapitalized = appName.toUpperCase() + "_APP";
//         const appFolderName = `${appNameCapitalized}App`;
//         const appDir = path.resolve('./');
//         const appsDir = path.join(appDir, `/src/apps/${appFolderName}`);
//         const appDirControllers = path.join(appsDir, '/controllers');
//         const appDirRouter = path.join(appsDir, '/routers');
//         const appDirConfig = path.join(appsDir, '/config');
//         const appFileEnv = path.join(appDir, '/.env');
//         const appFileEnvJS = path.join(appsDir, '/config/ENV.js');
//         const appResourcesEnvFile = path.join(appDir, `/src/utils/resources/TEMPLATE_ENV`);
//         const appResourcesEnvFileJS = path.join(appDir, `/src/utils/resources/ENV.js`);
//         const appFileController = path.join(appsDir, `/controllers/${appNameCapitalized}Controller.js`);
//         const appResourcesControllerFile = path.join(appDir, `/src/utils/resources/Controller.js`);
//         const appFileRouter = path.join(appsDir, `/routers/${appNameCapitalized}Router.js`);
//         const appResourcesRouter = path.join(appDir, `/src/utils/resources/Router.js`);
//         const appFileApp = path.join(appsDir, `/App.js`);
//         const appResourcesApp = path.join(appDir, `/src/utils/resources/App.js`);
//         if (!fs.existsSync(appsDir)) {
//             fs.mkdirSync(appsDir);
//             fs.mkdirSync(appDirControllers);
//             fs.mkdirSync(appDirRouter);
//             fs.mkdirSync(appDirConfig);
//             if (!fs.existsSync(appFileEnv)) {
//                 copyAndModify(appResourcesEnvFile, appFileEnv, ['REPLACE_WITH_CAPITAL_NAME', 'REPLACE_WITH_APP_NAME'], [appNameFullyCapitalized, appNameCapitalized]);
//             }
//             else {
//                 copyAndModify(appResourcesEnvFile, appFileEnv, ['REPLACE_WITH_CAPITAL_NAME', 'REPLACE_WITH_APP_NAME'], [appNameFullyCapitalized, appNameCapitalized], 'appendFileSync');
//             }
//             copyAndModify(appResourcesEnvFileJS, appFileEnvJS, 'REPLACE_WITH_CAPITAL_NAME', appNameFullyCapitalized);
//             copyAndModify(appResourcesControllerFile, appFileController, 'REPLACE_WITH_APP_NAME', appNameCapitalized);
//             copyAndModify(appResourcesRouter, appFileRouter, 'REPLACE_WITH_APP_NAME', appNameCapitalized);
//             copyAndModify(appResourcesApp, appFileApp, 'REPLACE_WITH_APP_NAME', appNameCapitalized);
//         }
//         else {
//             console.log(`app ${appName} already exists`);
//             return;
//         }
//         console.log(appNameCapitalized);

//     }
//     else {
//         console.log('you must provide an app name like this\nnpm run make:app example\nwhich will create an ExampleApp in apps folder');
//     }
// })();
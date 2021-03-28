import fs from 'fs';
import path from 'path';

class ModuleLoader {
    static async load(modulesDir, fileName) {
        let output = {};
        if (fs.existsSync(modulesDir)) {
            const modules = fs.readdirSync(modulesDir);
            for (let index = 0; index < modules.length; index++) {
                const moduleDir = path.join(modulesDir, `${modules[index]}/${fileName}`);
                if (fs.existsSync(moduleDir)) {
                    output[modules[index]] = await import(`file:///${moduleDir}`);
                }
            }
        }
        return output;
    }
    static async loadAll(modulesDir) {
        let output = [];

        if (fs.existsSync(modulesDir)) {
            const modules = fs.readdirSync(modulesDir);
            for (let index = 0; index < modules.length; index++) {
                const moduleDir = path.join(modulesDir, modules[index]);
                //console.log(`DDDDDDDDDDDDDDDDDD: ${modules[index]}`);
                if (fs.statSync(moduleDir).isFile()) {

                    const module = await import(`file:///${moduleDir}`);
                    output.push(module);
                }
            }
        }
        return output;
    }
}

export default ModuleLoader;
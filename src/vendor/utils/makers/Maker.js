import fs from 'fs';
import path from 'path';

class AppMaker {
    constructor(ouput, template_Name, replace) {
        this.dir = path.resolve('./');
        this.envInputDir = path.join(this.dir, `/src/vendor/utils/templates/envs/`);
        this.inputDir = path.join(this.dir, `/src/vendor/utils/templates/${template_Name}`);
        this.outputDir = ouput;
        this.replace = replace;
    }
    start() {
        this.scan(path.join(this.inputDir, ''));
        //this.env();
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
    env(name) {
        const env_file_output = path.join(this.dir, '.env');
        let env_template = fs.readFileSync(path.join(this.envInputDir, name), 'utf8');
        env_template = this.parse(env_template);
        if (fs.existsSync(env_file_output)) {
            fs.appendFileSync(env_file_output, `\n\n${env_template}`);
        }
        else {
            fs.writeFileSync(env_file_output, env_template);
        }
    }
}

export default AppMaker;
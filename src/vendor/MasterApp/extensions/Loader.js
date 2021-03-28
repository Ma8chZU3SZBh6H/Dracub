import path from 'path';
import fs from 'fs';
import express from 'express';
import ModuleLoader from '../../loaders/ModuleLoader.js';

class Loader {
    constructor() {
        this.modules = {};
    }
    async auto() {
        await this.autoLoadRouters();
        await this.autoLoadWww();
    }
    async autoLoadRouters() {
        const routesDir = path.resolve(`./src/apps/${this.ENV.NAME}App/routers`);
        this.modules.routers = await ModuleLoader.loadAll(routesDir);
        for (const [key, value] of Object.entries(this.modules.routers)) {
            const router = value.default;
            this.app.use(router.path, router.register());
        }
    }
    async autoLoadWww() {
        const dir = path.resolve(`./src/apps/${this.ENV.NAME}App/www`);
        if (fs.existsSync(dir)) {
            this.app.use('/', express.static(dir));
        }
    }
    // async autoLoadEnv() {
    //     const dir = path.resolve(`./src/apps/${this.ENV.NAME}App/ENV.js`);
    //     if (fs.existsSync(dir)) {
    //         console.log(`AAAAAAAAAAAAAAAAAAAA ${dir}`);
    //         this.ENV = await import(dir.default);
    //     }
    // }
    // async autoLoadControllers() {
    //     const controllersDir = path.resolve(`./src/apps/${this.ENV.NAME}App/controllers`);
    //     this.modules.controllers = await ModuleLoader.loadAll(controllersDir);
    //     for (const [key, value] of Object.entries(this.modules.controllers)) {
    //         const controller = value.default;
    //         this.app.use(router.path, router.register());
    //     }
    // }
}

export default Loader;
import Test from '../models/Test.js';

class [APP_NAME]Controller {
    static async index(req, res) {
        try {
            const tests = await Test.find();
            res.send(tests);
        } catch (error) {
            res.status(500).send(false);
        }
    }
    static async store(req, res) {
        try {
            const test = new Test({ test: Math.round(Math.random() * 1000000) });
            test.save();
            res.send(test);
        } catch (error) {
            res.status(500).send(false);
        }
    }
    static async clear(req, res) {
        try {
            const tests = await Test.find().deleteMany();
            res.send(tests);
        } catch (error) {
            res.status(500).send(false);
        }
    }
}

export default [APP_NAME]Controller;
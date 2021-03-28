

class [CONTROLLER_NAME]Controller {
    static async index(req, res) {
        try {
            res.send('[CONTROLLER_NAME]');
        } catch (error) {
            res.status(500).send(false);
        }
    }
}

export default [CONTROLLER_NAME]Controller;
import User from '../models/user.js';

class UserController {
    static async get(req, res) {
        try {
            const user = await User.findOne({ email: req.user.email });
            res.json({ email: user.email });
        } catch (error) {
            res.status(500).send(false);
        }
    }
    static async delete(req, res) {
        try {
            await User.find().deleteMany();
            res.json(true);
        } catch (error) {
            res.status(500).send(false);
        }
    }
}

export default UserController;
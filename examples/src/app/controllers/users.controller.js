class UsersController {
    static async index(req, res) {
        res.send("from controller")
    }

    static async show(req, res) {
        res.send("by id")
    }
}

export default UsersController

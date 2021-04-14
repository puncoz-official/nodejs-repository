import { UserRepository } from "../repositories"

class UsersController {
    static async index(req, res) {
        const users = await UserRepository

        res.send("from controller")
    }

    static async show(req, res) {
        res.send("by id")
    }
}

export default UsersController

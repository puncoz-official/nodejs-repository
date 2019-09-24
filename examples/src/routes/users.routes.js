import { Router }          from "express"
import { UsersController } from "../app/controllers"

const router = new Router()

router.get("/", UsersController.index)
router.get("/:user_id", UsersController.show)

export default router

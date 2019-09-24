import { Router } from "express"
import userRoutes from "./users.routes"

const router = new Router()

router.use("/users", userRoutes)

export default router

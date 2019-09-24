import {
    json,
    urlencoded,
}                         from "body-parser"
import express            from "express"
import Knex               from "knex"
import methodOverride     from "method-override"
import { Model }          from "objection"
import { DatabaseConfig } from "../config"
import routes             from "../routes"

class App {
    constructor() {
        this.app = express()

        this.setup()
        this.database()
        this.routes()
    }

    setup() {
        this.app.use(json())
        this.app.use(urlencoded({ extended: true }))

        this.app.use(methodOverride("_method"))
    }

    database() {
        const knex = Knex(DatabaseConfig)
        Model.knex(knex)
    }

    routes() {
        this.app.use("/", routes)

        this.app.use((req, res, next) => {
            res.status(404)
               .json({ message: "Not found." })
        })
    }
}

export default (new App()).app

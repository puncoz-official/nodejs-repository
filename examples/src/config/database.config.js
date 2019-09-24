import { env } from "../helpers"

export default {
    client: "postgresql",
    connection: {
        host: env("DB_HOST"),
        port: env("DB_PORT"),
        database: env("DB_NAME"),
        user: env("DB_USER"),
        password: env("DB_PASS"),
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "migrations",
        directory: "src/database/migrations",
    },
    seeds: {
        directory: "database/seeds",
    },
}

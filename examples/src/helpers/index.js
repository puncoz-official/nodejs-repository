import { config as dotEnvConfig } from "dotenv"
import { resolve }                from "path"

dotEnvConfig({ path: resolve(__dirname, "../../.env") })

export const env = (key, defaultValue) => {
    const value = process.env[key] || defaultValue
    if (typeof value === "undefined") {
        throw new Error(`Environment variable ${key} not set.`)
    }

    return value
}

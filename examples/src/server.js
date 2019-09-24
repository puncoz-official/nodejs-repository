import app           from "./bootstrap/app"
import { AppConfig } from "./config"

const port = AppConfig.port

app.listen(port, () => {
    console.log(`Application started on port ${port}`)
})

import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"

import controllers from "./controller"
import middleware from "./middleware"

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(middleware.env)

Object.entries(controllers).forEach(([_key, val]) => {
    app.use(val.rootPath, val.router)
})

app.listen(3000, () => {
    console.log("Server running http://localhost:3000")
})

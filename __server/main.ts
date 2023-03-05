import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"

import controller from "./controller"

dotenv.config()

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const c = controller

app.use(c.root.path, c.root.router)
app.use(c.login.path, c.login.router)
app.use(c.content.path, c.content.router)
app.use(c.notFound.path, c.notFound.router)

app.listen(3000, () => {
    console.log("Server running http://localhost:3000")
})
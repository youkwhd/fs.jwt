import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

import middleware from "./middleware"
import data from "./data/user"
import type { User } from "./lib/user"

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/content", middleware.auth, (_req, res) => {
    res.send("this is a user-only content, you should get it if you have a JWT token")
})

app.post("/login", (req, res) => {
    // const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    const user: User | undefined = data.find((d) => d.username === req.body.username)

    if (!user)
        return res.sendStatus(400)

    if (!bcrypt.compareSync(req.body.password, user.password))
        return res.sendStatus(400)

    user.token = jwt.sign(user, process.env.TOKEN_SECRET as string, { expiresIn: "1h" })
    res.sendStatus(200)
})

app.all("*", (_req, res) => {
    res.sendStatus(404)
})

app.listen(3000, () => {
    console.log("server running http://localhost:3000")
})
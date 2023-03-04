import express from "express"
import fs from "fs"
import cors from "cors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

import middleware from "./middleware"
import data from "./data/user"
import type { User } from "./lib/user"

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (_req, res) => {
    const readmeFileContent = fs.readFileSync(`${__dirname}/../README`)
    res.send(`<pre>${readmeFileContent}</pre>`)
})

app.get("/content", middleware.auth, (_req, res) => {
    res.status(200).json({ err: null, content: "This is a user-only content, it will last for 1 minute, you should get it only if you have a JWT token"})
})

app.post("/login", (req, res) => {
    // const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    const user: User | undefined = data.find((d) => d.username === req.body.username)

    if (!user)
        return res.status(400).json({ err: null, content: null })

    if (!bcrypt.compareSync(req.body.password, user.password))
        return res.status(400).json({ err: null, content: null })

    user.token = jwt.sign(user, process.env.TOKEN_SECRET as string, { expiresIn: "1m" })
    res.json({ err: null, content: { token: user.token }})
})

app.all("*", (_req, res) => {
    res.sendStatus(404)
})

app.listen(3000, () => {
    console.log("server running http://localhost:3000")
})
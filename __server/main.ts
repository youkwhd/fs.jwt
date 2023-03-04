import express from "express"
import bcrypt from "bcrypt"
import middleware from "./middleware"
import jwt, { VerifyErrors } from "jsonwebtoken"
import * as dotenv from "dotenv"

import data, { type User } from "./data/user"

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvdWt3aGQiLCJwYXNzd29yZCI6IiQyYiQxMCRrS2RhRC9Rd1UvL0FDb3F6N29CYWNlcU55d09pVVg0LnVxZlZRVG52eGdtQm5zZmwyL3RudSIsInRva2VuIjpudWxsLCJpYXQiOjE2Nzc5MDg1NzUsImV4cCI6MTY3NzkxMjE3NX0._r5lF1Zg9pPStRUR9Q_KHFRFW_m9RqsVkgA7oQNb8XU

const app = express()
dotenv.config()

app.get("/", middleware.auth, (req, res) => {
    res.send("hello world")
})

app.get("/login", (_req, res) => {
    // const hashedPassword = bcrypt.hashSync("youkwhd", 10)
    // console.log(bcrypt.compareSync("youkwhd", data.password))
    // res.send(hashedPassword)
    res.send("login")
})

app.get("/secret", middleware.auth, (_req, res) => {
    res.send("this is a user-only content, you should get it if you have JWT token")
})

app.get("/auth", (_req, res) => {
    const user: User | undefined = data.find((d) => d.username === "youkwhd")

    if (!user)
        return res.sendStatus(403)

    const token = jwt.sign(user, process.env.TOKEN_SECRET as string, { expiresIn: "1h" })
    let JWT_ERR_VERIFY: VerifyErrors | null = null

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: VerifyErrors | null, encodedData) => {
        if (err) 
            JWT_ERR_VERIFY = err
    })

    if (JWT_ERR_VERIFY)
        return res.sendStatus(403)

    res.send(token)
})

app.all("*", (_req, res) => {
    res.sendStatus(404)
})

app.listen(3000, () => {
    console.log("server running http://localhost:3000")
})
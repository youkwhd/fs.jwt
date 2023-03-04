import express from "express"
import jwt, { VerifyErrors } from "jsonwebtoken"
import * as dotenv from "dotenv"

import data from "./data/user"

const app = express()
dotenv.config()

app.get("/auth", (_req, res) => {
    const token = jwt.sign(data, process.env.TOKEN_SECRET as string, { expiresIn: "1m" })
    let JWT_ERR_VERIFY: VerifyErrors | null = null

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: VerifyErrors | null, encodedData) => {
        if (err) { JWT_ERR_VERIFY = err }

        console.log(encodedData)
    })

    if (JWT_ERR_VERIFY)
        return res.sendStatus(403)

    res.send(token)
})

app.all("*", (_req, res) => {
    res.status(404).send("not found")
})

app.listen(3000, () => {
    console.log("server running http://localhost:3000")
})
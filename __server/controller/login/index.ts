import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import express from "express"

import { User } from "../../lib/user"
import data from "../../data/user"

const router = express.Router()

router.post("/login", (req, res) => {
    const user: User | undefined = data.find((d) => d.username === req.body.username)

    if (!user)
        return res.status(400).json({ err: "User was not found", content: null })

    if (!bcrypt.compareSync(req.body.password, user.password))
        return res.status(400).json({ err: "Password incorrect", content: null })

    user.token = jwt.sign(user, process.env.TOKEN_SECRET as string, { expiresIn: "1m" })
    res.json({ err: null, content: { token: user.token }})
})

export default router
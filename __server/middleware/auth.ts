import jwt from "jsonwebtoken"
import { tokenParse } from "../lib/token" 
import type { Request, Response, NextFunction } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
    const rawToken = req["headers"]["authorization"]

    if (!rawToken)
        return res.sendStatus(400)
    
    const token = tokenParse(rawToken)
    let isAuthorized = false

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err, decoded) => {
        if (err)
            return
        
        isAuthorized = true
    })

    if (!isAuthorized)
        return res.sendStatus(401)

    next()
}
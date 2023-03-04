import jwt, { VerifyErrors } from "jsonwebtoken"
import { tokenParse } from "../data/token" 
import { Request, Response, NextFunction } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
    const rawToken = req["headers"]["authorization"]

    if (!rawToken)
        return res.sendStatus(401)
    
    const token = tokenParse(rawToken)
    let isAuthorized = false

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err, decoded) => {
        if (err)
            return
        
        isAuthorized = true
    })

    if (!isAuthorized)
        return res.sendStatus(403)

    next()
}
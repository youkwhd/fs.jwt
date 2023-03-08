import type { Request, Response, NextFunction } from "express"
import { Return } from "../lib/json"

export default (_req: Request, res: Response, next: NextFunction) => {
    if (!process.env.TOKEN_SECRET)
        return res.json({ err: "Check your __server .env file" } as Return)

    next()
}

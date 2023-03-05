import express from "express"
import middleware from "../../middleware"
import { Return } from "../../lib/json"

const router = express.Router()

router.get("/content", middleware.auth, (_req, res) => {
    res.status(200).json({ err: null, content: "This is a user-only content, it will last for 1 minute, you should get it only if you have a JWT token"} as Return)
})

export default router

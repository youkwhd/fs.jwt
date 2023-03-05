import express from "express"
import { Return } from "../lib/json"

const router = express.Router()

router.all("*", (_req, res) => {
    res.status(404).json({ err: "Page not found" } as Return)
})

export default router
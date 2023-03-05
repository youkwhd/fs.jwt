import express from "express"

const router = express.Router()

router.all("*", (_req, res) => {
    res.status(404).json({ err: "Page not found" })
})

export default router
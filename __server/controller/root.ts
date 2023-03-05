import fs from "fs"
import express from "express"

const router = express.Router()

router.get("/", (_req, res) => {
    const readmeFileContent = fs.readFileSync(`${__dirname}/../../README`)
    res.send(`<pre>${readmeFileContent}</pre>`)
})

export default router
import express from "express"
import cors from "cors"
import infoRoutes from "./routes/infos.js"
import fileRoutes from "./routes/file.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/", infoRoutes)
app.use("/api/v1/", fileRoutes)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))


export default app
import express from "express"
import path from "path"
import cors from "cors"
import morgan from "morgan"
import usuarioRoutes from "./routes/usuarioRoutes"

const app = express()
app.use(cors())
app.use(express.json())
morgan.format("customDEV", ":method :url :status :response-time ms")
app.use(morgan("customDEV"))
app.use(express.urlencoded({ extended: true }))
// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "views"))
// Static Content
app.use(express.static(path.join(__dirname, "public")))
// Front
app.get("/views/:name", (req, res) => {
    const pageName = req.params.name
    res.render(pageName)
})
app.use("/api/usuarios", usuarioRoutes)
export default app
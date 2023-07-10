import express from "express"
import contatosRoutes from "./routes/contatos.js"
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())
app.use("/", contatosRoutes)

app.listen(8800)
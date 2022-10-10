const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors");
app.use(cors({ origin: "*" }))
require('dotenv').config()
const MainRoutes = require("./Routes/mainRoute")

app.get('/', async (req, res) => {
    res.send("Server is Working 👍")
})

app.use("/main", MainRoutes)

app.listen(process.env.PORT || 4999)
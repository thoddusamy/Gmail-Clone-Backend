const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors");
app.use(cors({ origin: "*" }))
require('dotenv').config()
const MainRoutes = require("./Routes/mainRoute")
const PortalRoutes = require("./Routes/portalRoute")

app.use("/", PortalRoutes)
app.use("/main", MainRoutes)

app.listen(process.env.PORT || 4999, () => console.log(`Server is running at 4999`))
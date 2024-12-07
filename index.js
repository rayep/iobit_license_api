import express from "express"
import https from "https"
import morgan from "morgan"
import { readFileSync } from "fs"

const app = express()
morgan.token("protocol", (req, res) => req.protocol);
app.use(morgan(":remote-addr -- :method :protocol://:req[host]:url HTTP/:http-version - :status"))

app.post("/keygen_v3/check.php", (req, res)=>{
    res.contentType('html').send("0&2030-05-01&600&600&2024-12-07&2011-03-03")
})

const server = https.createServer({cert:readFileSync('./dummy.crt'), key: readFileSync('./dummy.key')}, app)

server.listen(443, (req, res)=>{
    console.log("IOBIT License server has been started!")
})
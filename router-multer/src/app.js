const express = require ('express')
const path = require("path")
const petsRouter = require('./routes/pets.router.js') 
const usersRouter = require('./routes/users.router.js')

const app = express()
const PORT = 8080

app.use(express.json()) // middleware body (cuando envio info desde una URL)
app.use(express.urlencoded({ extended: true})) // middleware para recibir parametros por url

// servir archivos estaticos
app.use(express.static(path.join(__dirname, "public")))

app.use("/", petsRouter)
app.use("/", usersRouter)

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.htmal"))})

app.listen(PORT, ()=>{
    console.log(`server runing on PORT ${PORT}`)
})
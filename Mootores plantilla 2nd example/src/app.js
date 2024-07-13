import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//configurar handlebars para leer el contenido de los endpoints

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + "/views") //TODO
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

let food = [
    {name: "Hamburguesa", price: "1000"},
    {name: "Pizza", price: "500"},
    {name: "Lomo", price: "1500"}
]

//ruta que no deberia estar aqui
app.get('/', (req, res)=>{
    let testUser = {
        name: "Andres",
        last_name: "Mejia",
        // role: "user"
        role: "admin"
    }
    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === "admin",
        food
    })

})

app.listen(PORT, ()=>{
    console.log(`server runing on PORT ${PORT}`)
})
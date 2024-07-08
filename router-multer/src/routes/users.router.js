const express = require('express')
const router = express.Router()

const users = []

// get
router.get("/users", (req, res)=>{
    res.json(users)
})

// Post
router.post("/users", (req, res)=>{
    const newUser = req.body
    users.push(newUser)
    res.json({message: "Usuario agregado"})
})

module.exports = router
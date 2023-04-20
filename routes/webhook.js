const router = require('express').Router()
const db = require('../model/dbcontroller')

router.get('/', (req, res)=>{
    res.send('ok')
})

router.post('/webhook/pix', async (req,res)=>{
    const database = db.dataBase('./database/db')
    const body = req.body
    db.createTable(database.connection, "pixTransactions", body, false)
    console.log(body)
    db.insertRows(database.connection, "pixTransactions", [body])
    const select = await db.getResults(database.connection, "pixTransactions")
    console.log(select)
    res.status(200)
    res.send('ok')
})

module.exports = {router}
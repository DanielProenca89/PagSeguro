const db = require('./model/dbcontroller')
const express = require('express')
const {router} = require('./routes/webhook')

const app = express()
app.use(express.json());
app.use(router)

app.listen(80)


/*const database =  db.dataBase("")

db.createTable(database.connection,"testando", {nome:"Daniel", salario:3000.01})
db.insertRows(database.connection, "testando", [{nome:"Daniel", salario:3000.01}])
db.deleteRows(database.connection, "testando", "id is not null")

const teste = async ()=>{
const res = await db.getResults(database.connection, "testando", "")
console.log(res)
}

teste()*/




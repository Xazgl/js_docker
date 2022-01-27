// @ts-check
require('dotenv').config()
// подключение express
const express = require('express');
// создаем объект приложения
const app = express();
const multer = require('multer');
const sequelize = require('./db');
const UserModel = require('./model')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const port = process.env.PORT || 3000

// CRUD

// определяем обработчик для маршрута "/"
app.get("/test", function (request, response) {
    console.log(request.query);
    // отправляем ответ
    // response.redirect('/')
    response.send("Success");
});

app.post("/ticket", multer().none(), async function (request, response) {
    const { name, phone, date } = request.body
    const dbTicket = await UserModel.create({
        firstName: name,
        phone,
        dateTicket: date
    })
    // отправляем ответ
    // response.redirect('/')
    response.send(dbTicket);
});

app.get("/findDate",async function (request, response) {
    const { name } = request.body
   const answer =   UserModel.findOne({where: {firstName: name}})
   .then(answer=>{
    if(!answer) return;
    console.log(answer.dateTicket);
}).catch(err=>console.log(err));



app.use(express.static('./client'))

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Successful db sync');
        // начинаем прослушивать подключения на 3000 порту
        app.listen(port)
    } catch (error) {
        console.error(error)
    }
}

start()

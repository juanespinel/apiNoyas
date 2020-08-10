require('dotenv').config();

const express = require ('express');
const app = express();

const usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

app.listen (3000, () => console.log("servidor corriendo"));
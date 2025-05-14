const express = require('express');

const cors = require('cors');

const UserRouter = require('./routers/userRouter');

const port = 5000;

//initialize express app
const app = express();

//middleware
app.use(express.json());
app.use(cors({ origin: ['*'] }));

app.use('/user', UserRouter);

app.listen(port, () => { console.log('Server Started..!!'); })
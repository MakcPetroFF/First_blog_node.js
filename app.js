const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const postRouter = require('./routes/post');
const keys = require('./keys.js');

const port = process.env.PORT || 27017;
const clientPath = path.join(__dirname, 'client');

mongoose.set('useNewUrlParser', true);
mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB подключена.'))
    .catch(err => console.error(err))

const app = express();
app.use('/api/post', postRouter);
app.use(express.static(clientPath));

app.listen(port, () => {
    console.log('Сервер успешно запушен! ' + port);
});

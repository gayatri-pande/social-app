const express = require('express');
const app = express();

const PORT =3000;


const mainRoutes = require('./routes/index');
const dbConfig = require('./config/dbConfig');
app.use('/', mainRoutes);

app.listen(3000 , () => {
     console.log(`Server is listening at port ${PORT}`);
     dbConfig.connectDb();
});
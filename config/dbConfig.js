const mongoose = require('mongoose');

const connectDb = ()  => {
    mongoose.connect('mongodb://localhost:27017/social-app');
    mongoose.connection.on('connected' ,() => {
         console.log('Database connected successfully');
    });
    mongoose.connection.on('error' ,() => {
        console.log('Error in connecting database');
   });
};

module.exports = {
    connectDb
}
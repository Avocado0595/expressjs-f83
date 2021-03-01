const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect database successfully!');
    }
    catch(error){
        console.log('Connect database fail!')
    }
}

module.exports = {connect};
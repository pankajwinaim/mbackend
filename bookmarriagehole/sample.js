const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/myapp',{serverSelectionTimeoutMS: 5000}).then(() => console.log('Connected!')).catch((err)=>console.log("pankaj",err));



require('dotenv').config();
const mongoose = require('mongoose');

mongoose
   .connect(process.MONGODB_URI, {
    
   })
   .then(() => {
    console.log("DB Coneected");
   })
   .catch((err) => console.log(err));

const mongoose = require("mongoose");


mongoose.connect(`mongodb://localhost/coin_collecting_app_db2`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log(`Established connection with coin_collecting_app_db2`))
    .catch((err)=>console.log('Something went wrong connecting to the database ',err))
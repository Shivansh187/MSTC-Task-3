const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/RegistrationMSTC", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> {
    console.log(`connection successsful`);
}).catch((e) => {
    console.log(`no connection`)
})
const mongoose = require("mongoose")

const somethingSchema = new mongoose.Schema({
        name : {
            type:String,
        }
})


const Something = mongoose.model('something', somethingSchema)

module.exports = {Something}
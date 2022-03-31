const mongoose =  require('mongoose')

const usersSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    password:[{type:String, required:true}],
    confirmPassword:[{type:String, required:true}],
    urlImage:{type:String, required:true},
    country:{type:String, required:true},
    uniqueString:{type:String, required:true},
    verifiedEmail:{type:Boolean, required:true},
    from:{type:Array}
})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const donorSchema = new Schema({
   
     username: {
         type: String,
         required: true
    },
     email: {
         type: String,
         required: true
     },
    contactNo :{
        type:Number,
        required:true
    },
    following: [
        {
           type: Schema.Types.ObjectId,
           ref: 'NGO'
       }
   ]
    })

donorSchema.plugin(passportLocalMongoose); 
module.exports = mongoose.model('Donor', donorSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const NGOSchema = new Schema({
   
     username: {
         type: String,
         required: true
    },
     email: {
         type: String,
         required: true
     },
     state: {
        type: String,
        required: true
    },
    contactperson1:{
        type:String,
        required: true
    },
    contactNo1 :{
        type:Number,
        required:true
    },
    contactperson2:{
        type:String,
        required: true
    },
    contactNo2 :{
        type:Number,
        required:true
    },
    instalink:{
        type:String,
    },
    facebooklink:{
        type:String,
    },
    profile:[
        {
           path:String,
           filename:String
        }
     ],
    images:[
        {
           path:String,
           filename:String
        }
     ],
     description: {
        type: String,
        required: true
   },
   categories: [String],
   Events: [{
    eventname:{ 
       type: String 
       },
       eventdetails:{ 
          type: String 
          },
    images:[
       {
          path:String,
          filename:String
       }
    ]
 }], 
 Emergencies: [{
    title:{ 
       type: String 
       },
       details:{ 
          type: String 
          },
          requirements:{ 
            type: String 
            }
 }],
    follower: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Donor'
        }
    ]
    })

NGOSchema.plugin(passportLocalMongoose); 
module.exports = mongoose.model('NGO', NGOSchema);
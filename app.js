if(process.env.NODE_ENV !=="production"){
   require('dotenv').config()
}

// const cloudname=process.env.cloudname
// const API=process.env.APIcloudinary
// const secret=process.env.secretcloudinary
const express = require('express');
const app= express();
const path= require('path');
const Donor = require('./models/donor');
const NGO = require('./models/NGO');
const ejsMate= require('ejs-mate');
const methodOverride= require('method-override');
const mongoose= require('mongoose');
const DonorRoutes= require('./routes/donor');
const NGORoutes= require('./routes/NGO');
const flash= require('connect-flash');
const session= require('express-session');
const bodyParser = require('body-parser');
// import React from 'react';
// import Home from './Home';

// const App = () => {
//   return (
//     <Home />
//   );
// };

// export default App;

mongoose.connect('mongodb://127.0.0.1:27017/NGO', 
    {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.set('strictQuery', false);
    const db= mongoose.connection;
    db.on('error', console.error.bind(console, "connection error:"));
    db.once("open", () => {
       console.log("Database connected");
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

    app.engine('ejs', ejsMate);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(methodOverride('_method'));
    app.use(express.static(path.join(__dirname, 'public')));

    const sessionConfig = {
      
        secret:"thisismtsecret",
        resave: false,
        saveUninitialized: true,
        cookie: {
           httpOnly: true,  //for more security
           expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
           maxAge: 1000 * 60 * 60 * 24 * 7
        }
     }

     app.use(session(sessionConfig));
     app.use(flash());

     app.use((req,res,next) => {
        console.log(req.session);
        res.locals.currentUser = req.user;
        res.locals.success=req.flash('success');
        res.locals.error= req.flash('error');
        next();
     })

     app.use('/NGO', NGORoutes);   
app.use('/', DonorRoutes);
 
app.get('/', (req, res) => {
   res.render('./Home/public/index');
})
    

app.listen(3000, () => {
    console.log(`App is listening on port 3000`)
  })
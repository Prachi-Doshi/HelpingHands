const express = require('express');
const mongoose= require('mongoose');
const router = express.Router();
const NGO = require('../models/NGO');
const Donor = require('../models/donor');
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const { cloudinary } = require('../cloudinary/index');
const upload = multer({ storage });
const passport = require('passport').Passport;
const NGOpassport=new passport();
const localStrategy= require('passport-local');
const { isNGOLoggedIn } = require('../middleware');

router.use(NGOpassport.initialize());
router.use(NGOpassport.session()); //always remember passport.session in written after app.use(session()).
NGOpassport.use(new localStrategy(NGO.authenticate()));
//this 2 statements are for adding and removing user from session.
NGOpassport.serializeUser(NGO.serializeUser());
NGOpassport.deserializeUser(NGO.deserializeUser()); //this 2 statements are for adding and removing user from session.

router.get('/homepage',async(req,res) =>{
  const userId = req.user;
  console.log(req.user);
  const Ngo= await NGO.findById(userId);
  res.render('NGO/homepage.ejs',{Ngo});
 });

router.get('/register',(req,res) =>{
    res.render('NGO/NGOregister.ejs');
   });
  
router.post('/register',upload.array('profile'),async (req, res) => {
    console.log(req.body,req.file)
    try {
      const { email, username,contactNo1,contactperson1,contactNo2,contactperson2,password,description,categories,instalink,facebooklink,state} = req.body;
      const images = req.files.map( f=> ({ path:f.path, filename:f.filename }));
      const user = new NGO({ email, username,contactNo1,contactperson1,contactNo2,contactperson2,categories,description,images,instalink,facebooklink,state});
      const registeredUser = await NGO.register(user, password);
  
      req.login(registeredUser, err => {
          if (err); 
          res.redirect('/homepage');
      })
  } catch (e) {
    console.log(e);
      res.redirect('register');
  }
  });

router.get('/login',async(req,res) =>{
    const userId = req.user;
    console.log(userId);
    const user = await  NGO.findById(userId);
    res.render('NGO/NGOlogin.ejs',{user});
   });

router.post('/login', NGOpassport.authenticate('local', { failureFlash: true,failureRedirect: '/NGO/login'}),async(req, res) => {
    const redirectUrl = req.session.returnTo || '/homepage';
    delete req.session.returnTo;
    console.log(redirectUrl);
    res.redirect('homepage');
 });
 
 router.get('/homepage/:id/addevent',async(req,res)=>{
  const userId = req.user;
  console.log(req.user);
  const Ngo= await NGO.findById(userId);
  res.render('NGO/addevent.ejs',{Ngo});
});

router.post('/homepage/:id/addevent',upload.array('image'),async(req,res)=>{
  console.log(req.body,req.files);
  const images = req.files.map( f=> ({ path:f.path, filename:f.filename }));
  const { eventname ,eventdetails} = req.body;
  const userId = req.user._id;
  const user=req.user;
  const ngo = await NGO.findByIdAndUpdate(userId, {$push:{ Events: {eventname,eventdetails,images}}});
  res.redirect('/NGO/homepage');
});


router.get('/homepage/:id/addemg',async(req,res)=>{
  const userId = req.user;
  console.log(req.user);
  const ngo= await NGO.findById(userId);
  res.render('NGO/addemergency.ejs',{ngo});
});

router.post('/homepage/:id/addemg',async(req,res)=>{
  console.log("ofgsuifhljns",req.body);
  const { title ,details,requirements} = req.body;
  const userId = req.user._id;
  const user=req.user;
  const ngo = await NGO.findByIdAndUpdate(userId, {$push:{ Emergencies: { title ,details,requirements}}});
  res.redirect('/Events');
});

router.get('/homepage/:id/edit',async(req,res)=>{
  const { id }=req.params;
  const user = await NGO.findById(id);
  res.render('NGO/edit.ejs',{user});
});

router.get('/homepage/:id',async(req,res) =>{
  const userId = req.user;
  const Ngo= await NGO.findById(userId);
  res.render('NGO/homepage.ejs',{Ngo});
 });

router.put('/homepage/:id',async(req,res)=>{
  const userId = req.user;
  console.log(req.user);
  const user= await NGO.findById(userId);
const { email, username,contactNo1,contactperson1,contactNo2,contactperson2,description,categories,state} = req.body;
user.email = email;
user.username = username;
user.contactNo1 = contactNo1;
user.state=state;
user.contactNo2 = contactNo2;
user.contactperson1 = contactperson1;
user.contactperson2 = contactperson2;
user.description = description;
user.categories = categories;
await user.save();
console.log(user);
  res.redirect('/NGO/homepage');
})

router.put('homepage/delete/:Ngo/:eve',async(req, res) => {
  const { Ngo, eve } = req.params;
  console.log(req.params);
  await NGO.findByIdAndUpdate(Ngo, { $pull: { Emergencies: eve }});
  req.flash('success', "Student removed from waiting list!");
  res.redirect(`/NGO/homepage`);
  
})

module.exports = router;
const express = require('express');
const mongoose= require('mongoose');
const router = express.Router({mergeparams:true});
const Donor = require('../models/donor');
const NGO= require('../models/NGO');
const passport = require('passport').Passport;
const Donorpassport=new passport();
const localStrategy= require('passport-local');

router.use(Donorpassport.initialize());
router.use(Donorpassport.session()); //always remember passport.session in written after app.use(session()).
    
Donorpassport.use(new localStrategy(Donor.authenticate()));
Donorpassport.serializeUser(Donor.serializeUser());
Donorpassport.deserializeUser(Donor.deserializeUser());

router.use((req,res,next)=>{
    res.locals.currentUser =req.user;
    next();
})

router.get('/aboutus', (req, res) => {
  res.render('aboutus');
})
router.get('/homepage/:cat',async(req,res) =>{
  
  const { cat }=req.params;
  console.log("oufrsyhfnaklfm",cat);
  const Ngo= await NGO.find({});
   res.render(`Donor/${cat}.ejs`,{Ngo,cat});
 }); 

router.get('/homepage/view/:id',async(req,res)=>{
  console.log(req.params);
  const { id }=req.params;
  console.log(id);
  const ngo = await NGO.findById(id);
  res.render('Donor/NGOhomepage.ejs',{ngo});
});

 router.put('/homepage/:id',async(req,res) =>{
    console.log(req.params);
    const usr =req.user;
    const { id }=req.params;
    console.log(id);
    const ngo = await NGO.findById(id);
    console.log(usr);
  
    if((ngo.follower).includes(usr))
    {
      console.log('error', 'Already following!');
  }
  else{
  await Donor.findByIdAndUpdate(usr,{$push:{following:id}});
  await NGO.findByIdAndUpdate(id, {$push: {follower: usr}});
  }

  res.redirect('/homepage');
 
   });

router.get('/homepage',async(req,res) =>{
    console.log(req.user);
    const Ngo= await NGO.find({});
    res.render('Donor/homepage.ejs',{Ngo});
   });

  

router.get('/register',(req,res) =>{
    res.render('Donor/registerdonor.ejs');
   });
  
router.post('/register',async (req, res) => {
    console.log(req.body)
    try {
        const { email, username,contactNo,password} = req.body;
        const user = new Donor({ email, username, contactNo});
        const registeredUser = await Donor.register(user, password);
        req.login(registeredUser, err => {
            if (err); 
            res.redirect('homepage');
        })
    } catch (e) {
      console.log(e);
        res.redirect('register');
    }
  });

  router.get('/login',(req,res) =>{
    res.render('Donor/login.ejs');
   });

router.post('/login', Donorpassport.authenticate('local', { failureFlash: true, failureRedirect: '/' }), async(req, res) => {
    const userId = req.user;
    console.log(userId);
    const user = await Donor.findById(userId);
    const redirectUrl = req.session.returnTo || '/homepage';
    delete req.session.returnTo;
    console.log(redirectUrl);
   res.redirect(redirectUrl)
 });
 
 router.get('/Events',async(req,res) =>{
  console.log(req.user);
    const Ngo= await NGO.find({});
  console.log(Ngo);
  res.render('Donor/Events.ejs',{Ngo});
 });
 

module.exports = router;